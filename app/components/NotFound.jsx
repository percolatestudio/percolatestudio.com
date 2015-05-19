"use strict";
var React = require("react");
var PageLayout = require("./PageLayout");

var NotFound = React.createClass({
  render: function() {
    return (
      <PageLayout {...this.props}>
        <div className="header">
          <div className="wrapper-hero">
            <img title="404" className="hero" src="/img/notfound-160x160.svg"/>
            <h1 className="title-page">Not Found</h1>
            <p className="description-page">Yikes! The content you were looking for cannot be found.</p>
            <a className="btn-secondary caps" href="/">Return Home</a>
          </div>
        </div>
      </PageLayout>
    );
  }
});

module.exports = NotFound;
