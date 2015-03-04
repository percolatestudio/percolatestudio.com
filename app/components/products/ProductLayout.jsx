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
    
    var large = ! (nextProduct && previousProduct);
    var previousLink, nextLink;
    
    if (previousProduct)
      previousLink = <ProductLink product={previousProduct} large={large}/>;

    if (nextProduct)
      nextLink = <ProductLink product={nextProduct} large={large}/>;
    
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
    var large = this.props.large;
    var other = _.omit(this.props, 'product', 'large');
    
    var sourceUrl = large ? product.featureUrl : product.thumbnailUrl;
    var imageUrl = this.imageSource(sourceUrl);
    var className = large ? 'grid-1' : 'grid-2-square';
    className += ' item-project bg-image';
    
    return (
      <Router.Link to="product" params={this.props.product} 
        className={className}
        style={{backgroundImage: "url('" + imageUrl + "')"}} {...other}>
        <span className="subtitle-item">{product.title}</span>
      </Router.Link>
    );
  }
});

module.exports = ProductLayout;