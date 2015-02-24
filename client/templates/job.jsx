Job = React.createClass({
  mixins: [MetaTagsMixin],
  
  job: function() {
    var name = this.props.params.name;
    return this.props.collections.Jobs.findOne({name: name}) ||
      this.props.collections.Interns.findOne({name: name});
  },
  
  componentWillMount: function() {
    var job = this.job();
    this.setTitle(job.title + '| Percolate Studio');
    this.setDescription(job.description);
  },
  
  render: function() {
    var job = this.job();
    return (
      <PageLayout className="job-{job.name}">
        <div dangerouslySetInnerHTML={{__html: job.text}} />
      </PageLayout>
    )
  }
});