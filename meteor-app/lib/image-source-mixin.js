ImageSourceMixin = {
  imageSource: function(original) {
    if (! window.devicePixelRatio || window.devicePixelRatio <= 1)
      return original;
  
    return original.replace(/\.[^\.]*$/, '@2x$&');
  }
}