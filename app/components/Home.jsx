'use strict';
var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <img src="/img/logo.svg" />
        <p>Welcome to the site!</p>
      </div>
    );
  }
});

module.exports = Home;
