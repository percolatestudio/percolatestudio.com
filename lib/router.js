Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});


Router.route('/', {name: 'home'});
Router.route('/why');
Router.route('/how');
Router.route('/what');
Router.route('/careers');
Router.route('/styleguide/base');
Router.route('/styleguide/case-study');
