Template.autosizedTextarea.rendered = function() {
  console.log(this.$('textarea').length);
  this.$('textarea').autosize();
};

Template.autosizedTextarea.helpers({
  attrs: function() {
    return this;
  }
});