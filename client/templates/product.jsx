Product = React.createClass({
  statics: {
    routeName: function(params) {
      return 'product-'+params.name;
    }
  },
  
  render: function() {
    return <div/>;
  }
});