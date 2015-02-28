'use strict';
var React = require('react');
var Nav = require('./Nav.jsx');
var RouteHandler = require('react-router').RouteHandler;

var Application = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Application;
