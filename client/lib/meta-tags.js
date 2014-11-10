UI.registerHelper('title', new Template('title', function () {
  var text = this.templateContentBlock.renderFunction();
  $('head > title').text(text);
}));

UI.registerHelper('description', new Template('description', function () {
  var text = this.templateContentBlock.renderFunction();
  $('head > meta[name=description]').attr('content', text);
}));
