'use strict';
var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var PageLayout = require('../PageLayout');
var ImageSourceMixin = require('../../lib/ImageSourceMixin');

var ProductLayout = React.createClass({
  render: function() {
    var product = this.props.product;
    var nextProduct = _.find(this.props.collections.Products, function(p) {
      return p.index === product.index + 1;
    });
    var previousProduct = _.find(this.props.collections.Products, function(p) {
      return p.index === product.index - 1;
    });
    
    var linkClassName = (nextProduct && previousProduct) ? 'grid-2-square' : 'grid-1';
    var previousLink, nextLink
    
    if (previousProduct)
      previousLink = <ProductLink product={previousProduct} className={linkClassName}/>;

    if (nextProduct)
      nextLink = <ProductLink product={nextProduct} className={linkClassName}/>;
    return (
      <PageLayout className={'product-' + product.name} {...this.props}>
        {this.props.children}

        <div className="title-section featured">More Projects</div>
        <div className="collage">
          {previousLink}
          {nextLink}
        </div>
      </PageLayout>
    )
  }
});

var ProductLink = React.createClass({
  mixins: [ImageSourceMixin],

  render: function() {
    var product = this.props.product;
    var className = this.props.className;
    var other = _.omit(this.props, 'product', 'className');
    
    var imageUrl = this.imageSource(product.thumbnailUrl);
    className += ' item-project bg-image';
    
    return (
      <Router.Link to="product" params={this.props.product} 
        className={this.props.className}
        style={{backgroundImage: "url('" + imageUrl + "')"}} {...other}>
        <span className="subtitle-item">{product.title}</span>
      </Router.Link>
    );
  }
});

module.exports = ProductLayout;