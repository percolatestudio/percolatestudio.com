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
    
    // TODO: add routeName and routeSubName
    var pageClasses = React.addons.classSet({
      'page': true
    });
    
    return (
      <div className={layoutClasses}>

        <div className={pageClasses}>
          <Nav/>
          <Router.RouteHandler/>
        </div>

        <ContactOverlay/>
        <MenuOverlay/>
      </div>
    )
  }
});

// XXX: menu-overlaid ..?
var Nav = React.createClass({
  mixins: [Router.State, Router.Navigation],
  
  render: function() {
    return (
      <nav className="{{#if template.menuOverlaid.get}}overlaid-{{template.menuOverlaid.get}}{{/if}}">
        <div className="nav-group">
          <Router.Link to='home' className={this.isActive('home') && 'active'}>Home</Router.Link>
          <Router.Link to='how' className={this.isActive('how') && 'active'}>How</Router.Link>
          <Router.Link to='what' className={this.isActive('what') || this.isActive('product') && 'active'}>What</Router.Link>
          <a data-menu>Menu</a>

        </div>

        <Router.Link to='home' className={this.isActive('home') ? 'active logo' : 'logo'}><img src="/img/logo.svg"/></Router.Link>

        <div className="nav-group right">
          <Router.Link to='careers' className={this.isActive('careers') && 'active'}>Join</Router.Link>
          <a href="http://blog.percolatestudio.com">Blog</a>
          <a data-contact>Contact</a>
        </div>
      </nav>
    );
  }
})

