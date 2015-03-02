var React = require('react');
var Router = require('react-router');

var Layout = require('./Layout');
var Home = require('./Home');
var How = require('./How');
var What = require('./What');
var Product = require('./Product');
var Careers = require('./Careers');
var Job = require('./Job');
var StyleguideBase = require('./styleguide/Base');
var StyleguideCaseStudy = require('./styleguide/CaseStudy');
var NotFound = require('./NotFound');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

// var Application = require('./Application.jsx');
// var Home = require('./Home.jsx');
// var About = require('./About.jsx');
//
// var routes = (
//   <Route name="app" path="/" handler={Application}>
//     <Route name="about" handler={About}/>
//     <DefaultRoute name="home" handler={Home}/>
//   </Route>
// );

// var routes = (
//   <Route name="appBody" path="/" handler={Layout}>
//     <DefaultRoute name="home" handler={Home}/>
//   </Route>
// );

var routes = (
  <Route name="appBody" path="/" handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>

    <Route name="how" path="how" handler={How}/>

    <Route name="what" path="what" handler={What}/>
    <Route name="product" path="what/:name" handler={Product}/>

    <Route name="careers" path="careers" handler={Careers}/>
    <Route name="job" path="careers/:name" handler={Job}/>

    <Route path="styleguide/base" name="styleguide-base" handler={StyleguideBase}/>
    <Route path="styleguide/case-study" name="styleguide-case-study" handler={StyleguideCaseStudy}/>

    {/* TODO: make this a server-side route */}
    <Redirect from="case-studies/verso" to="what" params={{name: 'verso'}}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = routes;