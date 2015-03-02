'use strict';
var React = require('react');
var MetaTagsMixin = require('../lib/MetaTagsMixin');

var Job = React.createClass({
  mixins: [MetaTagsMixin],
  
  job: function() {
    var name = this.props.params.name;
    return _.find(this.props.collections.Jobs, function(j) {
      return j.name === name;
    });
  },
  
  componentWillMount: function() {
    var job = this.job();
    this.setTitle(job.title + ' | Percolate Studio');
    this.setDescription(job.description);
  },
  
  render: function() {
    var job = this.job();
    return React.createElement(job.component, _.extend({}, this.props, {job: job}));
  }
});

module.exports = Job;