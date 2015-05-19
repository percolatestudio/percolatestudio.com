"use strict";
var React = require("react");
var PageLayout = require("../PageLayout");

var job = {
  name: "design-intern",
  type: "intern",
  title: "Design Intern",
  description: "Join our design team to research, design, and prototype new user experiences at Percolate San Francisco.",
  locations: "SFO"
};

job.component = React.createClass({
  render: function() {
    return (
      <PageLayout {...this.props}>
        <div className="header">
          <div className="wrapper-hero">
            <img title="Design" className="hero" src="/img/services-design-160x160.svg"/>
            <h1 className="title-page">Design Intern</h1>
            <p className="description-page">We’re looking for an intern to help design products people love. You'll get experience in designing and prototyping solutions to real challenges.</p>
          </div>
        </div>

        <section className="section-about">
          <div className="title-section">What you should know</div>
          <ol className="details-about">
            <li className="grid-2-collapse"><span className="meta">The intern program is designed for current students or recent graduates. The intent is not job placement.</span></li>
            <li className="grid-2-collapse"><span className="meta">Our programs last about 3 months (one quarter)</span></li>
            <li className="grid-2-collapse"><span className="meta">The internship is a minimum 40hr/week commitment</span></li>
            <li className="grid-2-collapse"><span className="meta">Interns are provided a weekly stipend</span></li>
            <li className="grid-2-collapse"><span className="meta">Interns get in-person experience with our product process so they must be on location. (We don't offer relocation or visas at this time)</span></li>
          </ol>
        </section>

        <section className="section-about">
          <div className="title-section">About you</div>
          <ol className="details-about">
            <li className="grid-2-collapse"><span className="meta">You have an understanding of the characteristics of well-designed software.</span></li>
            <li className="grid-2-collapse"><span className="meta">Your interactive projects are accessible online</span></li>
            <li className="grid-2-collapse"><span className="meta">You have a working knowledge of Photoshop, Illustrator, HTML and CSS required. Indesign and Sketch are a bonus.</span></li>
            <li className="grid-2-collapse"><span className="meta">You have a well-curated online portfolio</span></li>
          </ol>
        </section>

        <section className="section-about">
          <div className="title-section">How to apply</div>
          <p className="description-about">Apply via email with brief responses to the prompts below.</p>
          <ol className="details-about">
            <li className="grid-2-collapse"><span className="meta">Why do you want to intern at Percolate Studio?</span></li>
            <li className="grid-2-collapse"><span className="meta">Describe your interests in one sentence.</span></li>
            <li className="grid-2-collapse"><span className="meta">How will your skills add to a design &amp; engineering studio?</span></li>
            <li className="grid-2-collapse"><span className="meta">What are your start and end dates?</span></li>
            <li className="grid-2-collapse"><span className="meta">Link to an online portfolio.</span></li>
          </ol>
        </section>

        <section className="section-button">
          <a className="btn-primary caps" href="mailto:careers@percolatestudio.com?subject=Hello%20Percolate">Apply for Internship</a>
        </section>
      </PageLayout>
    );
  }
});

module.exports = job;
