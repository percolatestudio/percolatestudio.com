Layout = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false,
      contactOpen: false
    }
  },
  
  openMenu: function(state) {
    this.setState({menuOpen: state});
  },
  
  openContact: function() {
    this.setState({contactOpen: true});
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
