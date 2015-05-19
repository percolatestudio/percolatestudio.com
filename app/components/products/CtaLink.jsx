"use strict";
var React = require("react");

var CtaLink = React.createClass({
  render: function() {
    return (
      <div className="wrapper-cta-case-study">
        <p>{this.props.title}</p>
        <a className="btn-wire-inverse caps cta-case-study" onClick={this.props.openContact.bind(null, true)}>Get in Touch</a>
      </div>
    );
  }
});

module.exports = CtaLink;
