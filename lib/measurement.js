// XXX: This should be a package most likely
Measurement = {
  // obtain the window size reactively
  getWindowSize: function() {
    var self = this;

    // one time init
    if (!this._dep) {
      this._dep = new Deps.Dependency;
      this._windowSize = this._calcSize();

      $( window ).resize(function() {
        var size = self._calcSize();

        // cache size
        if (! _.isEqual(size, self._windowSize)) {
          self._windowSize = self._calcSize();
          self._dep.changed();
        }
      });
    }

    this._dep.depend();
    return this._windowSize;
  },
  getElementSize: function(el) {
    this.getWindowSize();
    return this._calcSize(el);
  },
  _calcSize: function(el) {
    return {
      width: $(el || window).width(),
      height: $(el || window).height()
    }
  },
  
  // if no one has ever depended on the measurement, there's no need to
  // do anything
  recalc: function() {
    if (this._dep)
      this._dep.changed();
  }
}