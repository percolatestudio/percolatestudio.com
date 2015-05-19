"use strict";
var _ = require("lodash");
var React = require("react");
var Router = require("react-router");
var PageLayout = require("../PageLayout");
var ImageSourceMixin = require("../../lib/ImageSourceMixin");

var ProductLayout = React.createClass({
  render: function() {
    var product = this.props.product;
    var nextProduct = _.find(this.props.collections.Products, function(p) {
      return p.index === product.index + 1;
    });
    var previousProduct = _.find(this.props.collections.Products, function(p) {
      return p.index === product.index - 1;
    });

    var wide = !(nextProduct && previousProduct);
    var previousLink, nextLink;

    if (previousProduct) {
      previousLink = <ProductLink product={previousProduct} wide={wide}
        small={this.props.small}/>;
    }

    if (nextProduct) {
      nextLink = <ProductLink product={nextProduct} wide={wide}
        small={this.props.small}/>;
    }

    return (
      <PageLayout className={"product-" + product.name} {...this.props}>
        {this.props.children}

        <div className="title-section featured">More Projects</div>
        <div className="collage">
          {previousLink}
          {nextLink}
        </div>
      </PageLayout>
    );
  }
});

var ProductLink = React.createClass({
  mixins: [ImageSourceMixin],

  render: function() {
    var product = this.props.product;
    var wide = this.props.wide;
    var small = this.props.small;
    var other = _.omit(this.props, "product", "wide", "small");

    var sourceUrl = (wide && !small) ? product.featureUrl : product.thumbnailUrl;
    var imageUrl = this.imageSource(sourceUrl);
    var className = wide ? "grid-1" : "grid-2-square";
    className += " item-project bg-image";

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
