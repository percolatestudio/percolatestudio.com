/*global document, window */
'use strict';

require("./stylesheets/main.less");

var React = require('react');
var Router = require('react-router');
var HistoryLocation = Router.HistoryLocation;

var routes = require('./components/Routes.jsx');

window.React = React; // For chrome dev tool support

var mountNode = document.getElementById('app');

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createFactory(Handler)(), mountNode);
  console.log('React Rendered');
});
