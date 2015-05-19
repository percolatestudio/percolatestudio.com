"use strict";
var React = require("react");
var ProductLayout = require("./ProductLayout");
var CtaLink = require("./CtaLink");

var product = {
  name: "meteor",
  index: 1,
  title: "Meteor",
  description: "Percolate Studio designed and engineered a suite of example applications and use cases to help developers learn Meteor",
  featureUrl: "/img/case-study/meteor/meteor-todos-ipad-1200x600.jpg",
  thumbnailUrl: "/img/case-study/meteor/meteor-todos-ipad-600x600.jpg"
};

product.component = React.createClass({
  render: function() {
    return (
      <ProductLayout {...this.props}>
        <div className="bg-image-case-study-hero"></div>
        <header>
          <div className="subtitle-case-study">Meteor</div>
          <h1 className="title-case-study">Balancing Instruction &amp; Inspiration</h1>

          <div className="collage-text formatting">
            <div className="grid-2-collapse">
              <p>We are on the cusp of a momentous shift in web technology. Witnessing the evolution of the web from documents to applications was awe inspiring. So to was people&#8217;s dexterity in inventing new ways engage with each other using technology. If the web is simply a communication medium, a stand-in for face-to-face interaction, then its natural evolution is to mirror the palpability of physical interactions. Modern web frameworks help achieve this by <em>reacting</em> to changes in a system and surfacing them to users in <em>realtime</em>.</p>
            </div>
            <div className="grid-2-collapse">
              <p>Meteor is a framework that lowers the barrier to entry for building apps with presence. It is an open source platform for realtime &amp; reactive apps aligned toward the vision that delightful apps can be built easier, better, and faster than ever before. Developers can use Meteor to create software that feels alive with activity. Companies no longer have to forfeit palpable user experiences due to technical complexity. When Meteor wanted  shining examples of their technology to accompany the official launch, they reached out to us to design and build it.</p>
            </div>
          </div>
        </header>

        <div className="wrapper-content">
          <div className="media-centeralign">
            <img src="/img/case-study/meteor/meteor-app-icons.svg" alt="Meteor icons"/>
          </div>
          <div className="full-up formatting">
            <h2>Engineered Learning</h2>
            <p>It&rsquo;s rare when a company whose product we use approaches us to collaborate; you can imagine our excitement when Meteor tasked us with conceiving open source example applications. They needed apps that would pique developer curiosity and serve as reference material.</p>

            <p>In an engineering user funnel, example apps are the segue from acquisition to engagement. Their audience is folks who are interested but have yet to fully use the product. To engage these new users, the apps need to illuminate common development patterns and address real-life use cases. We started with concrete requirements: document essential framework concepts, showcase practical engineering patterns, and define best practices for app structure. Next, we identified use cases where Meteor adds tremendous value like social engagement, list-keeping, and game scoring. It was important to balance instruction and inspiration to show that great experiences were easily achievable with Meteor.</p>
          </div>
        </div>

        <div className="media-leftalign">
          <img src="/img/case-study/meteor/meteor-leaderboard-1200x836.jpg" alt="Meteor Leaderboard"/>
          <span className="caption"><span className="title-caption">Leaderboard</span> Add points to your favorite scientists and watch as the list is updated in realtime on every connected browser.</span>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Meteor Fundamentals</h2>
            <p>People are often incredulous when discovering how intuitively Meteor solves common challenges. One such challenge is ensuring that all connected users see the same up-to-date information. For example, a score board of a game should always reflect the current score. In the request-response world of Ruby and PHP data could not be updated without a page reload. Something seemingly as simple as showing the latest score in realtime would be nigh impossible without user input. With Meteor&rsquo;s <em>Leaderboard</em> we prove it can be done elegantly.</p>

            <h2>Putting Concepts Together</h2>
            <p>Todo apps are classic coding exercises. Our objective with <em>Todos</em> was to segue from <em>Leaderboard&rsquo;s</em> simple functionality to a more realistic feature set. We first identified common characteristics in modern apps: responsive layouts, accounts, and the ability to collaborate. A responsive layout accommodates users no matter the size of the screen. Accounts help users keep track of their own information. Collaboration allows more people to get involved at the same time. These pieces were combined into a todo list app that helps users create, share, and sync lists seamlessly on any device.</p>
          </div>
        </div>

        <div className="collage responsive">
          <div className="grid-1 bg-image-ipad"></div>
        </div>
        <div className="pullquote">
          <div className="title-quote">
            &ldquo;We trusted Percolate Studio to build flagship apps that help us reach developers. I'm delighted by what we were able to achieve through our collaboration.&rdquo;
          </div>
          <div className="attribution">
            <div className="author">Matt Debergalis</div>
            <div className="metadata">Founder, Product</div>
          </div>
        </div>
        <div className="collage">
          <div className="grid-2-square bg-image-todos-signin"></div>
          <div className="grid-2-square bg-image-todos-home"></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Cross Platform Apps</h2>
            <p>A Meteor developer can launch cross-platform mobile apps with a single unified codebase. To bring this idea to life we started by defining a use-case. <em>Local Market</em> is a successful grocer in search of new ways to reach out to their customers. As a stockist for fresh local produce they can engage patrons by showing what dishes to make with the available harvest. In other words showcase recipes in a way that inspires customers to engage with the business no matter where they are. Since customers come from all walks of life, <em>Local Market</em> must reach the widest audience possible on the budget of a small/medium sized business.</p>

            <p><em>Local Market App</em> uses recipes to connect the business and its customers. It features curated dishes made with ingredients found in store. These handsome recipes can prompt lively conversation in the app and on Twitter. Our content-first design seeks to remove barriers from the recipe browsing experience. It&rsquo;s engineered using Meteor&rsquo;s cross platform technology to provide the same great experience on web, iOS, and Android all within a palatable budget.</p>
          </div>
        </div>

        <div className="collage">
          <div className="grid-2-square bg-image-localmarket-logo"></div>
          <div className="grid-2-square bg-image-localmarket-home"></div>
        </div>
        <div className="collage">
            <div className="grid-2-square bg-image-localmarket-item"></div>
            <div className="grid-2 quote-collage">
              <div className="wrapper-quote">
                <div className="title-quote">&ldquo;An example of a cross-platform photo sharing app... Complete with Twitter login and camera support, Local Market is still less than 1,000 lines of pure JavaScript.&rdquo;</div>
                <div className="attribution">
                  <div className="author">Matt Debergalis</div>
                  <div className="metadata">Founder, Product</div>
                </div>
              </div>
            </div>
            <div className="grid-4-square bg-image-localmarket-icon"></div>
            <div className="grid-4-square bg-image-localmarket-texture"></div>
          </div>

        <div className="wrapper-content">
          <div className="conclusion">Months of collaboration resulted in a suite of functionally rich yet strikingly simple examples.</div>

          <div className="center-up formatting">
            <p>Our engineers and designers worked in tandem with Meteor&rsquo;s in-house team to create canonical open source apps that inform &amp; inspire developers. <em>Leaderboard</em>, <em>Todos</em>, and <em>Local Market</em> have since been installed by tens of thousands of developers and deployed to both the Google Play and App Store.</p>
            <CtaLink title="Are you interested in realtime experiences?" openContact={this.props.openContact} />
          </div>
        </div>
      </ProductLayout>
    );
  }
});

module.exports = product;
