'use strict';

var $ = require('jquery');

var HeadMixin = {
  title: function() {
    return 'Percolate Studio: Product Design & Software Engineering';
  },
  description: function() {
    return "Percolate Studio builds digital products that improve people's lives";
  },
  onComponentDidMount: function() {
    $('head > title').text(this.title());
    $('head > meta[name=description]').attr('content', this.description());
  }
}

module.exports = HeadMixin;
