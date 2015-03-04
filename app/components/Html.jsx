'use strict';
var React = require('react');
var HeadParams = require('../lib/HeadParams');

var Html = React.createClass({
  propTypes: {
    headParams: React.PropTypes.instanceOf(HeadParams)
  },
  render: function() {
    // FIXME: do this properly & test the async snippet https://developers.google.com/analytics/devguides/collection/gajs/
    var gaScript = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-32959034-1', 'percolatestudio.com');";
    
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

          <script dangerouslySetInnerHTML={{__html: gaScript}}></script>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script src="/client.js" async></script>
      </html>
    );
  }
});

module.exports = Html;
