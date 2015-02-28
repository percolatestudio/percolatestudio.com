// script assumes process.cwd() is the output directory

require('node-jsx').install({ extension: '.jsx' });

var React = require('react');
var HtmlComponent = React.createFactory(require('./components/Html.jsx'));
var Router = require('react-router');

var cwd = process.cwd();
var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');
var routes = require('./components/Routes.jsx');

// FIXME: Turns out interrogating the router is a little tricky and maybe not
// quite worth the time yet. I've opened an issue to see if anyone has done it
// here: https://github.com/rackt/react-router/issues/885
//
// Until then, we list just hardcode the pages we're interested in
var pages = ['/', '/about'];

pages.forEach(function(page) {
  Router.run(routes, page, function (Handler, state) {
    var html = React.renderToStaticMarkup(HtmlComponent({
      title: 'Example',
      markup: React.renderToString(React.createFactory(Handler)())
    }));

    writePage(page, html);
  });
});

// converts a page into a filepath relative to cwd and writes contents there
function writePage(page, contents) {
  if (page === '/')
    page = '/index';
  
  var filePath = path.join(cwd, page + '.html');
  
  // make all of the directories in filePath, like mkdir -p
  mkdirp.sync(path.dirname(filePath));
  
  fs.writeFileSync(filePath, contents);
  console.log(filePath);
}