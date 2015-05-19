"use strict";
var _ = require("lodash");
var React = require("react");
var Router = require("react-router");
var PageLayout = require("./PageLayout");
var ImageSourceMixin = require("../lib/ImageSourceMixin");

var What = React.createClass({
  mixins: [ImageSourceMixin],
  componentWillMount: function() {
    this.props.headParams.setTitle("What | Percolate Studio");
    this.props.headParams.setDescription("Percolate designs and engineers digital products. We create beautiful, simple, and performant software that helps companies achieve their goals.");
  },

  render: function() {
    var products = _.sortBy(this.props.collections.Products, function(p) {
      return p.index;
    });

    var firstProduct = products.shift();
    var firstProductImageSrc = this.imageSource(this.props.small ? firstProduct.thumbnailUrl : firstProduct.featureUrl);
    var firstProductLink = (
      <Router.Link to="product" params={firstProduct}
        className="featured grid-2-square item-project bg-image"
        style={{backgroundImage: "url('" + firstProductImageSrc + "')"}}>
        <span className="subtitle-item">{firstProduct.title}</span>
      </Router.Link>
    );

    var restProductLinks = products.map(function(product) {
      return (
        <Router.Link to="product" params={product} key={product.name}
          className="grid-2-square item-project bg-image"
          style={{backgroundImage: "url('" + this.imageSource(product.thumbnailUrl) + "')"}}>
          <span className="subtitle-item">{product.title}</span>
        </Router.Link>
      );
    }.bind(this));

    return (
      <PageLayout {...this.props}>

        <header className="collage medium">
          <div className="grid-2-square">
            <h1 className="title-page">What</h1>
            <p className="description-page">Percolate designs and engineers digital products. We create beautiful, simple, and performant software that helps companies achieve their goals.</p>
          </div>
          <div className="grid-2-square bg-image-what"></div>
        </header>

        <div className="collage">
          {firstProductLink}
          {restProductLinks}
        </div>

        <h2 className="title-section">Selected Clients</h2>

        <div className="collage mini">
          <a className="grid-5 logo" href="http://apple.com" target="_blank">
            <img title="Apple Computer" src="/img/logo-apple.svg"/>
          </a>
          <a className="grid-5 logo" href="http://yummly.com" target="_blank">
            <img title="Yummly" src="/img/logo-yummly.svg"/>
          </a>
          <a className="grid-5 logo" href="http://meteor.com" target="_blank">
            <img title="MeteorJS" src="/img/logo-meteor.svg"/>
          </a>
          <a className="grid-5 logo" href="http://www.credomobile.com/" target="_blank">
            <img title="CREDO Mobile" src="/img/logo-credo-mobile.svg"/>
          </a>
          <a className="grid-5 logo" href="http://havas.com" target="_blank">
            <img title="Havas Worldwide" src="/img/logo-havas.svg"/>
          </a>
        </div>
      </PageLayout>
    );
  }
});

module.exports = What;
