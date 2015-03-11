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
    });
    
    var sitemap = Sitemap.createSitemap({
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

    // strips regexp chars out of the route, eg a trailing ?
    function fix(routePath) {
      return routePath.replace(/\?$/, '');
    }

    routes.forEach(function(route) {
      var props = route._store.props; // eslint-disable-line no-underscore-dangle
      var routePath = props.path;

      if (routePath) {
        routePath = parentPath ? path.join(parentPath, routePath) : routePath;

        result.push(fix(routePath));
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
  interpolate: function(paths, forPath, key, values) {
    var result = [];
  
    paths.forEach(function(routePath) {
      if (routePath === forPath) {
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
  
  // converts a page into a html path relative to cwd and writes contents there
  writeHtmlPage: function(dir, page, contents) {
    // Replace trailing / with index.html
    if (page.match(/\/$/)) {
      page += 'index.html';
    }

    this.writeFile(dir, page, contents);
  },
  
  // just writes a file
  writeFile: function(dir, fileName, contents) {
    var filePath = path.join(dir, fileName);

    // make all of the directories in filePath, like mkdir -p
    mkdirp.sync(path.dirname(filePath));
    fs.writeFileSync(filePath, contents);
  }
};

module.exports = StaticTools;
