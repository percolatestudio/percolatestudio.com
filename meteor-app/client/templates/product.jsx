Product = React.createClass({
  mixins: [MetaTagsMixin],

  product: function() {
    var name = this.props.params.name;
    return _.find(this.props.collections.Products, function(p) {
      return p.name === name;
    });
  },

  componentWillMount: function() {
    this.setTitle("Case Study | Percolate Studio");
    this.setDescription(this.product().description);
  },
  
  render: function() {
    var {params, ...other} = this.props;
    var product = this.product();
    return React.createElement(product.component, _.extend({}, this.props, {product: product}));
  }
});