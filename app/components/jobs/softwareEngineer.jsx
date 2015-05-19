"use strict";
var React = require("react");
var PageLayout = require("../PageLayout");

var job = {
  name: "software-engineer",
  type: "job",
  title: "Software Engineer",
  description: "We're looking for a talented software engineer to help our full-stack team craft world-class experiences.",
  locations: "SFO, MEL"
};

job.component = React.createClass({
  render: function() {
    return (
      <PageLayout {...this.props}>
        <div className="header">
          <div className="wrapper-hero">
            <img title="Engineering" className="hero" src="/img/services-engineering-160x160.svg"/>
            <h1 className="title-page">Software Engineer</h1>
            <p className="description-page">We're looking for a full-stack engineer to build impactful features. You're at home in agile product development and are able to adapt to pivots in stride. You'll be working with our engineering team to prototype, build, and test software.</p>
          </div>
        </div>

        <section className="section-about">
          <div className="title-section">About you</div>
          <ol className="details-about">
            <li className="grid-2-collapse"><span className="meta">You want to create world-class digital products and love the craft of engineering.</span></li>
            <li className="grid-2-collapse"><span className="meta">You're motivated to learn the latest web and mobile technologies.</span></li>
            <li className="grid-2-collapse"><span className="meta">You have a deep understanding of client &amp; server technologies and are able to interface with design and operations alike.</span></li>
            <li className="grid-2-collapse"><span className="meta">You've created things that people use and love.</span></li>
            <li className="grid-2-collapse"><span className="meta">You're curious about discovering how technology impacts people's lives.</span></li>
          </ol>
        </section>

        <section className="section-button">
          <a className="btn-primary caps" href="mailto:careers@percolatestudio.com?subject=Hello%20Percolate">Join Percolate Studio</a>
        </section>
      </PageLayout>
    );
  }
});

module.exports = job;
