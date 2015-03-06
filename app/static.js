// script assumes process.cwd() is the output directory
var outputDir = process.cwd();

require('node-jsx').install({ extension: '.jsx' });

var _ = require('lodash');
var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html'));
var Router = require('react-router');
var HeadParams = require('./lib/HeadParams');
var StaticTools = require('./lib/StaticTools');

var routes = require('./components/Routes');
var Collections = require('./components/Collections');

// Interrogate the router for the route definitions and interpolate path
// components for products and careers

var productNames = _.pluck(Collections.Products, 'name');
var jobNames = _.pluck(Collections.Jobs, 'name');

var pages = StaticTools.gather(routes);
pages = StaticTools.interpolate(pages, '/what/:name', 'name', productNames);
pages = StaticTools.interpolate(pages, '/careers/:name', 'name', jobNames);

// Write the sitemap with the pages we have so far
StaticTools.writePage(outputDir, '/sitemap', 
  StaticTools.makeSitemap(pages, 'http://percolatestudio.com'), 'xml');

pages.push('/error'); // Will hit the NotFound route and generate error.html

// Manually specify indexes on these directory paths. Otherwise navigating to
// foo/ will do a directory listing. Its possible we can automate this in
// interrogate()
pages.push('/careers/');
pages.push('/what/');

var headParams = new HeadParams();

// Render each path
pages.forEach(function(page) {
  Router.run(routes, page, function (Handler, state) {
    console.log(page);
    var bodyElement = React.createFactory(Handler)({ 
      params: state.params, 
      headParams: headParams,
      clientReady: false 
    });
    
    var html = React.renderToStaticMarkup(HtmlComponent({
      headParams: headParams,
      markup: React.renderToString(bodyElement)
    }));

    StaticTools.writePage(outputDir, page, html, 'html');
  });
});