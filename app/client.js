/*global document, window */
'use strict';

require("./stylesheets/main.less");

var React = require('react');
var Router = require('react-router');

var HistoryLocation = Router.HistoryLocation;

var routes = require('./components/Routes');

window.React = React; // For chrome dev tool support

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(React.createFactory(Handler)({ params: state.params }), document.body);
  console.log('Client Rendered');
});

