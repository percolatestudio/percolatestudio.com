var RESPONSIVE_BREAKPOINT = 800;

var imgSrc = function(original) {
  if (! window.devicePixelRatio || window.devicePixelRatio <= 1)
    return original;
  
  return original.replace(/\.[^\.]*$/, '@2x$&');
};

Template.registerHelper('imgSrc', imgSrc);

Template.registerHelper('responsiveImgSrc', function(smallSrc, largeSrc) {
  if (Measurement.getWindowSize().width <= RESPONSIVE_BREAKPOINT) {
    return imgSrc(smallSrc);
  } else {
    return imgSrc(largeSrc);
  }
});