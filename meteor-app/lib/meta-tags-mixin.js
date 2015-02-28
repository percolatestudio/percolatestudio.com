MetaTagsMixin = {
  setTitle: function(title) {
    $('head > title').text(title);
  },
  setDescription: function(description) {
    $('head > meta[name=description]').attr('content', description);
  }
}
