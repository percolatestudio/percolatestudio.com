var RESPONSIVE_BREAKPOINT = 800;

var collections = {
  Products: Products,
  Jobs: Jobs
};

// when this changes, re-render
//
//
// Template.registerHelper('responsiveImgSrc', function(smallSrc, largeSrc) {
//     return imgSrc(smallSrc);
//   } else {
//     return imgSrc(largeSrc);
//   }
// });

Meteor.startup(function() {
  Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    // TODO: refactor to not be tracker-ish
    Tracker.autorun(function() {
      var small = Measurement.getWindowSize().width <= RESPONSIVE_BREAKPOINT;
      
      React.render(<Handler params={state.params} 
        collections={collections} small={small}/>, document.body);
    });
  });
});
