"use strict";
var _ = require("lodash");
var React = require("react");

var Job = React.createClass({
  job: function() {
    var name = this.props.params.name;
    return _.find(this.props.collections.Jobs, function(j) {
      return j.name === name;
    });
  },

  componentWillMount: function() {
    var job = this.job();
    this.props.headParams.setTitle(job.title + " | Percolate Studio");
    this.props.headParams.setDescription(job.description);
  },

  render: function() {
    var job = this.job();
    return React.createElement(job.component, _.extend({}, this.props, {job: job}));
  }
});

module.exports = Job;
