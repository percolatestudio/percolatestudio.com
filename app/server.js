require('node-jsx').install({ extension: '.jsx' });

var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html'));
var Router = require('react-router');
var HeadParams = require('./lib/HeadParams');

var express = require('express');
var routes = require('./components/Routes');

var server = express();
server.use('/', express.static(__dirname + '/../build'));
server.use(express.static(__dirname + '/assets'));

var headParams = new HeadParams();

server.use(function (req, res, next) {
  Router.run(routes, req.path, function (Handler, state) {
    var bodyElement = React.createFactory(Handler)({ 
      params: state.params, 
      headParams: headParams,
      clientReady: false 
    });
    
    var html = React.renderToStaticMarkup(HtmlComponent({
      headParams: headParams,
      markup: React.renderToString(bodyElement)
    }));

    console.log('Rendering ' + req.path);
    res.send(html);
  });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
