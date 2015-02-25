Layout = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false,
      menuOverlaid: false,
      contactOpen: false
    }
  },
  
  componentWillMount: function() {
    if (location.hash === '#contact') {
      this.setState({contactOpen: true});
    }
  },
  
  componentDidMount: function() {
    // need to bind this at a higher level
    $(document).on('keydown', this.handleKeyDown);
  },
  
  componentWillUnmount: function() {
    $(document).off('keydown', this.handleKeyDown);
  },
  
  openMenu: function(state) {
    this.setState({menuOpen: state});
  },
  
  openContact: function(state) {
    this.setState({contactOpen: state});
    location.hash = state ? 'contact' : '';
  },
  
  handleKeyDown: function(event) {
    if (event.which == 27) { // esc closes everything
      if ( $('input, textarea').is(':focus')) {
        return ; // input or textarea is focused, ignore other part of function
      }
      this.openContact(false);
      this.openMenu(false);
    }
  },
  
  render: function() {
    var layoutClasses = React.addons.classSet({
      'layout': true,
      'menu-open': this.state.menuOpen,
      'contact-open': this.state.contactOpen
    });
    
    var childProps = _.extend({}, this.props, {
      openContact: this.openContact,
      openMenu: this.openMenu
    })
    
    return (
      <div className={layoutClasses}>

        <Router.RouteHandler {...childProps}/>

        <ContactOverlay/>
        <MenuOverlay {...childProps}/>
      </div>
    )
  }
});


  // var OVERLAY_OFFSET = 100;
  // // XXX: should we find a requestAnimationFrame version of _.throttle?
  // self.$('.page').scroll(_.throttle(function() {
  //   var offset = self.find('.page').scrollTop;
  //
  //   if (offset > OVERLAY_OFFSET) {
  //     self.menuOverlaid.set(offset >= lastOffset ? 'down' : 'up');
  //   } else {
  //     self.menuOverlaid.set(false);
  //   }
  //
  //   lastOffset = offset;
  // }, 100));
  //
  // // Wire up the contact form "route". Perhaps it's better to do it
  // //   with IR as in atmosphere but this is a pretty simple approach.
  // self.autorun(function() {
  //   self.contactOpen.set(Iron.Location.get().hash === '#contact');
  // });
  //
  // self.autorun(function() {
  //   location.hash = self.contactOpen.get() ? 'contact' : '';
  // });
  //
  // var SCROLLABLE = '.page';
  //
  // var setHistoryState = function (ourState) {
  //   var state = Iron.Location.get().options.historyState;
  //   var newState  = _.extend({}, state, ourState);
  //   Iron.Location.go(Iron.Location.get().path, {historyState: newState, replaceState: true});
  // }
  //
  // Template.pageLayout.rendered = function() {
  //   var self = this;
  //
  //   var state = Iron.Location.get().options.historyState;
  //   if (state && state.lastScrollTop) {
  //     // wait until it's on the screen (not sure why afterFlush doesn't work)
  //     Meteor.setTimeout(function() {
  //       self.$(SCROLLABLE).scrollTop(state.lastScrollTop);
  //     }, 0);
  //   }
  //
  //   // XXX: should we find a requestAnimationFrame version of _.throttle?
  //   self.$(SCROLLABLE).scroll(_.throttle(function() {
  //     var offset = self.find(SCROLLABLE).scrollTop;
  //     setHistoryState({lastScrollTop: offset})
  //   }, 500));
  // }
