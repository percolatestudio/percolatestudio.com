'use strict';

var $ = require('jquery');

// FIXME: This needs to be made isomorphic
var isClient = function() {
  return typeof window !== 'undefined';
}

var MetaTagsMixin = {
  setTitle: function(title) {
    if (isClient())
      $('head > title').text(title);
    else
      console.log('warning, trying to setTitle from server');
  },
  setDescription: function(description) {
    if (isClient())
      $('head > meta[name=description]').attr('content', description);
  }
}

module.exports = MetaTagsMixin;
