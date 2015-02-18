Layout = React.createClass({
  mixins: [Router.State],
  
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
    
    // grab the name from each route + optionally a "routeName" static defined
    //   on the handler.
    var classMap = { 'page': true };
    this.getRoutes().forEach(function(route) {
      classMap[route.name] = true;
      if (route.handler.routeName)
        classMap[route.handler.routeName(this.getParams())] = true;
    }.bind(this));
    var pageClasses = React.addons.classSet(classMap);
    
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
  render: function() {
    return (
      <nav className="{{#if template.menuOverlaid.get}}overlaid-{{template.menuOverlaid.get}}{{/if}}">
        <div className="nav-group">
          <NavLink to='home'>Home</NavLink>
          <NavLink to='how'>How</NavLink>
          <NavLink to={['what','product']}>What</NavLink>
          <a data-menu>Menu</a>

        </div>

          
        <NavLink to='home' className='logo'><img src="/img/logo.svg"/></NavLink>

        <div className="nav-group right">
          <NavLink to='careers'>Join</NavLink>
          <a href="http://blog.percolatestudio.com">Blog</a>
          <a data-contact>Contact</a>
        </div>
      </nav>
    );
  }
})

var NavLink = React.createClass({
  mixins: [Router.State],
  
  render: function() {
    var {to, className, ...other} = this.props;
    var names = [].concat(this.props.to); // ensure array
    var isActive = _.any(names, () => this.isActive(name));
    
    var className = (isActive ? 'active ' : '') + (this.props.className || '');
    return <Router.Link to={names[0]} className={className} {...other}/>;
  }
})
