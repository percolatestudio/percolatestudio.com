Template.careers.helpers({
  jobs: function() {
    return Jobs.find();
  },
  interns: function() {
    return Interns.find();
  }
})