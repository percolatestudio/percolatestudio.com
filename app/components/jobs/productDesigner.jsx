"use strict";
var React = require("react");
var PageLayout = require("../PageLayout");

var job = {
  name: "product-designer",
  type: "job",
  title: "Product Designer",
  description: "We’re looking for a product designer to research, design, and build great experiences.",
  locations: "SFO"
};

job.component = React.createClass({
  render: function() {
    return (
      <PageLayout {...this.props}>
        <div className="header">
          <div className="wrapper-hero">
            <img title="Design" className="hero" src="/img/services-design-160x160.svg"/>
            <h1 className="title-page">Product Designer</h1>
            <p className="description-page">We’re looking for a product designer to craft experiences. Your experience in the product cycle allows you to adapt to changes with ease. You'll be expected to prototype, design, and build software that people love.</p>
          </div>
        </div>

        <section className="section-about">
          <div className="title-section">About you</div>
          <ol className="details-about">
            <li className="grid-2-collapse"><span className="meta">You want to design world-class digital products</span></li>
            <li className="grid-2-collapse"><span className="meta">You build what you design (HTML, CSS, JS)</span></li>
            <li className="grid-2-collapse"><span className="meta">You understand the constraints of the digital medium and are able to surpass them</span></li>
            <li className="grid-2-collapse"><span className="meta">You transition between brand, visual design, user experience and code with ease.</span></li>
            <li className="grid-2-collapse"><span className="meta">You possess the drive to pursue design goals and the practical skills to get 'em done</span></li>
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
