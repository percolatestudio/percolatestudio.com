"use strict";
var React = require("react");
var HeadParams = require("../lib/HeadParams");

// Configure these
var GA_ACCOUNT = "UA-32959034-1";
var GA_OPTIONS = {
  cookieDomain: "auto"
};

// From: https://developers.google.com/analytics/devguides/collection/analyticsjs/advanced
var gaSnippet = "window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;"
  + "ga('create', '" + GA_ACCOUNT + "', " + JSON.stringify(GA_OPTIONS) + ");"
  + "ga('send', 'pageview');";

var Html = React.createClass({
  propTypes: {
    headParams: React.PropTypes.instanceOf(HeadParams)
  },
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.headParams.title}</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="description" content={this.props.headParams.description} />
          <meta name="robots" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width" />
          <meta name="google-site-verification" content="G-f4VlVk_kGNsRzL_Oz7HODwbEGVJfB-xS2z0-hEC6I" />

          <link rel="shortcut icon" type="image/png" href="/favicon.png" sizes="16x16 32x32 64x64" />
          <link href="/client.css" media="all" rel="stylesheet" />

          <script async src="//www.google-analytics.com/analytics.js"></script>
          <script dangerouslySetInnerHTML={{__html: gaSnippet}}></script>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script src="/client.js" async></script>
      </html>
    );
  }
});

module.exports = Html;
