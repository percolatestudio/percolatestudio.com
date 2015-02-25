Product = React.createClass({
  mixins: [MetaTagsMixin],

  product: function() {
    var name = this.props.params.name;
    return this.props.collections.Products.findOne({name: name});
  },

  componentWillMount: function() {
    this.setTitle("Case Study | Percolate Studio");
    this.setDescription(this.product().description);
  },

  render: function() {
    var product = this.product();
    var nextProduct = Products.findOne({index: {$gt: product.index}}, {sort: {index: 1}})
    var previousProduct = Products.findOne({index: {$lt: product.index}}, {sort: {index: -1}})
    
    var linkClassName = (nextProduct && previousProduct) ? 'grid-2-square' : 'grid-1';
    var previousLink, nextLink
    
    if (previousProduct)
      previousLink = <ProductLink product={previousProduct} className={linkClassName}/>;

    if (nextProduct)
      nextLink = <ProductLink product={nextProduct} className={linkClassName}/>;
    return (
      <PageLayout className={'product-' + product.name} {...this.props}>
        <div dangerouslySetInnerHTML={{__html: product.text}} />

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
    var {product, className, ...other} = this.props;
    var imageUrl = this.imageSource(product.thumbnailUrl);
    className += ' item-project bg-image';
    
    return (
      <Router.Link to="product" params={product} className={className}
        style={{backgroundImage: "url('" + imageUrl + "')"}} {...other}>
        <span className="subtitle-item">{product.title}</span>
      </Router.Link>
    );
  }
});