/*global window*/
"use strict";

var ImageSourceMixin = {
  /**
   * Returns a url for a @2x sized picture for retina displays on devices
   * that support it. The url is inferred from the original url thats passed in.
   *
   * On the server, returns a url to the @2x image.
   *
   * NOTE: During SSR, we have no way of knowing what the target devicePixelRatio
   * will be so we err on the side of the larger image. If this is wrong,
   * React will correct the DOM but complain that the checksum was invalid.
   *
   * @param {string} original - The original, non @2x image url.
   * @return {void}
   */
  imageSource: function(original) {
    if (typeof window === "undefined"
      || !window.devicePixelRatio || window.devicePixelRatio <= 1) {
      return original;
    }

    return original.replace(/\.[^\.]*$/, "@2x$&");
  }
};

module.exports = ImageSourceMixin;
