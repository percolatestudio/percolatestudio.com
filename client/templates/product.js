Template.product.helpers({
  previousProduct: function() {
    return Products.findOne({index: {$lt: this.index}}, {index: -1});
  },
  nextProduct: function() {
    return Products.findOne({index: {$gt: this.index}}, {index: 1});
  }
})