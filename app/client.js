/*global document, window*/
'use strict';

/**
 * This is the entry point for the Single Page App that will run in the client.
 * Its built by webpack and included via a <script> in the page that will
 * be booting it up. It will render itself into the <body>, hopefully, the
 * contents of which have been rendered by the server or a static page.
 *
 * Client side push state routing will be performed by React Router after the
 * initial page load.
 */

require("./stylesheets/main.less");

var React = require('react');
var Router = require('react-router');
var HeadParams = require('./lib/HeadParams');
var HistoryLocation = require('react-router').HistoryLocation;

var routes = require('./components/Routes');

window.React = React; // For chrome dev tool support
var headParams = new HeadParams();

// Hack HistoryLocation to support running inside Optimizely's editor
HistoryLocation.getCurrentPath = function() {
  var path = decodeURI(window.location.pathname + window.location.search);
  // When running inside the optimizely editor, path will be something like:
  // "/http://static-test.percolatestudio.com/?optimizely_disable=true..."
  //
  // This regexp strips the start back to /?...
  path = path.replace(/^\/https?\:\/\/.*?\//, '/');

  return path;
}

// Enable logging for optimizely
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push(["log"]);

// Activate all Optimizely experiments. This should be re-run if page content
// that's targetted by Optimizely changes.
// NOTE: Supposedly window.optimizely.push(["activate"]); should achieve the
// same result however this doesn't seem to work properly in practice. I've
// filed a support ticket for it.
var activateAllOptimizelyExperiments = function() {
  var ids = [];

  if (window['optimizely'] && window['optimizely'].data)
    ids = window['optimizely'].data.state.activeExperiments;

  ids.forEach(function(id) {
    console.log('sending optimizely activation for id ' + id);
    window.optimizely.push(["activate", id]);
  });
}

Router.run(routes, HistoryLocation, function (Handler, state) {
  var bodyElement = React.createFactory(Handler)({
    params: state.params,
    headParams: headParams,
    clientReady: true });

  React.render(bodyElement, document.body, function() {
    console.log('Client rendered at path ' + state.path);

    // Track clientside routing with GA, it should be loaded...
    if (window.ga) {
      window.ga('send', 'pageview', { 'page': state.path });
    }

    // Ensure optimizely reruns on route change
    activateAllOptimizelyExperiments();
  });
});
