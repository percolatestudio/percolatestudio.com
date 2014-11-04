Template.what.helpers({
  products: function() {
    return Products.find({}, {sort: {index: 1}});
  }
})