var SCROLLABLE = '.page';

var setHistoryState = function (ourState) {
  var state = Iron.Location.get().options.historyState;
  var newState  = _.extend({}, state, ourState);
  Iron.Location.go(Iron.Location.get().path, {historyState: newState, replaceState: true});
}

Template.pageLayout.rendered = function() {
  var self = this;
  
  var state = Iron.Location.get().options.historyState;
  if (state && state.lastScrollTop) {
    // wait until it's on the screen (not sure why afterFlush doesn't work)
    Meteor.setTimeout(function() {
      self.$(SCROLLABLE).scrollTop(state.lastScrollTop);
    }, 0);
  }
  
  // XXX: should we find a requestAnimationFrame version of _.throttle?
  self.$(SCROLLABLE).scroll(_.throttle(function() {
    var offset = self.find(SCROLLABLE).scrollTop;
    setHistoryState({lastScrollTop: offset})
  }, 500));
}

Template.pageLayout.helpers({
  routeName: function() {
    return Router.current().route.getName().replace('.', '-');
  },
  routeSubName: function() {
    var controller = Router.current();
    var routeName = controller.route.options.routeName;
    return routeName && routeName.call(controller);
  },
  activeClass: function(name) {
    return (Router.current().route.getName() === name) && 'active';
  },
  thisArray: function() { // see todos for why
    return [this];
  }
});