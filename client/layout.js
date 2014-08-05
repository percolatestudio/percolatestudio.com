var CONTACT_KEY = 'contactOverlayOpen';

Session.setDefault(CONTACT_KEY, false);
Template.layout.helpers({
  contactOpenClass: function() {
    return Session.equals(CONTACT_KEY, true) && 'contact-open';
  }
});

Template.layout.events({
  'click [data-contact]': function() {
    Session.set(CONTACT_KEY, true);
  }
});