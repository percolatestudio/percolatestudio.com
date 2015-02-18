Meteor.startup(function() {
  Router.run(routes, function (Handler) {
    Tracker.autorun(function() {
      React.render(<Handler/>, document.body);
    });
  });
});
