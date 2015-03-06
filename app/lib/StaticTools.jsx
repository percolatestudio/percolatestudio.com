'use strict';

var Sitemap = require('sitemap');
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

var StaticTools = {
  // Generates a sitemap.xml from your pages. Assigns priority based on depth.
  // You will probably need to customize this for your own app if you want per
  // page beahviour
  makeSitemap: function(pages, hostname) {
    var urls = [];
    var now = new Date();
    
    pages.forEach(function(page) {
      // / => 0, /foo => 1, /foo/bar => 2
      var depth = (page.match(/\//g) || []).length;
      
      // / => 1, /foo => 0.5, /foo/bar => 0.33
      var priority = ( page === '/' ? 1 : 1 / (depth + 1) );

      urls.push({
        url: page, changefreq: 'weekly', priority: priority, lastmod: now
      });
    }.bind(this));
    
    var sitemap = Sitemap.createSitemap ({
      hostname: hostname,
      cacheTime: 600000,  // 600 sec cache period
      urls: urls
    });
    
    return sitemap.toString();
  },
  
  // Returns an array containing paths that correspond to routes
  // For example: ['/', '/about']
  gather: function(routes, parentPath) {
    var result = [];
    routes = Array.isArray(routes) ? routes : [routes];

    routes.forEach(function(route) {
      var props = route._store.props;
      var routePath = props.path;

      if (routePath) {
        routePath = parentPath ? path.join(parentPath, routePath) : routePath;

        result.push(routePath);
      }
      if (props.children) {
        result = result.concat(this.gather(props.children, routePath));
      }
    }.bind(this));

    return result;
  },

  // Takes an array of paths, a target path, path component key and an array of
  // values. Returns a new array of paths with the values interpolated in place
  // of the path component key.
  //
  // E.g:
  // interpolate(['/', '/what/:name'], '/what/:name', 'name', ['foo', 'bar'])
  //
  // returns ['/', '/what/foo', '/what/bar']
  interpolate: function(paths, path, key, values) {
    var result = [];
  
    paths.forEach(function(routePath) {
      if (routePath === path) {
        values.forEach(function(value) {
          var interpolated = routePath.replace(':' + key, value);

          result.push(interpolated);
        });
      } else {
        result.push(routePath);
      }
    });
  
    return result;
  },
  
  // Converts a page to a filename, e.g '/' => 'index.html'
  pageToFilename: function(page, extension) {
    function endsWith(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    if (endsWith(page, '/'))
      page += 'index';

    return page + '.' + extension;
  },
  
  // converts a page into a filepath relative to cwd and writes contents there
  writePage: function(dir, page, contents, extension) {
    var filePath = path.join(dir, this.pageToFilename(page, extension));
    
    // make all of the directories in filePath, like mkdir -p
    mkdirp.sync(path.dirname(filePath));

    fs.writeFileSync(filePath, contents);
  }
}

module.exports = StaticTools;