var CONTACT_KEY = 'contactOverlayOpen';
var MENU_KEY = 'menuOverlayOpen';

Session.setDefault(CONTACT_KEY, false);
Template.layout.helpers({
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
  }
});