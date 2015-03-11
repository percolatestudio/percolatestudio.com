'use strict';

var $ = require('jquery');

var isClient = function() {
  return typeof window !== 'undefined';
};

var HeadParams = function(title, description) {
  this.title = title || 'Percolate Studio: Product Design & Software Engineering';
  this.description = description || "Percolate Studio builds digital products that improve people's lives";
};

HeadParams.prototype.setTitle = function(title) {
  this.title = title;

  if (isClient()) {
    $('head > title').text(title);
  }
};

HeadParams.prototype.setDescription = function(description) {
  this.description = description;

  if (isClient()) {
    $('head > meta[name=description]').attr('content', description);
  }
};

module.exports = HeadParams;
