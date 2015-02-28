// Write your package code here!
if (Meteor.isServer) {
  Router = Npm.require('react-router');
} else {
  Router = ReactRouter;
}