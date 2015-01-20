UI.registerHelper('metaTitle', new Template('title', function () {
  var text = this.templateContentBlock.renderFunction();
  $('head > title').text(text);
}));

UI.registerHelper('metaDescription', new Template('description', function () {
  var text = this.templateContentBlock.renderFunction();
  $('head > meta[name=description]').attr('content', text);
}));
