Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('why');
  this.route('how');
  this.route('what');
  this.route('careers');
  this.route('styleguide');
});