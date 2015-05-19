"use strict";
var React = require("react");
var ProductLayout = require("./ProductLayout");
var CtaLink = require("./CtaLink");

var product = {
  name: "campus",
  index: 4,
  title: "Campus",
  description: "Percolate Studio designed, engineered, and strategized Verso Learning's groundbreaking education analytics product.",
  featureUrl: "/img/case-study/campus/verso-campus-macbookpro-1200x600.jpg",
  thumbnailUrl: "/img/case-study/campus/verso-campus-macbookpro-side-600x600.jpg"
};

product.component = React.createClass({
  render: function() {
    return (
      <ProductLayout {...this.props}>
        <div className="bg-image-case-study-hero"></div>
        <header>

            <div className="subtitle-case-study">Campus</div>
            <h1 className="title-case-study">Delivering Actionable Insights</h1>

            <div className="collage-text formatting">
              <div className="grid-2-collapse">
                <p>It has never been easier to instrument, collect, and store vast quantities of information. Despite the clear business case for collecting this data, folks still wonder how best to apply it. What does it mean? How can it give decision-makers the information needed to be more effective? The big challenge in analytics is no longer the logistics of data collection, but rather translating immense data into actionable recommendations.</p>
              </div>
              <div className="grid-2-collapse">
                <p>Following the success of <a href="/what/verso">Verso</a>, we reconvened the team to tackle a new challenge. Educators used Verso's classroom data to respond to their students' needs. We saw an opportunity to promote effective teaching beyond individual classrooms using the breadth of Verso's engagement metrics. Our integrated design, engineering and strategy practice helped entire schools identify &amp; replicate successful teaching.</p>
              </div>
            </div>
        </header>

        <div className="media-centeralign">
          <img src="/img/case-study/campus/verso-campus-texture-engagementgraph.svg" alt="classroom Engagement Graph"/>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Visualizing School Change</h2>
            <p>Effective teaching is the result of daily practice and regular professional development. With Verso, teachers can easily evaluate their students thinking in minute detail. Data is gathered for each activity to pinpoint where instruction is most needed. Campus unifies engagement statistics for the entire school. So instead of peering through the narrow scope of individual activities, Campus' expanded perspective allows schools to pinpoint areas for improvement.</p>

            <div className="media-centeralign">
              <img src="/img/case-study/campus/verso-campus-activetime-v2.svg" alt="Time of day most active"/>
              <span className="caption"><span className="title-caption">Primetime</span> Knowing when students engage helps teachers understand when they can be the most impactful.</span>
            </div>

            <h2>Actionable Insights</h2>
            <p>Analytics are an opportunity to start constructive conversations. Our process began with researching teacher, department and administrator objectives to discover how the dataset could address real needs. Three primary goals emerged:</p>

              <ol>
                <li>Effective pedagogy begins with identifying what works; Campus should reveal proven teaching strategies.</li>
                <li>Change is difficult to visualize and track; Campus should be proactive about highlighting success and areas that need attention.</li>
                <li>Ensuring smooth operation means keeping abreast of the school's pulse; Campus should surface timely news &amp; recommendations for continued success.</li>
              </ol>

            <p style={{marginBottom: 0}}>We engineered an insight engine to identify patterns and highlight outliers in realtime. Data was graphed and compared to school-wide averages to indicate progress at a glance. We designed a faceted analytics experience to make it easy to compare users by class, teacher, subject, or grade level. Timely insights were surfaced in natural language with prompts to act. For instance, <em>"Dominic had a great response rate today, kudos are in order"</em>. Our guiding principle was to present the right amount of information at the right time.</p>
          </div>
        </div>

        <div className="media-centeralign">
          <img src="/img/case-study/campus/verso-campus-ipadair-700x500.jpg" srcSet="/img/case-study/campus/verso-campus-ipadair-700x500@2x.jpg 1000w, /img/case-study/campus/verso-campus-ipadair-700x500@3x.jpg 1500w," alt="Campus Activity Stream"/>
        </div>

        <div className="pullquote">
          <div className="title-quote">
            "Partners in innovation &amp; excellence, nimble yet meticulous, Percolate Studio delivers simply beautiful web apps."
          </div>
          <div className="attribution">
            <div className="author">Stuart Mitchell</div>
            <div className="metadata">Product Director</div>
          </div>
        </div>

        <div className="media-centeralign">
          <img src="/img/case-study/campus/verso-campus-texture-ui-kit-1200x750.jpg" srcSet="/img/case-study/campus/verso-campus-texture-ui-kit-1200x750@2x.jpg 1000w" alt="Campus UI Kit"/>
        </div>

        <div className="wrapper-content">
          <div className="conclusion">Campus provides the tools to promote successful teaching.</div>

          <div className="center-up formatting">
            <p>Campus visualizes school progress, reveals teaching strategies, and activates professional development. Paired with Verso, Campus helps schools enact change that starts with students.</p>
            <CtaLink title="Are you interested in new ways to action your data?" openContact={this.props.openContact} />
          </div>
        </div>
      </ProductLayout>
    );
  }
});

module.exports = product;
