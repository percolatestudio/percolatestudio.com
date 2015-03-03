'use strict';
var _ = require('lodash');
var $ = require('jquery');
var React = require('react/addons');
var Router = require('react-router');

var ContactOverlay = require('./ContactOverlay');
var MenuOverlay = require('./MenuOverlay');
var Collections = require('./Collections');
var HeadMixin = require('../lib/HeadMixin');

var PictureFill;

try {
  PictureFill = require('picturefill');
} catch (e) {
  if (! e instanceof ReferenceError)
    throw e;
}

var RESPONSIVE_BREAKPOINT = 800;

var Layout = React.createClass({
  mixins: [HeadMixin],

  getInitialState: function() {
    return {
      menuOpen: false,
      contactOpen: false,
      small: false
    }
  },
  
  componentWillMount: function() {
    // FIXME: location is not isomorphic
    if (typeof location !== 'undefined' && location.hash === '#contact') {
      this.setState({contactOpen: true});
    }
  },
  
  componentDidMount: function() {
    // need to bind this at a higher level
    $(document).on('keydown', this.handleKeyDown);
    
    this.pictureFill();
    
    // FIXME: Hook into the $( window ).resize event handler and set state
    // appropriately as window resizes
    this.setState({
      small: $(window).width() <= RESPONSIVE_BREAKPOINT
    });
  },
  
  componentWillUnmount: function() {
    $(document).off('keydown', this.handleKeyDown);
  },
  
  openMenu: function(state) {
    this.setState({menuOpen: state});
  },
  
  openContact: function(state) {
    this.setState({contactOpen: state});
    location.hash = state ? 'contact' : '';
  },
  
  handleKeyDown: function(event) {
    if (event.which == 27) { // esc closes everything
      if ( $('input, textarea').is(':focus')) {
        return ; // input or textarea is focused, ignore other part of function
      }
      this.openContact(false);
      this.openMenu(false);
    }
  },
  
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.params && PictureFill)
      this.pictureFill();
  },
  
  // Runs the picturefill polyfill
  pictureFill: function() {
    if (PictureFill)
      window.picturefill();
  },
  
  render: function() {
    var layoutClasses = React.addons.classSet({
      'layout': true,
      'menu-open': this.state.menuOpen,
      'contact-open': this.state.contactOpen
    });
    
    var childProps = _.extend({}, this.props, {
      openContact: this.openContact,
      openMenu: this.openMenu,
      collections: Collections,
      small: this.state.small
    })
    
    return (
      <div className={layoutClasses}>

        <Router.RouteHandler {...childProps}/>

        <ContactOverlay openContact={this.openContact} />
        <MenuOverlay {...childProps}/>
      </div>
    )
  }
});

module.exports = Layout;
