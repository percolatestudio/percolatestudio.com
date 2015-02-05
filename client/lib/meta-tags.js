UI.registerHelper('metaTitle', new Template('metaTitle', function () {
  var text = Blaze.toHTML(this.templateContentBlock, this);
  $('head > title').text(text);
}));

UI.registerHelper('metaDescription', new Template('metaDescription', function () {
  var text = Blaze.toHTML(this.templateContentBlock, this);
  $('head > meta[name=description]').attr('content', text);
}));
