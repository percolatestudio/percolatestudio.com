'use strict';
var React = require('react');
var HeadParams = require('../lib/HeadParams');

// configure these
var GA_ACCOUNT = 'UA-32959034-1';
var GA_DOMAIN = 'percolatestudio.com';

// From: https://developers.google.com/analytics/devguides/collection/gajs/
var gaSnippet = "var _gaq = _gaq || []; \
_gaq.push(['_setAccount', ' " + GA_ACCOUNT + "']); \
_gaq.push(['_trackPageview']); \
_gaq.push(['_setDomainName', '" + GA_DOMAIN + "']); \
(function() { \
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; \
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; \
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); \
})();";

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

          <link rel="shortcut icon" type="image/png" href="/favicon.png" sizes="16x16 32x32 64x64" />
          <link href="/client.css" media="all" rel="stylesheet" />

          <script dangerouslySetInnerHTML={{__html: gaSnippet}}></script>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script src="/client.js" async></script>
      </html>
    );
  }
});

module.exports = Html;
