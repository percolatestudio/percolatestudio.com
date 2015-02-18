Meteor.startup(function() {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    Tracker.autorun(function() {
      React.render(<Handler/>, document.body);
    });
  });
});
