Template.autosizedTextarea.rendered = function() {
  this.$('textarea').autosize();
};

Template.autosizedTextarea.helpers({
  attrs: function() {
    return this;
  }
});