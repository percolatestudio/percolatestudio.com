/*global document, window */
'use strict';

require("./stylesheets/main.less");

var React = require('react');
window.React = React; // For chrome dev tool support
var Router = require('react-router');
var HeadParams = require('./lib/HeadParams');

var HistoryLocation = Router.HistoryLocation;

var routes = require('./components/Routes');
var headParams = new HeadParams();

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  var bodyElement = React.createFactory(Handler)({ 
    params: state.params, 
    headParams: headParams,
    clientReady: true });
  
  React.render(bodyElement, document.body);
  console.log('Client Rendered');
});
