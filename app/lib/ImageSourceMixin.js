/*global window*/
'use strict';

// FIXME: Check that window isomorphic handling makes sense

var ImageSourceMixin = {
  imageSource: function(original) {
    if (typeof window === 'undefined' 
      || !window.devicePixelRatio || window.devicePixelRatio <= 1) {
      return original;
    }
  
    return original.replace(/\.[^\.]*$/, '@2x$&');
  }
};

module.exports = ImageSourceMixin;
