"use strict";
var React = require("react");
var ProductLayout = require("./ProductLayout");
var CtaLink = require("./CtaLink");

var product = {
  name: "verso",
  index: 2,
  title: "Verso",
  description: "Percolate Studio designed, engineered, and strategized Verso Learning's entry into the education app market",
  featureUrl: "/img/case-study/verso/verso-class-iphone6ipadair-1200x600.jpg",
  thumbnailUrl: "/img/case-study/verso/verso-classes-iphone6-600x600.jpg"
};

product.component = React.createClass({
  render: function() {
    return (
      <ProductLayout {...this.props}>
        <div className="bg-image-case-study-hero"></div>
        <header>

            <div className="subtitle-case-study">Verso</div>
            <h1 className="title-case-study">Activate Learning</h1>

            <div className="collage-text formatting">
              <div className="grid-2-collapse">
                <p>The reality of education technology never quite lived up to expectations. Putting devices in classrooms may have lead to savvier pupils, but have these tools actually improved learning ability? Edtech often takes path of incremental changes to the status quo rather than re-examining technologies potential impact on teaching. It seems that companies dedicated to improving classroom tools often ignore key factors to meaningful change: pedagogy and student curiosity.</p>
              </div>
              <div className="grid-2-collapse">
                <p>When we first met the Verso team, we were inspired by their empathy towards education. This team of seasoned educators and technologists shared a singular vision to expand students propensity to learn. Whereas many edtech products optimize rote learning, Verso partnered with us to transform their immense classroom experience into a product that sparks student curiosity. We applied our disciplined design, engineering, and strategy process to bring their idea to market.</p>
              </div>
            </div>

        </header>

        <div className="collage">
          <div className="grid-2-square bg-image-flip"></div>
          <div className="grid-2-square bg-image-child"></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Lifelong Learners</h2>
            <p>Whenever curiosity is piqued, so to is an enthusiasm to learn. The key trait of a lifelong learner is curiosity. Cultivating this trait begins with questions that evoke further thinking. Most questions begin and end with fact. What is the sum of X? Who invented Y? Deep questions challenge learners to understand context and prompts them to consider <em>why</em> things are the way they are. Verso's instantaneous feedback loop allows teachers to measure and adjust their deep questioning skills based on realtime student engagement.</p>
          </div>
        </div>

        <div className="collage responsive">
          <div className="grid-1 bg-image-texture-inclass"></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Inverted Learning</h2>
            <p>Verso builds upon the flipped classroom learning model which inverts traditional teaching methods. Instruction is delivered through the app outside of class while &lsquo;homework&rsquo; is done inside the classroom. Concept mastery happens in class with the guidance of peers and teachers.</p>
            <p>Impacting learning necessitates an inclusive product development strategy. Since it’s impossible to foretell devices accessible to families and schools, we launched the Verso experience on all major platforms and devices. To reduce the scope of engineering and accelerate time to market we developed a robust platform-agnostic codebase.</p>
          </div>
        </div>

        <div className="collage responsive">
          <div className="grid-1 bg-image-devices"></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Boundless classrooms</h2>

            <p>Humans never stop learning, so why are there constraints on the time and place students learn? We had to divorce the idea of a classroom from physical space in order to move it to the digital realm. A digital classroom is boundless, it persists wherever there are curious people and is only a push notification away.</p>

            <p>A digital classroom must mirror the <em>buzz</em> of its physical counterpart. We cultivated a sense of dynamism and activity by surfacing student feedback the instant it happened. The adoption of student anonymity created a peer-pressure free dynamic where students could express themselves without the anxiety of being judged. We created feedback mechanisms like &lsquo;helpfuls&rsquo; and &lsquo;grouping&rsquo; to help teachers identify patterns in student responses that could be used as future discussion points. Combined, the features created to a vibrant communication system that showcased strong ideas while also activating the voice of even the meekest students.</p>
          </div>
        </div>

        <div className="collage">
          <div className="grid-2-square bg-image-class"></div>
          <div className="grid-2 quote-collage">
            <div className="wrapper-quote">
              <div className="title-quote">&ldquo;Percolate Studio provides a rare blend of technical rigour, aesthetic elegance and lucid comms. These guys add value to every stage of the product lifecycle.&rdquo;</div>
              <div className="attribution">
                <div className="author">Stuart Mitchell</div>
                <div className="metadata">Product Director</div>
              </div>
            </div>
          </div>
          <div className="grid-4-square copy-collage">
            Custom templates for rich media ensure that content is always engaging. The app appeals to both student and teacher alike.
          </div>
          <div className="grid-4-square bg-image-logo"></div>
        </div>
        <div className="collage">
          <div className="grid-2-square bg-image-texture-pencils"></div>
          <div className="grid-2-square bg-image-responses"></div>
        </div>

        <div className="wrapper-content">
          <div className="conclusion">Verso helps students become lifelong learners.</div>

          <div className="center-up formatting">
            <p>Our holistic process yielded a product that has a significant &amp; measurable impact on class participation. In the span of less than two years Verso has spread to thousands of schools. The app has been subject of several conference keynotes and received accolades such as ELearning Victoria.</p>
            <CtaLink title="Are you interested in education technology?" openContact={this.props.openContact} />
          </div>
        </div>
      </ProductLayout>
    );
  }
});

module.exports = product;
