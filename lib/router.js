Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});


Router.route('/', {name: 'home'});
Router.route('/why');
Router.route('/how');

Router.route('/what');
Router.route('/what/:name', {
  name: 'product',
  data: function() {
    return Products.findOne({name: this.params.name});
  }
});

Router.route('/careers');
Router.route('/careers/:name', {
  name: 'job',
  data: function() {
    return Jobs.findOne({name: this.params.name});
  }
});

Router.route('/styleguide/base');
Router.route('/styleguide/case-study');
