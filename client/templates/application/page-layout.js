Template.pageLayout.helpers({
  routeName: function() {
    return Router.current().route.getName();
  },
  routeSubName: function() {
    var controller = Router.current();
    var routeName = controller.route.options.routeName;
    return routeName && routeName.call(controller);
  },
  activeClass: function(name) {
    return (Router.current().route.getName() === name) && 'active';
  }
});