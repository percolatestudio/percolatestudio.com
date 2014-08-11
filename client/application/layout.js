var CONTACT_KEY = 'contactOverlayOpen';
var MENU_KEY = 'menuOverlayOpen';

Session.setDefault(CONTACT_KEY, false);
Template.layout.helpers({
  templateClass: function() {
    return Router._layout.region('main').template();
  },

  contactOpenClass: function() {
    return Session.equals(CONTACT_KEY, true) && 'contact-open';
  },
  menuOpenClass: function() {
    return Session.equals(MENU_KEY, true) && 'menu-open';
  }
});

Template.layout.events({
  'click [data-contact]': function() {
    Session.set(CONTACT_KEY, true);
  },
  'click [data-menu]': function() {
    Session.set(MENU_KEY, true);
  },
  'click .overlay-close': function() {
    Session.set(MENU_KEY, false);
    Session.set(CONTACT_KEY, false);
  }
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // esc closes everything
    if ( $('input, textarea').is(':focus')) {
      return ; // input or textarea is focused, ignore other part of function
    }
    var key = e.which;

    if (Session.get(MENU_KEY, true) || Session.get(CONTACT_KEY, true)) {
      Session.set(MENU_KEY, false);
      Session.set(CONTACT_KEY, false);
    }
  }
});