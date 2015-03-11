/*global window*/
'use strict';
var $ = require('jquery');

var isClient = function() {
  return typeof window !== 'undefined';
};

/**
 * Contains parameters for the <HEAD> that will be examined when the <HEAD> is
 * being constructed by server side rendering. When parameters are set in a
 * browser, they will be applied to the DOM directly.
 * @constructor
 */
var HeadParams = function(title, description) {
  this.title = title || 'Percolate Studio: Product Design & Software Engineering';
  this.description = description || "Percolate Studio builds digital products that improve people's lives";
};

/** Sets the page title */
HeadParams.prototype.setTitle = function(title) {
  this.title = title;

  if (isClient()) {
    $('head > title').text(title);
  }
};

/** Sets content for the description meta tag */
HeadParams.prototype.setDescription = function(description) {
  this.description = description;

  if (isClient()) {
    $('head > meta[name=description]').attr('content', description);
  }
};

module.exports = HeadParams;
