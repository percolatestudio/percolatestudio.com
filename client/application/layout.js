var OVERLAY_OFFSET = 100;

Template.layout.created = function() {
  this.contactOpen = new ReactiveVar(false);
  this.menuOpen = new ReactiveVar(false);
  this.menuOverlaid = new ReactiveVar(false);
}

Template.layout.rendered = function() {
  var self = this;
  
  // XXX: should we find a requestAnimationFrame version of _.throttle?
  self.$('.content').scroll(_.throttle(function() {
    var offset = self.find('.content').scrollTop;
    
    if (offset > OVERLAY_OFFSET) {
      self.menuOverlaid.set(offset >= lastOffset ? 'down' : 'up');
    } else {
      self.menuOverlaid.set(false);
    }
    
    lastOffset = offset;
  }, 100));
}

Template.layout.helpers({
  template: function() {
    return Template.instance();
  },
  activeClass: function(name) {
    return (Router.current().route.getName() === name) && 'active';
  },
  transition: function() { return function(from, to) {
    // XXX: magic number
    if (document.documentElement.clientWidth > 320) {
      return 'fade';
    } else {
      return 'right-to-left';
    }
  }}
});

Template.layout.events({
  'click [data-contact]': function() {
    Template.instance().contactOpen.set(true);
  },
  'click [data-menu]': function() {
    Template.instance().menuOpen.set(true);
  },
  'click .overlay-close': function() {
    Template.instance().contactOpen.set(false);
    Template.instance().menuOpen.set(false);
  }
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // esc closes everything
    if ( $('input, textarea').is(':focus')) {
      return ; // input or textarea is focused, ignore other part of function
    }
    var key = e.which;

    Template.instance().contactOpen.set(false);
    Template.instance().menuOpen.set(false);
  }
});