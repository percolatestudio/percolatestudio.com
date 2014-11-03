(function () {

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/autoupdate/autoupdate_client.js                                                //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
if (! Meteor.isDevel)                                                                      // 1
  return;                                                                                  // 2
                                                                                           // 3
// Subscribe to the `meteor_autoupdate_clientVersions` collection,                         // 4
// which contains the set of acceptable client versions.                                   // 5
//                                                                                         // 6
// A "hard code push" occurs when the running client version is not in                     // 7
// the set of acceptable client versions (or the server updates the                        // 8
// collection, there is a published client version marked `current` and                    // 9
// the running client version is no longer in the set).                                    // 10
//                                                                                         // 11
// When the `reload` package is loaded, a hard code push causes                            // 12
// the browser to reload, so that it will load the latest client                           // 13
// version from the server.                                                                // 14
//                                                                                         // 15
// A "soft code push" represents the situation when the running client                     // 16
// version is in the set of acceptable versions, but there is a newer                      // 17
// version available on the server.                                                        // 18
//                                                                                         // 19
// `Autoupdate.newClientAvailable` is a reactive data source which                         // 20
// becomes `true` if there is a new version of the client is available on                  // 21
// the server.                                                                             // 22
//                                                                                         // 23
// This package doesn't implement a soft code reload process itself,                       // 24
// but `newClientAvailable` could be used for example to display a                         // 25
// "click to reload" link to the user.                                                     // 26
                                                                                           // 27
// The client version of the client code currently running in the                          // 28
// browser.                                                                                // 29
var autoupdateVersion = __meteor_runtime_config__.autoupdateVersion || "unknown";          // 30
var autoupdateVersionRefreshable =                                                         // 31
  __meteor_runtime_config__.autoupdateVersionRefreshable || "unknown";                     // 32
                                                                                           // 33
// The collection of acceptable client versions.                                           // 34
ClientVersions = new Mongo.Collection("meteor_autoupdate_clientVersions");                 // 35
                                                                                           // 36
Autoupdate = {};                                                                           // 37
                                                                                           // 38
Autoupdate.newClientAvailable = function () {                                              // 39
  return !! ClientVersions.findOne({                                                       // 40
               _id: "version",                                                             // 41
               version: {$ne: autoupdateVersion} }) ||                                     // 42
         !! ClientVersions.findOne({                                                       // 43
               _id: "version-refreshable",                                                 // 44
               version: {$ne: autoupdateVersionRefreshable} });                            // 45
};                                                                                         // 46
                                                                                           // 47
var knownToSupportCssOnLoad = false;                                                       // 48
                                                                                           // 49
var retry = new Retry({                                                                    // 50
  // Unlike the stream reconnect use of Retry, which we want to be instant                 // 51
  // in normal operation, this is a wacky failure. We don't want to retry                  // 52
  // right away, we can start slowly.                                                      // 53
  //                                                                                       // 54
  // A better way than timeconstants here might be to use the knowledge                    // 55
  // of when we reconnect to help trigger these retries. Typically, the                    // 56
  // server fixing code will result in a restart and reconnect, but                        // 57
  // potentially the subscription could have a transient error.                            // 58
  minCount: 0, // don't do any immediate retries                                           // 59
  baseTimeout: 30*1000 // start with 30s                                                   // 60
});                                                                                        // 61
var failures = 0;                                                                          // 62
                                                                                           // 63
Autoupdate._retrySubscription = function () {                                              // 64
  Meteor.subscribe("meteor_autoupdate_clientVersions", {                                   // 65
    onError: function (error) {                                                            // 66
      Meteor._debug("autoupdate subscription failed:", error);                             // 67
      failures++;                                                                          // 68
      retry.retryLater(failures, function () {                                             // 69
        // Just retry making the subscription, don't reload the whole                      // 70
        // page. While reloading would catch more cases (for example,                      // 71
        // the server went back a version and is now doing old-style hot                   // 72
        // code push), it would also be more prone to reload loops,                        // 73
        // which look really bad to the user. Just retrying the                            // 74
        // subscription over DDP means it is at least possible to fix by                   // 75
        // updating the server.                                                            // 76
        Autoupdate._retrySubscription();                                                   // 77
      });                                                                                  // 78
    },                                                                                     // 79
    onReady: function () {                                                                 // 80
      if (Package.reload) {                                                                // 81
        var checkNewVersionDocument = function (doc) {                                     // 82
          var self = this;                                                                 // 83
          if (doc._id === 'version-refreshable' &&                                         // 84
              doc.version !== autoupdateVersionRefreshable) {                              // 85
            autoupdateVersionRefreshable = doc.version;                                    // 86
            // Switch out old css links for the new css links. Inspired by:                // 87
            // https://github.com/guard/guard-livereload/blob/master/js/livereload.js#L710 // 88
            var newCss = (doc.assets && doc.assets.allCss) || [];                          // 89
            var oldLinks = [];                                                             // 90
            _.each(document.getElementsByTagName('link'), function (link) {                // 91
              if (link.className === '__meteor-css__') {                                   // 92
                oldLinks.push(link);                                                       // 93
              }                                                                            // 94
            });                                                                            // 95
                                                                                           // 96
            var waitUntilCssLoads = function  (link, callback) {                           // 97
              var executeCallback = _.once(callback);                                      // 98
              link.onload = function () {                                                  // 99
                knownToSupportCssOnLoad = true;                                            // 100
                executeCallback();                                                         // 101
              };                                                                           // 102
              if (! knownToSupportCssOnLoad) {                                             // 103
                var id = Meteor.setInterval(function () {                                  // 104
                  if (link.sheet) {                                                        // 105
                    executeCallback();                                                     // 106
                    Meteor.clearInterval(id);                                              // 107
                  }                                                                        // 108
                }, 50);                                                                    // 109
              }                                                                            // 110
            };                                                                             // 111
                                                                                           // 112
            var removeOldLinks = _.after(newCss.length, function () {                      // 113
              _.each(oldLinks, function (oldLink) {                                        // 114
                oldLink.parentNode.removeChild(oldLink);                                   // 115
              });                                                                          // 116
            });                                                                            // 117
                                                                                           // 118
            var attachStylesheetLink = function (newLink) {                                // 119
              document.getElementsByTagName("head").item(0).appendChild(newLink);          // 120
                                                                                           // 121
              waitUntilCssLoads(newLink, function () {                                     // 122
                Meteor.setTimeout(removeOldLinks, 200);                                    // 123
              });                                                                          // 124
            };                                                                             // 125
                                                                                           // 126
            if (newCss.length !== 0) {                                                     // 127
              _.each(newCss, function (css) {                                              // 128
                var newLink = document.createElement("link");                              // 129
                newLink.setAttribute("rel", "stylesheet");                                 // 130
                newLink.setAttribute("type", "text/css");                                  // 131
                newLink.setAttribute("class", "__meteor-css__");                           // 132
                newLink.setAttribute("href", css.url);                                     // 133
                attachStylesheetLink(newLink);                                             // 134
              });                                                                          // 135
            } else {                                                                       // 136
              removeOldLinks();                                                            // 137
            }                                                                              // 138
                                                                                           // 139
          }                                                                                // 140
          else if (doc._id === 'version' && doc.version !== autoupdateVersion) {           // 141
            handle && handle.stop();                                                       // 142
            Package.reload.Reload._reload();                                               // 143
          }                                                                                // 144
        };                                                                                 // 145
                                                                                           // 146
        var handle = ClientVersions.find().observe({                                       // 147
          added: checkNewVersionDocument,                                                  // 148
          changed: checkNewVersionDocument                                                 // 149
        });                                                                                // 150
      }                                                                                    // 151
    }                                                                                      // 152
  });                                                                                      // 153
};                                                                                         // 154
Autoupdate._retrySubscription();                                                           // 155
                                                                                           // 156
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
