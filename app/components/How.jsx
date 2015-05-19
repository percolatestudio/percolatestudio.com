"use strict";
var React = require("react");
var PageLayout = require("./PageLayout");

var How = React.createClass({
  componentWillMount: function() {
    this.props.headParams.setTitle("How | Percolate Studio");
    this.props.headParams.setDescription("Our products are the result of integrated services, qualified team, and a process that delivers results.");
  },

  render: function() {
    return (
      <PageLayout {...this.props}>

        <header className="collage medium">
          <div className="grid-2-square">
            <h1 className="title-page">How</h1>
            <p className="description-page">With clients spanning consumer, education &amp; business organizations our interdisciplinary team has the flexibility to impact any part of a product's lifecycle.</p>
          </div>
          <div className="grid-2-square bg-image-how"></div>
        </header>

        <section className="section-services">
          <h2 className="title-section">Services</h2>
          <div className="grid-3 subsection">
            <img alt="Design Services" src="/img/services-design-160x160.svg"/>
            <div className="meta">
              <h3 className="subtitle-section">Design</h3>
              <p>Visual, Experience, Interaction, Branding, Application, Editorial</p>
            </div>
          </div>
          <div className="grid-3 subsection">
            <img alt="Strategy Services" src="/img/services-strategy-160x160.svg"/>
            <div className="meta">
              <h3 className="subtitle-section">Strategy</h3>
              <p>Ideation, Research, Personas, Dashboards, Reporting, Analytics</p>
            </div>
          </div>
          <div className="grid-3 subsection">
            <img alt="Engineering Services" src="/img/services-engineering-160x160.svg"/>
            <div className="meta">
              <h3 className="subtitle-section">Engineering</h3>
              <p>Realtime, Full-Stack, Deployment, Performance, Monitoring, Mobile</p>
            </div>
          </div>

        </section>

        <section className="section-process">
          <h2 className="title-section">Process</h2>
          <ol className="process">
            <li className="subsection">
              <div className="meta">
                <h3 className="subtitle-section">Discover</h3>
                <p>There is an incredible responsibility when making software that impacts lives. We start with one fundamental question: What’s best for users?</p>
              </div>
            </li>
            <li className="subsection">
              <div className="meta">
                <h3 className="subtitle-section">Test</h3>
                <p>Great products result from collaboration between creator and consumer. Constantly challenging assumptions and validating ideas keeps us true to our intention.</p>
              </div>
            </li>
            <li className="subsection">
              <div className="meta">
                <h3 className="subtitle-section">Build</h3>
                <p>People differ and so do their needs. Solving diverse challenges means having the courage to build what is right and the restraint to know what is appropriate.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="section-team">
          <h2 className="title-section">Team</h2>

          <a className="grid-4 avatar" href="https://twitter.com/tmeasday" rel="nofollow" target="_blank">
            <img title="Tom Coleman" src="/img/portraits-tom-280x360.jpg"/>
            <div className="name">Tom Coleman</div>
          </a>
          <a className="grid-4 avatar" href="https://twitter.com/timbotnik" rel="nofollow" target="_blank">
            <img title="Timothy Hingston" src="/img/portraits-tim-280x360.jpg"/>
            <div className="name">Timothy Hingston</div>
          </a>
          <a className="grid-4 avatar" href="https://twitter.com/domyen" rel="nofollow" target="_blank">
            <img title="Dominic Nguyen" src="/img/portraits-dom-280x360.jpg"/>
            <div className="name">Dominic Nguyen</div>
          </a>
          <a className="grid-4 avatar" href="https://twitter.com/zqzoltan" rel="nofollow" target="_blank">
            <img title="Zoltan Olah" src="/img/portraits-zol-280x360.jpg"/>
            <div className="name">Zoltan Olah</div>
          </a>

        </section>

        <section className="section-logo">
          <h2 className="title-section">Technology</h2>

        </section>
        <div className="collage mini">
          <div className="grid-5 logo">
            <img title="NodeJS" src="/img/logo-node.svg"/>
          </div>
          <div className="grid-5 logo">
            <img title="iOS" src="/img/logo-ios.svg"/>
          </div>
          <div className="grid-5 logo">
            <img title="MeteorJS" src="/img/logo-meteor.svg"/>
          </div>
          <div className="grid-5 logo">
            <img title="Amazon Web Services" src="/img/logo-aws.svg"/>
          </div>
          <div className="grid-5 logo">
            <img title="MongoDB" src="/img/logo-mongo.svg"/>
          </div>
        </div>
      </PageLayout>
    );
  }
});

module.exports = How;
