"use strict";

var Sitemap = require("sitemap");
var path = require("path");
var fs = require("fs");
var mkdirp = require("mkdirp");

var StaticTools = {
  /**
   * Generates a sitemap.xml from your pages. Assigns priority based on depth.
   * You will probably need to customize this for your own app if you want per
   * page beahvior.
   *
   * @param {string[]} pages - Array containing pages, e.g "/", "/foo"
   * @param {string} hostname - The hostname to use in the sitemap
   * @returns {string} The sitemap xml contents
   */
  makeSitemap: function(pages, hostname) {
    var urls = [];
    var now = new Date();

    pages.forEach(function(page) {
      // / => 0, /foo => 1, /foo/bar => 2
      var depth = (page.match(/\//g) || []).length;

      // / => 1, /foo => 0.5, /foo/bar => 0.33
      var priority = (page === "/" ? 1 : 1 / (depth + 1));

      urls.push({
        url: page, changefreq: "weekly", priority: priority, lastmod: now
      });
    });

    var sitemap = Sitemap.createSitemap({
      hostname: hostname,
      // 600 sec cache period
      cacheTime: 600000,
      urls: urls
    });

    return sitemap.toString();
  },

  /**
   * Turns React Router routes into a list of paths. Recursive.
   *
   * @param {Object} routes - React Router Routes
   * @param {string} [parentPath] - Path to next results under
   * @returns {string[]} The resulting pages, eg ["/", "/about"]
   */
  gather: function(routes, parentPath) {
    var result = [];
    routes = Array.isArray(routes) ? routes : [routes];

    // strips regexp chars out of the route, eg a trailing ?
    var fix = function(routePath) {
      return routePath.replace(/\?$/, "");
    };

    routes.forEach(function(route) {
      /* eslint-disable no-underscore-dangle */
      var props = route._store.props;
      /* eslint-enable no-underscore-dangle */
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

  /**
   * Interpolates values into a parameterized route, replacing the target.
   *
   * @param {string[]} paths - A list of paths, eg ["/", "/what/:name"]
   * @param {string} forPath - The path we're interpolating eg "/what/:name"
   * @param {string} key - The key we're interpolating for eg "name"
   * @param {string[]} values - The values to interpolate in eg ["foo", "bar"]
   * @returns {string[]} The resulting pages, eg ["/", "/what/foo", "/what/bar"]
   */
  interpolate: function(paths, forPath, key, values) {
    var result = [];

    paths.forEach(function(routePath) {
      if (routePath === forPath) {
        values.forEach(function(value) {
          var interpolated = routePath.replace(":" + key, value);

          result.push(interpolated);
        });
      } else {
        result.push(routePath);
      }
    });

    return result;
  },

  /**
   * Converts a page into a html file path and writes contents to disk.
   *
   * @param {string} dir - The directory to write to.
   * @param {string} page - The page to write.
   * @param {string} contents - The contents of the page.
   * @return {void}
   */
  writeHtmlPage: function(dir, page, contents) {
    // Replace trailing / with index.html
    if (page.match(/\/$/)) {
      page += "index.html";
    }

    this.writeFile(dir, page, contents);
  },

  /**
   * Just writes a file.
   *
   * @param {string} dir - The directory to write to.
   * @param {string} fileName - The name of the file.
   * @param {string} contents - The contents to write.
   * @return {void}
   */
  writeFile: function(dir, fileName, contents) {
    var filePath = path.join(dir, fileName);

    // make all of the directories in filePath, like mkdir -p
    mkdirp.sync(path.dirname(filePath));
    fs.writeFileSync(filePath, contents);
  }
};

module.exports = StaticTools;
