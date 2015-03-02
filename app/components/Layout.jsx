'use strict';
var _ = require('lodash');
var React = require('react/addons');
var Router = require('react-router');

var ContactOverlay = require('./ContactOverlay');
var MenuOverlay = require('./MenuOverlay');

var Layout = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false,
      contactOpen: false
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
  
  render: function() {
    var layoutClasses = React.addons.classSet({
      'layout': true,
      'menu-open': this.state.menuOpen,
      'contact-open': this.state.contactOpen
    });
    
    var childProps = _.extend({}, this.props, {
      openContact: this.openContact,
      openMenu: this.openMenu
    })
    
    return (
      <div className={layoutClasses}>

        <Router.RouteHandler {...childProps}/>

        <ContactOverlay/>
        <MenuOverlay {...childProps}/>
      </div>
    )
  }
});

module.exports = Layout;
