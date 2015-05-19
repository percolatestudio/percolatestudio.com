"use strict";
var React = require("react");
var ProductLayout = require("./ProductLayout");
var CtaLink = require("./CtaLink");

var product = {
  name: "meetinghero",
  index: 3,
  title: "MeetingHero",
  description: "Percolate Studio engineered a product to make meetings more effective",
  featureUrl: "/img/case-study/meetinghero/meetinghero-macbookproiphone6-1600x1000.jpg",
  thumbnailUrl: "/img/case-study/meetinghero/meetinghero-iphone6perspective-600x600.jpg"
};

product.component = React.createClass({
  render: function() {
    return (
      <ProductLayout {...this.props}>
        <div className="bg-image-case-study-hero"></div>
        <header>
          <div className="subtitle-case-study">MeetingHero</div>
          <h1 className="title-case-study">How much is time worth?</h1>

          <div className="collage-text formatting">
            <div className="grid-2-collapse">
              <p>We often think to make time by chasing efficiency. The thought process is that increasing efficiency gives us more time to create bigger and better products. So we invest in tools that optimize our processes to get a little faster at things like design, project management, etc. However modern products are bigger than any individual. They are the result of coordinated cross disciplinary teams overcoming challenges together.</p>
            </div>
            <div className="grid-2-collapse">
              <p>Communicating with teammates is where just under one quarter of an individual’s productive time disappears. Whether this is collaborating on a new sales initiative or conceiving features, we encounter the symptoms of ineffective collaboration in all aspects of professional life. When we signed on to help engineer MeetingHero's launch our objective was obvious: remedy inefficient collaboration starting with meetings.</p>
            </div>
          </div>
        </header>

        <div className="collage responsive">
          <div className="grid-1 bg-image-texture-meeting"></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>The Definition of Soul-Crushing</h2>
            <p>It’s an understatement that 50% of meetings fall into the category: soul-crushing. The average employee spends just under 25% of their working life in meetings. With some arithmetic it's easy to uncover that 1/10 of productive time is lost doing something no one likes. The path to changing this statistic starts with discerning the characteristics of effective meetings and iterating solutions.</p>
            <ul>
              <li><b>Shared Direction</b>: Why are we all here?</li>
              <li><b>Agenda</b>: What are we talking about?</li>
              <li><b>Action items</b>: Who's doing what when the meeting ends?</li>
              <li><b>Documentation</b>: What did we just talk about?</li>
            </ul>
          </div>
        </div>

        <div className="collage">
          <div className="grid-1 bg-image-texture-calendar" ></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Testing Ideas</h2>
            <p>Perhaps the most important phase in a products lifecycle is validating the idea. Not only is the ratio of resources vs. company size unfavorable but decisions made in this phase tend to have a compounding effect later on. To define MeetingHero's initial trajectory we relied on rapid prototyping process. Our deep collaboration with the MeetingHero team pushed rapid prototyping to the limit. We helped test ideas quickly while also working towards a larger full-featured proof-of-concept. From start to finish there was a constant cycle of idea evaluation, testing, and validation. New iterations were deployed near daily. Our disciplined continuous integration process ensured that despite the pace users could expect a solid user experience.</p>

            <p>Web app development has evolved to the point where rapid prototyping via assemblage is possible. To accelerate the initial product validation phase it was important to move as fast as possible. We relied on existing API's and frameworks to build atop a solid foundation. We started by assembling raw user flows with ready-made components to verify our assumptions with real users. Since the intimacy of in-person meetings contributes to it's success, we used realtime technology to enable attendees to instantly collaborate on a meeting 'dashboard' that logs thoughts, decisions and action items.</p>
          </div>
        </div>

        <div className="collage">
          <div className="grid-2-square bg-image-iphone6-dashboard"></div>
          <div className="grid-2-square bg-image-iphone6-menu"></div>
        </div>

        <div className="wrapper-content">
          <div className="conclusion">Hello effective meetings</div>
          <div className="center-up formatting">
            <p>MeetingHero makes it easy for teams to have highly productive, engaging meetings, by providing the right amount of structure to add ensure action. Attendees can work together to manage meetings in realtime. Summaries are emailed to all parties when the meeting ends. Meetings are synced via the cloud and seamlessly integrates with Google accounts. Our immersive engineering engagement resulted in a viable product that helps people create engaging meetings. MeetingHero has gone on to get traction and raise investment. Their time to market was three months.</p>
            <CtaLink title="Are you interested in business utilities and organization?" openContact={this.props.openContact} />
          </div>
        </div>
      </ProductLayout>
    );
  }
});

module.exports = product;
