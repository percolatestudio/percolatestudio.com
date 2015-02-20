Layout = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false,
      contactOpen: false
    }
  },
  
  render: function() {
    var layoutClasses = React.addons.classSet({
      'layout': true,
      'menu-open': this.state.menuOpen,
      'contact-open': this.state.contactOpen
    });
    
    return (
      <div className={layoutClasses}>

        <Router.RouteHandler {...this.props}/>

        <ContactOverlay/>
        <MenuOverlay/>
      </div>
    )
  }
});
