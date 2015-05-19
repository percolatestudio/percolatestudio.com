"use strict";

/**
 * This is the entry point for the node server that can run the app whilst its
 * in development or later if dynamic content is added. It renders the <body>
 * just like the client would, but in addition it also renders the actual
 * <html> including the contents in the <head> needed for SEO.
 *
 * Routing is performed by React Router as in the client but here on the server
 * its plugged into express.
 */

require("node-jsx").install({extension: ".jsx"});

var React = require("react");
var Router = require("react-router");
var HeadParams = require("./lib/HeadParams");
var htmlComponent = React.createFactory(require("./components/Html"));

var express = require("express");
var routes = require("./components/Routes");
var path = require("path");

var server = express();
server.use("/", express.static(path.join(__dirname, "../build")));
server.use(express.static(path.join(__dirname, "/assets")));

var headParams = new HeadParams();

server.use(function(req, res) {
  Router.run(routes, req.path, function(Handler, state) {
    var bodyElement = React.createFactory(Handler)({
      params: state.params,
      headParams: headParams,
      clientReady: false
    });

    var html = React.renderToStaticMarkup(htmlComponent({
      headParams: headParams,
      markup: React.renderToString(bodyElement)
    }));

    console.log("Rendering " + req.path);
    res.send(html);
  });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log("Listening on port " + port);
