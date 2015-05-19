/*global document, window*/
"use strict";

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

var React = require("react");
var Router = require("react-router");
var HeadParams = require("./lib/HeadParams");
var routes = require("./components/Routes");

// For chrome dev tool support
window.React = React;
var headParams = new HeadParams();

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  var bodyElement = React.createFactory(Handler)({
    params: state.params,
    headParams: headParams,
    clientReady: true});

  React.render(bodyElement, document.body);
  console.log("Client Rendered");

  // Track clientside routing with GA, it should be loaded...
  if (window.ga) {
    window.ga("send", "pageview", {page: state.path});
  }
});
