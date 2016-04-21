/*global document, window, location */
"use strict";
var _ = require("lodash");
var $ = require("jquery");
var React = require("react/addons");
var Router = require("react-router");

var ContactOverlay = require("percolate-contact-form");
var MenuOverlay = require("./MenuOverlay");
var Collections = require("./Collections");

var pictureFill;
var FastClick;

try {
  pictureFill = require("picturefill");
  FastClick = require("fastclick");
} catch (e) {
  if (!e instanceof ReferenceError) {
    throw e;
  }
}

var RESPONSIVE_BREAKPOINT = 800;

var Layout = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false,
      contactOpen: false,
      small: this.isSmall()
    };
  },

  componentWillMount: function() {
    if (typeof location !== "undefined" && location.hash === "#contact") {
      this.setState({contactOpen: true});
    }
  },

  componentDidMount: function() {
    // need to bind this at a higher level
    $(document).on("keydown", this.handleKeyDown);

    $(window).on("resize", this.handleWindowResize);

    FastClick.attach(document.body);

    this.pictureFill();
  },

  componentWillUnmount: function() {
    $(document).off("keydown", this.handleKeyDown);
    $(window).off("resize", this.handleWindowResize);
  },

  openMenu: function(state) {
    this.setState({menuOpen: state});
  },

  openContact: function(state) {
    this.setState({contactOpen: state});
    location.hash = state ? "contact" : "";
  },

  handleKeyDown: function(event) {
    // esc closes everything
    if (event.which === 27) {
      if ($("input, textarea").is(":focus")) {
        // input or textarea is focused, ignore other part of function
        return;
      }
      this.openContact(false);
      this.openMenu(false);
    }
  },

  isSmall: function() {
    return (typeof window !== "undefined") && $(window).width() <= RESPONSIVE_BREAKPOINT;
  },

  handleWindowResize: function() {
    this.setState({
      small: this.isSmall()
    });
  },

  componentDidUpdate: function() {
    this.pictureFill();
  },

  // Runs the picturefill polyfill
  pictureFill: function() {
    // For browsers supporting <picture> natively, pictureFill will be undefined
    if (pictureFill && _.isFunction(pictureFill)) {
      pictureFill();
    }
  },

  render: function() {
    var layoutClasses = React.addons.classSet({
      layout: true,
      "menu-open": this.state.menuOpen,
      "contact-open": this.state.contactOpen
    });

    var childProps = _.extend({}, this.props, {
      openContact: this.openContact,
      openMenu: this.openMenu,
      collections: Collections,
      small: this.state.small
    });

    return (
      <div className={layoutClasses}>

        <Router.RouteHandler {...childProps}/>

        <ContactOverlay openContact={this.openContact} />
        <MenuOverlay {...childProps}/>
      </div>
    );
  }
});

module.exports = Layout;
