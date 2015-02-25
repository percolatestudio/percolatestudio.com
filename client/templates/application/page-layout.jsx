PageLayout = React.createClass({
  mixins: [Router.State],
  
  render: function() {
    
    var classMap = {
      'page': true
    };

    // add the name of each route leading to this page to the classMap
    this.getRoutes().forEach(function(route) {
      classMap[route.name] = true;
    }.bind(this));
    
    var pageClasses = React.addons.classSet(classMap);
    
    // plus any passed in classes
    if (this.props.className)
      pageClasses += ' ' + this.props.className;

    return (
      <div className={pageClasses}>
        <Nav {...this.props}/>
        {this.props.children}
      </div>
    );
  }
});


// XXX: menu-overlaid ..?
var Nav = React.createClass({
  propTypes: {
    openMenu: React.PropTypes.func.isRequired,
    openContact: React.PropTypes.func.isRequired
  },
  
  render: function() {
    return (
      <nav className="{{#if template.menuOverlaid.get}}overlaid-{{template.menuOverlaid.get}}{{/if}}">
        <div className="nav-group">
          <NavLink to='home'>Home</NavLink>
          <NavLink to='how'>How</NavLink>
          <NavLink to={['what','product']}>What</NavLink>
          <a className="menu-link" onClick={this.props.openMenu.bind(null, true)}>Menu</a>
        </div>

          
        <NavLink to='home' className='logo'><img src="/img/logo.svg"/></NavLink>

        <div className="nav-group right">
          <NavLink to='careers'>Join</NavLink>
          <a href="http://blog.percolatestudio.com">Blog</a>
          <a className="contact-link" onClick={this.props.openContact}>Contact</a>
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
