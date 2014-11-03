(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/autoupdate/autoupdate_cordova.js                                                                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var DEBUG_TAG = 'METEOR CORDOVA DEBUG (autoupdate_cordova.js) ';                                                // 1
var log = function (msg) {                                                                                      // 2
  console.log(DEBUG_TAG + msg);                                                                                 // 3
};                                                                                                              // 4
                                                                                                                // 5
// This constant was picked by testing on iOS 7.1                                                               // 6
// We limit the number of concurrent downloads because iOS gets angry on the                                    // 7
// application when a certain limit is exceeded and starts timing-out the                                       // 8
// connections in 1-2 minutes which makes the whole HCP really slow.                                            // 9
var MAX_NUM_CONCURRENT_DOWNLOADS = 30;                                                                          // 10
var MAX_RETRY_COUNT = 5;                                                                                        // 11
                                                                                                                // 12
var autoupdateVersionCordova = __meteor_runtime_config__.autoupdateVersionCordova || "unknown";                 // 13
                                                                                                                // 14
// The collection of acceptable client versions.                                                                // 15
ClientVersions = new Meteor.Collection("meteor_autoupdate_clientVersions");                                     // 16
                                                                                                                // 17
Autoupdate = {};                                                                                                // 18
                                                                                                                // 19
Autoupdate.newClientAvailable = function () {                                                                   // 20
  return !! ClientVersions.findOne({                                                                            // 21
    _id: 'version-cordova',                                                                                     // 22
    version: {$ne: autoupdateVersionCordova}                                                                    // 23
  });                                                                                                           // 24
};                                                                                                              // 25
                                                                                                                // 26
var writeFile = function (directoryPath, fileName, content, cb) {                                               // 27
  var fail = function (err) {                                                                                   // 28
    cb(new Error("Failed to write file: ", err), null);                                                         // 29
  };                                                                                                            // 30
                                                                                                                // 31
  window.resolveLocalFileSystemURL(directoryPath, function (dirEntry) {                                         // 32
    var success = function (fileEntry) {                                                                        // 33
      fileEntry.createWriter(function (writer) {                                                                // 34
        writer.onwrite = function (evt) {                                                                       // 35
          var result = evt.target.result;                                                                       // 36
          cb(null, result);                                                                                     // 37
        };                                                                                                      // 38
        writer.onerror = fail;                                                                                  // 39
        writer.write(content);                                                                                  // 40
      }, fail);                                                                                                 // 41
    };                                                                                                          // 42
                                                                                                                // 43
    dirEntry.getFile(fileName, {                                                                                // 44
      create: true,                                                                                             // 45
      exclusive: false                                                                                          // 46
    }, success, fail);                                                                                          // 47
  }, fail);                                                                                                     // 48
};                                                                                                              // 49
                                                                                                                // 50
var restartServer = function (location) {                                                                       // 51
  log('restartServer with location ' + location);                                                               // 52
  var fail = function (err) { log("Unexpected error in restartServer: " + err.message) };                       // 53
  var httpd = cordova && cordova.plugins && cordova.plugins.CordovaUpdate;                                      // 54
                                                                                                                // 55
  if (! httpd) {                                                                                                // 56
    fail(new Error('no httpd'));                                                                                // 57
    return;                                                                                                     // 58
  }                                                                                                             // 59
                                                                                                                // 60
  var startServer = function (cordovajsRoot) {                                                                  // 61
    httpd.startServer({                                                                                         // 62
      'www_root' : location,                                                                                    // 63
      'cordovajs_root': cordovajsRoot                                                                           // 64
    }, function (url) {                                                                                         // 65
      Package.reload.Reload._reload();                                                                          // 66
    }, fail);                                                                                                   // 67
  };                                                                                                            // 68
                                                                                                                // 69
  httpd.getCordovajsRoot(function (cordovajsRoot) {                                                             // 70
    startServer(cordovajsRoot);                                                                                 // 71
  }, fail);                                                                                                     // 72
};                                                                                                              // 73
                                                                                                                // 74
var hasCalledReload = false;                                                                                    // 75
var updating = false;                                                                                           // 76
var localPathPrefix = null;                                                                                     // 77
                                                                                                                // 78
var onNewVersion = function () {                                                                                // 79
  var ft = new FileTransfer();                                                                                  // 80
  var urlPrefix = Meteor.absoluteUrl() + '__cordova';                                                           // 81
  HTTP.get(urlPrefix + '/manifest.json', function (err, res) {                                                  // 82
    if (err || ! res.data) {                                                                                    // 83
      log('Failed to download the manifest ' + (err && err.message) + ' ' + (res && res.content));              // 84
      return;                                                                                                   // 85
    }                                                                                                           // 86
                                                                                                                // 87
    updating = true;                                                                                            // 88
    ensureLocalPathPrefix(_.bind(downloadNewVersion, null, res.data));                                          // 89
  });                                                                                                           // 90
};                                                                                                              // 91
                                                                                                                // 92
var downloadNewVersion = function (program) {                                                                   // 93
  var urlPrefix = Meteor.absoluteUrl() + '__cordova';                                                           // 94
  var manifest = _.clone(program.manifest);                                                                     // 95
  var version = program.version;                                                                                // 96
  var ft = new FileTransfer();                                                                                  // 97
                                                                                                                // 98
  manifest.push({ url: '/index.html?' + Random.id() });                                                         // 99
                                                                                                                // 100
  var versionPrefix = localPathPrefix + version;                                                                // 101
                                                                                                                // 102
  var queue = [];                                                                                               // 103
  _.each(manifest, function (item) {                                                                            // 104
    if (! item.url) return;                                                                                     // 105
                                                                                                                // 106
    var url = item.url;                                                                                         // 107
    url = url.replace(/\?.+$/, '');                                                                             // 108
                                                                                                                // 109
    queue.push(url);                                                                                            // 110
  });                                                                                                           // 111
                                                                                                                // 112
  var afterAllFilesDownloaded = _.after(queue.length, function () {                                             // 113
    var wroteManifest = function (err) {                                                                        // 114
      if (err) {                                                                                                // 115
        log("Failed to write manifest.json: " + err);                                                           // 116
        // XXX do something smarter?                                                                            // 117
        return;                                                                                                 // 118
      }                                                                                                         // 119
                                                                                                                // 120
      // success! downloaded all sources and saved the manifest                                                 // 121
      // save the version string for atomicity                                                                  // 122
      writeFile(localPathPrefix, 'version', version, function (err) {                                           // 123
        if (err) {                                                                                              // 124
          log("Failed to write version: " + err);                                                               // 125
          return;                                                                                               // 126
        }                                                                                                       // 127
                                                                                                                // 128
        // don't call reload twice!                                                                             // 129
        if (! hasCalledReload) {                                                                                // 130
          var location = uriToPath(localPathPrefix + version);                                                  // 131
          restartServer(location);                                                                              // 132
        }                                                                                                       // 133
      });                                                                                                       // 134
    };                                                                                                          // 135
                                                                                                                // 136
    writeFile(versionPrefix, 'manifest.json',                                                                   // 137
              JSON.stringify(program, undefined, 2), wroteManifest);                                            // 138
  });                                                                                                           // 139
                                                                                                                // 140
  var dowloadUrl = function (url) {                                                                             // 141
    console.log(DEBUG_TAG + "start dowloading " + url);                                                         // 142
    // Add a cache buster to ensure that we don't cache an old asset.                                           // 143
    var uri = encodeURI(urlPrefix + url + '?' + Random.id());                                                   // 144
                                                                                                                // 145
    // Try to dowload the file a few times.                                                                     // 146
    var tries = 0;                                                                                              // 147
    var tryDownload = function () {                                                                             // 148
      ft.download(uri, versionPrefix + encodeURI(url), function (entry) {                                       // 149
        if (entry) {                                                                                            // 150
          console.log(DEBUG_TAG + "done dowloading " + url);                                                    // 151
          // start downloading next queued url                                                                  // 152
          if (queue.length)                                                                                     // 153
            dowloadUrl(queue.shift());                                                                          // 154
          afterAllFilesDownloaded();                                                                            // 155
        }                                                                                                       // 156
      }, function (err) {                                                                                       // 157
        // It failed, try again if we have tried less than 5 times.                                             // 158
        if (tries++ < MAX_RETRY_COUNT) {                                                                        // 159
          log("Download error, will retry (#" + tries + "): " + uri);                                           // 160
          tryDownload();                                                                                        // 161
        } else {                                                                                                // 162
          log('Download failed: ' + JSON.stringify(err) + ", source=" + err.source + ", target=" + err.target); // 163
        }                                                                                                       // 164
      });                                                                                                       // 165
    };                                                                                                          // 166
                                                                                                                // 167
    tryDownload();                                                                                              // 168
  };                                                                                                            // 169
                                                                                                                // 170
  _.times(Math.min(MAX_NUM_CONCURRENT_DOWNLOADS, queue.length), function () {                                   // 171
    var nextUrl = queue.shift();                                                                                // 172
    // XXX defer the next download so iOS doesn't rate limit us on concurrent                                   // 173
    // downloads                                                                                                // 174
    Meteor.setTimeout(dowloadUrl.bind(null, nextUrl), 50);                                                      // 175
  });                                                                                                           // 176
};                                                                                                              // 177
                                                                                                                // 178
var retry = new Retry({                                                                                         // 179
  minCount: 0, // don't do any immediate retries                                                                // 180
  baseTimeout: 30*1000 // start with 30s                                                                        // 181
});                                                                                                             // 182
var failures = 0;                                                                                               // 183
                                                                                                                // 184
Autoupdate._retrySubscription = function () {                                                                   // 185
  var appId = __meteor_runtime_config__.appId;                                                                  // 186
  Meteor.subscribe("meteor_autoupdate_clientVersions", appId, {                                                 // 187
    onError: function (err) {                                                                                   // 188
      Meteor._debug("autoupdate subscription failed:", err);                                                    // 189
      failures++;                                                                                               // 190
      retry.retryLater(failures, function () {                                                                  // 191
        // Just retry making the subscription, don't reload the whole                                           // 192
        // page. While reloading would catch more cases (for example,                                           // 193
        // the server went back a version and is now doing old-style hot                                        // 194
        // code push), it would also be more prone to reload loops,                                             // 195
        // which look really bad to the user. Just retrying the                                                 // 196
        // subscription over DDP means it is at least possible to fix by                                        // 197
        // updating the server.                                                                                 // 198
        Autoupdate._retrySubscription();                                                                        // 199
      });                                                                                                       // 200
    }                                                                                                           // 201
  });                                                                                                           // 202
  if (Package.reload) {                                                                                         // 203
    var checkNewVersionDocument = function (doc) {                                                              // 204
      var self = this;                                                                                          // 205
      if (doc.version !== autoupdateVersionCordova) {                                                           // 206
        onNewVersion();                                                                                         // 207
      }                                                                                                         // 208
    };                                                                                                          // 209
                                                                                                                // 210
    var handle = ClientVersions.find({                                                                          // 211
      _id: 'version-cordova'                                                                                    // 212
    }).observe({                                                                                                // 213
      added: checkNewVersionDocument,                                                                           // 214
      changed: checkNewVersionDocument                                                                          // 215
    });                                                                                                         // 216
  }                                                                                                             // 217
};                                                                                                              // 218
                                                                                                                // 219
Meteor.startup(function () {                                                                                    // 220
  clearAutoupdateCache(autoupdateVersionCordova);                                                               // 221
});                                                                                                             // 222
Meteor.startup(Autoupdate._retrySubscription);                                                                  // 223
                                                                                                                // 224
                                                                                                                // 225
// A helper that removes old directories left from previous autoupdates                                         // 226
var clearAutoupdateCache = function (currentVersion) {                                                          // 227
  ensureLocalPathPrefix(function () {                                                                           // 228
    // Try to clean up our cache directory, make sure to scan the directory                                     // 229
    // *before* loading the actual app. This ordering will prevent race                                         // 230
    // conditions when the app code tries to download a new version before                                      // 231
    // the old-cache removal has scanned the cache folder.                                                      // 232
    listDirectory(localPathPrefix, {dirsOnly: true}, function (err, names) {                                    // 233
      // Couldn't get the list of dirs or risking to get into a race with an                                    // 234
      // on-going update to disk.                                                                               // 235
      if (err || updating) {                                                                                    // 236
        return;                                                                                                 // 237
      }                                                                                                         // 238
                                                                                                                // 239
      _.each(names, function (name) {                                                                           // 240
        // Skip the folder with the latest version                                                              // 241
        if (name === currentVersion)                                                                            // 242
          return;                                                                                               // 243
                                                                                                                // 244
        // remove everything else, as we don't want to keep too much cache                                      // 245
        // around on disk                                                                                       // 246
        removeDirectory(localPathPrefix + name + '/', function (err) {                                          // 247
          if (err) {                                                                                            // 248
            log('Failed to remove an old cache folder '                                                         // 249
                + name + ':' + err.message);                                                                    // 250
          } else {                                                                                              // 251
            log('Successfully removed an old cache folder ' + name);                                            // 252
          }                                                                                                     // 253
        });                                                                                                     // 254
      });                                                                                                       // 255
    });                                                                                                         // 256
  })                                                                                                            // 257
};                                                                                                              // 258
                                                                                                                // 259
// Cordova File plugin helpers                                                                                  // 260
var listDirectory = function (url, options, cb) {                                                               // 261
  if (typeof options === 'function')                                                                            // 262
    cb = options, options = {};                                                                                 // 263
                                                                                                                // 264
  var fail = function (err) { cb(err); };                                                                       // 265
  window.resolveLocalFileSystemURL(url, function (entry) {                                                      // 266
    var reader = entry.createReader();                                                                          // 267
    reader.readEntries(function (entries) {                                                                     // 268
      var names = [];                                                                                           // 269
      _.each(entries, function (entry) {                                                                        // 270
        if (! options.dirsOnly || entry.isDirectory)                                                            // 271
          names.push(entry.name);                                                                               // 272
      });                                                                                                       // 273
      cb(null, names);                                                                                          // 274
    }, fail);                                                                                                   // 275
  }, fail);                                                                                                     // 276
};                                                                                                              // 277
                                                                                                                // 278
var removeDirectory = function (url, cb) {                                                                      // 279
  var fail = function (err) {                                                                                   // 280
    cb(err);                                                                                                    // 281
  };                                                                                                            // 282
  window.resolveLocalFileSystemURL(url, function (entry) {                                                      // 283
    entry.removeRecursively(function () { cb(); }, fail);                                                       // 284
  }, fail);                                                                                                     // 285
};                                                                                                              // 286
                                                                                                                // 287
var uriToPath = function (uri) {                                                                                // 288
  return decodeURI(uri).replace(/^file:\/\//g, '');                                                             // 289
};                                                                                                              // 290
                                                                                                                // 291
var ensureLocalPathPrefix = function (cb) {                                                                     // 292
  if (! localPathPrefix) {                                                                                      // 293
    if (! cordova.file.dataDirectory) {                                                                         // 294
      // Since ensureLocalPathPrefix function is always called on                                               // 295
      // Meteor.startup, all Cordova plugins should be ready.                                                   // 296
      // XXX Experiments have shown that it is not always the case, even when                                   // 297
      // the cordova.file symbol is attached, properties like dataDirectory                                     // 298
      // still can be null. Poll until we are sure the property is attached.                                    // 299
      console.log(DEBUG_TAG + 'cordova.file.dataDirectory is null, retrying in 20ms');                          // 300
      Meteor.setTimeout(_.bind(ensureLocalPathPrefix, null, cb), 20);                                           // 301
    } else {                                                                                                    // 302
      localPathPrefix = cordova.file.dataDirectory + 'meteor/';                                                 // 303
      cb();                                                                                                     // 304
    }                                                                                                           // 305
  } else {                                                                                                      // 306
    cb();                                                                                                       // 307
  }                                                                                                             // 308
};                                                                                                              // 309
                                                                                                                // 310
                                                                                                                // 311
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
