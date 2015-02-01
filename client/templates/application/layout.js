var OVERLAY_OFFSET = 100;

Template.layout.created = function() {
  this.contactOpen = new ReactiveVar(false);
  this.menuOpen = new ReactiveVar(false);
  this.menuOverlaid = new ReactiveVar(false);
}

Template.layout.rendered = function() {
  var self = this;

  // XXX: should we find a requestAnimationFrame version of _.throttle?
  self.$('.page').scroll(_.throttle(function() {
    var offset = self.find('.page').scrollTop;

    if (offset > OVERLAY_OFFSET) {
      self.menuOverlaid.set(offset >= lastOffset ? 'down' : 'up');
    } else {
      self.menuOverlaid.set(false);
    }

    lastOffset = offset;
  }, 100));
  
  // need to bind this at a higher level
  $(document).keydown(function(event) {
    if (event.which == 27) { // esc closes everything
      if ( $('input, textarea').is(':focus')) {
        return ; // input or textarea is focused, ignore other part of function
      }
      self.contactOpen.set(false);
      self.menuOpen.set(false);
    }
  });
  
  // Wire up the contact form "route". Perhaps it's better to do it
  //   with IR as in atmosphere but this is a pretty simple approach.
  self.autorun(function() {
    if (Iron.Location.get().hash === '#contact')
      self.contactOpen.set(true);
  });

  self.autorun(function() {
    location.hash = self.contactOpen.get() ? 'contact' : '';
  });
}

Template.layout.helpers({
  template: function() {
    return Template.instance();
  },
  thisArray: function() { // see todos for why
    return [this];
  },
  transition: function() { return function(from, to) {
    // XXX: magic number
    if (document.documentElement.clientWidth > 800) {
      return 'fade';
    } else {
      return {with:'right-to-left', duration: 500};
    }
  }}
});

Template.layout.events({
  'click [data-contact]': function() {
    Template.instance().menuOpen.set(false); //a user can access contact from the menu so we need to dismiss the overlay
    Template.instance().contactOpen.set(true);
  },
  'click [data-menu]': function() {
    Template.instance().menuOpen.set(true);
  },
  'click .overlay-close': function() {
    Template.instance().contactOpen.set(false);
    Template.instance().menuOpen.set(false);
  },
  'click .wrapper-menu a': function() {
    Template.instance().menuOpen.set(false);
  }
});
