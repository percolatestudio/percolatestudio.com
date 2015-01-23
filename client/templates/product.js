Template.product.helpers({
  previousProduct: function() {
    return Products.findOne({index: {$lt: this.index}}, {sort: {index: -1}});
  },
  nextProduct: function() {
    return Products.findOne({index: {$gt: this.index}}, {sort: {index: 1}});
  },
  single: function() {
    return (this.index === 0 || this.index === Products.find().count() - 1);
  }
})