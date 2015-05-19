"use strict";
var React = require("react");
var ProductLayout = require("./ProductLayout");
var CtaLink = require("./CtaLink");

var product = {
  name: "atmosphere",
  index: 0,
  title: "Atmosphere",
  description: "Percolate Studio designed and engineered a package manager for Meteor",
  featureUrl: "/img/case-study/atmosphere/atmosphere-home-macbookpro-1200x600.jpg",
  thumbnailUrl: "/img/case-study/atmosphere/atmosphere-ipadair-600x600.jpg"
};

product.component = React.createClass({
  render: function() {
    return (
      <ProductLayout {...this.props}>
        <div className="bg-image-case-study-hero"></div>
        <header>
          <div className="subtitle-case-study">Atmosphere</div>
          <h1 className="title-case-study">The Building Blocks of Apps</h1>

          <div className="collage-text formatting">
            <div className="grid-2-collapse">
              <p>Every once in awhile a product emerges that shifts the way people understand the world. Whether it’s physical with the steam engine or digital with cloud computing. We think of these products as so revolutionary, so unique in concept and exquisite in execution that their humble beginnings are often overlooked. The late nights. The hurried back of napkin sketches.</p>
            </div>
            <div className="grid-2-collapse">
              <p>Folks that build products understand the shaky beginnings of successful companies. What begins as a delicate idea evolves with effort and practice. Despite advances in technology the product development process hasn’t changed much; it has only become faster. We designed and built Atmosphere to further accelerate app development by helping engineers discover open source software packages.</p>
            </div>
          </div>
        </header>

        <div className="collage">
          <div className="grid-2-square bg-image-iphone"></div>
          <div className="grid-2-square bg-image-ipad"></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>On the Shoulders of Giants</h2>
            <p>Modern applications are a culmination of past knowledge. They are an assemblage of discrete pieces. The open source movement formalized the path for people to share and re-use these pieces &mdash;packages&mdash; with the goal of making product development more efficient. Makers spend less time building boilerplate and instead dedicate themselves to creating real value. Thus resulting in more mature software coming to market in less time.
        </p>

            <p>At scale, open source looks like millions of engineers &amp; designers packaging discrete pieces of functionality and sharing via the internet. However to fully find and re-use this shared knowledge it needs to be structured. Enter package managers. They seek to index the packages in an open source ecosystem to facilitate discovery. When we realized that package management didn’t exist for a javascript framework we use to build client products (Meteor) we created Atmosphere.</p>
          </div>
        </div>

        <div className="media-leftalign">
          <img src="/img/case-study/atmosphere/atmosphere-ipadair-700x500.jpg" srcSet="/img/case-study/atmosphere/atmosphere-ipadair-700x500@2x.jpg 1000w" alt="Atmosphere Search"/>
          <span className="caption"><span className="title-caption">Blocks</span> Packages are the building blocks of apps. We needed a UI that encapsulated relevant package information in a consistent unified shape.</span>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Building Blocks</h2>
            <p>Atmosphere is centered around the idea that sharing is mutually beneficial. To encourage re-use we needed to showcase packages in the best light possible. We started with typographic layouts whose treatment yielded a feeling of space, ease and brevity. An aesthetic simplicity served to humanize dense technical content.</p>

            <h2>The Atmosphere Score</h2>
            <p>It’s essential to have confidence in the integrity of each package because a stray package could result in a service outage or worse. Verifying integrity requires a combination of author research, social validation, and code review. However it's onerous for an engineer to do this for every package. We created the Atmosphere Score to make assessment easier by programmatically collecting, analyzing and synthesizing data to surface packages that have the show all the indicators of quality software.</p>
          </div>
        </div>

        <div className="collage responsive">
          <div className="grid-1 bg-image-macbookpro"></div>
        </div>

        <div className="wrapper-content">
          <div className="conclusion">Atmosphere is the catalog for Meteor packages, resources and tools.</div>

          <div className="center-up formatting">
            <p>Open source packages will be instrumental in creating the apps of the future. We created <a href="https://atmospherejs.com" target="_blank">Atmosphere</a> to index and share our packages with others. What began as a small engineering tool has evolved into a steadily growing service used by thousands of innovators daily.
            </p>
            <CtaLink title="Are you interested in open source?" openContact={this.props.openContact} />
          </div>
        </div>
      </ProductLayout>
    );
  }
});

module.exports = product;
