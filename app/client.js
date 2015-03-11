/*global document, window */
'use strict';

require("./stylesheets/main.less");

var React = require('react');
var Router = require('react-router');
var HeadParams = require('./lib/HeadParams');
var routes = require('./components/Routes');

window.React = React; // For chrome dev tool support
var headParams = new HeadParams();

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  var bodyElement = React.createFactory(Handler)({ 
    params: state.params, 
    headParams: headParams,
    clientReady: true });
  
  React.render(bodyElement, document.body);
  console.log('Client Rendered');
  
  // Track clientside routing with GA, it should be loaded...
  if (window.ga) {
    window.ga('send', 'pageview', { 'page': state.path });
  }
});
