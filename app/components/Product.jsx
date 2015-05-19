"use strict";
var _ = require("lodash");
var React = require("react");

var Product = React.createClass({
  product: function() {
    var name = this.props.params.name;
    return _.find(this.props.collections.Products, function(p) {
      return p.name === name;
    });
  },

  componentWillMount: function() {
    this.props.headParams.setTitle("Case Study | Percolate Studio");
    this.props.headParams.setDescription(this.product().description);
  },

  render: function() {
    var product = this.product();
    return React.createElement(product.component, _.extend({}, this.props, {product: product}));
  }
});

module.exports = Product;
