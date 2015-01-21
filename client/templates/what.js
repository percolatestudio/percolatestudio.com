Template.what.helpers({
  firstProduct: function() {
    return Products.findOne({}, {sort: {index: 1}});
  },
  restProducts: function() {
    return Products.find({}, {sort: {index: 1}, skip: 1});
  }
})