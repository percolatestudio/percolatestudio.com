// script assumes process.cwd() is the output directory

require('node-jsx').install({ extension: '.jsx' });

var _ = require('lodash');
var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html'));
var Router = require('react-router');

var cwd = process.cwd();
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');

var routes = require('./components/Routes');
var Collections = require('./components/Collections');

// Interrogate the router for the route definitions and interpolate path
// components for products and careers

var productNames = _.pluck(Collections.Products, 'name');
var jobNames = _.pluck(Collections.Jobs, 'name');

var paths = gather(routes);
paths = interpolate(paths, '/what/:name', 'name', productNames);
paths = interpolate(paths, '/careers/:name', 'name', jobNames);

paths.push('/error'); // Will hit the NotFound route and generate error.html

// Render each path
paths.forEach(function(page) {
  Router.run(routes, page, function (Handler, state) {
    var html = React.renderToStaticMarkup(HtmlComponent({
      // FIXME: hook this in
      title: 'Percolate Studio: Product Design & Software Engineering',
      markup: React.renderToString(React.createFactory(Handler)({ params: state.params }))
    }));

    writePage(page, html);
  });
});

// converts a page into a filepath relative to cwd and writes contents there
function writePage(page, contents) {
  function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }

  if (endsWith(page, '/'))
    page += 'index';

  var filePath = path.join(cwd, page + '.html');

  // make all of the directories in filePath, like mkdir -p
  mkdirp.sync(path.dirname(filePath));

  fs.writeFileSync(filePath, contents);
  console.log(filePath);
}

// Returns an array containing paths that correspond to routes
// For example: ['/', '/about']
function gather(routes, parentPath) {
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
      result = result.concat(gather(props.children, routePath));
    }
  });

  return result;
};

// Takes an array of paths, a target path, path component key and an array of
// values. Returns a new array of paths with the values interpolated in place
// of the path component key.
//
// E.g:
// interpolate(['/', '/what/:name'], '/what/:name', 'name', ['foo', 'bar'])
//
// returns ['/', '/what/foo', '/what/bar']
function interpolate(paths, path, key, values) {
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
}