"use strict";
var React = require("react");
var PageLayout = require("../PageLayout");

var StyleguideCaseStudy = React.createClass({
  render: function() {
    return (
      <PageLayout {...this.props}>
        <div className="bg-image-case-study-hero" style={{backgroundImage: "url('https://unsplash.imgix.net/uploads/14120938606568dde6e2b/c9e42240?q=75&w=1080&h=1080&fit=max&fm=jpg&s=580f266cd8b2994d47fc7b656da3f074');"}}></div>
        <header>
          <div className="subtitle-case-study">Meteor Development Group</div>
          <h1 className="title-case-study">Giving App Makers a Headstart</h1>

          <div className="collage-text formatting">
            <div className="grid-2">
              <p><em>Project Brief:</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in luctus purus, nec posuere tellus. In fermentum, justo vitae mollis euismod, tellus neque vestibulum ante, sed pellentesque ipsum orci id elit. Suspendisse potenti. Curabitur pellentesque aliquet mauris. Morbi pulvinar fermentum turpis, ullamcorper commodo dui consequat a. Mauris vitae orci pharetra, mollis massa vel, adipiscing urna. Fusce in augue ut nulla ullamcorper commodo. Fusce sodales, ante non fermentum pharetra, nunc sapien consequat urna, in laoreet diam elit vitae turpis. Maecenas sagittis massa ut scelerisque fermentum.</p>
            </div>
            <div className="grid-2">
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed adipiscing cursus mauris, quis auctor dui placerat eget. Aenean fermentum diam ac velit laoreet porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tristique pellentesque dictum. Cras a ante porttitor, cursus massa ut, vehicula magna. Maecenas non gravida erat.</p>
              <p>Fusce ac eros sit amet dolor egestas suscipit sit amet eu ipsum. Mauris et felis a mauris euismod ultrices. Donec sollicitudin tempor dignissim.</p>
            </div>
          </div>
        </header>

        <div className="collage">
          <div className="grid-1 bg-image" style={{backgroundImage: "url('https://unsplash.imgix.net/reserve/tdedkQnQGCgIhk9eoEkP_DSC_0983.JPG?fit=crop&fm=jpg&h=700&q=75&w=1050');"}}></div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Identifying Goals</h2>
            <p>Process: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed adipiscing cursus mauris, quis auctor dui placerat eget. Aenean fermentum diam ac velit laoreet porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tristique pellentesque dictum. Cras a ante porttitor, cursus massa ut, vehicula magna. Maecenas non gravida erat.</p>
            <div className="media-inline-rightalign">
            <img className="media" src="https://unsplash.imgix.net/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?fit=crop&fm=jpg&h=875&q=75&w=1050"/>
            <span className="caption"><span className="title-caption">In the dark</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</span>
          </div>
            <p>Fusce ac eros sit amet dolor egestas suscipit sit amet eu ipsum. Mauris et felis a mauris euismod ultrices. Donec sollicitudin tempor dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed adipiscing cursus mauris, quis auctor dui placerat eget. Aenean fermentum diam ac velit laoreet porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tristique pellentesque dictum. Cras a ante porttitor, cursus massa ut, vehicula magna. Maecenas non gravida erat.</p>
            <p>Fusce ac eros sit amet dolor egestas suscipit sit amet eu ipsum. Mauris et felis a mauris euismod ultrices.</p>
            <p>Fusce ac eros sit amet dolor egestas suscipit sit amet eu ipsum. Mauris et felis a mauris euismod ultrices. Donec sollicitudin tempor dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed adipiscing cursus mauris, quis auctor dui placerat eget. Aenean fermentum diam ac velit laoreet porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tristique pellentesque dictum. Cras a ante porttitor, cursus massa ut, vehicula magna. Maecenas non gravida erat.</p>
            <p>Fusce ac eros sit amet dolor egestas suscipit sit amet eu ipsum. Mauris et felis a mauris euismod ultrices.</p>
          </div>
        </div>

        <div className="media-leftalign">
          <img src="https://unsplash.imgix.net/uploads/1412238370909393b4a19/79f023f1?fit=crop&fm=jpg&h=700&q=75&w=1050"/>
          <span className="caption"><span className="title-caption">Caption</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Reading between the lines</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="collage">
          <div className="grid-2-square bg-image" style={{backgroundImage: "url('https://unsplash.imgix.net/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?fit=crop&fm=jpg&h=875&q=75&w=1050')"}}>
          </div>
          <div className="grid-2-square bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}>
          </div>
        </div>

        <div className="wrapper-content">
          <div className="full-up formatting">
            <h2>Discovering the classNameroom</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="collage short">
          <div className="grid-3-square bg-image" style={{backgroundImage: "url('https://unsplash.imgix.net/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?fit=crop&fm=jpg&h=875&q=75&w=1050')"}}>
          </div>
          <div className="grid-3-square quote-collage">
            <div className="wrapper-quote">
              <div className="title-quote">"It was just, I don't know... amazing"</div>
              <div className="attribution">
                <div className="author">Mary Lou</div>
                <div className="metadata">St. Mary School Student</div>
              </div>
            </div>
          </div>
          <div className="grid-3-square bg-image" style={{backgroundImage: "url('https://unsplash.imgix.net/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?fit=crop&fm=jpg&h=875&q=75&w=1050')"}}>
          </div>
        </div>

        <div className="pullquote">
          <div className="title-quote">
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <div className="attribution">
            <div className="author">Stuart Mitchell</div>
            <div className="metadata">VP Mobile</div>
          </div>
        </div>

        <div className="collage">
          <div className="grid-1 bg-image" style={{backgroundImage: "url('https://unsplash.imgix.net/reserve/tdedkQnQGCgIhk9eoEkP_DSC_0983.JPG?fit=crop&fm=jpg&h=700&q=75&w=1050');"}}></div>

          <div className="grid-2 bg-image" style={{backgroundImage: "url('https://unsplash.imgix.net/reserve/oIpwxeeSPy1cnwYpqJ1w_Dufer%20Collateral%20test.jpg?fit=crop&fm=jpg&h=875&q=75&w=1050')"}}>
          </div>

          <div className="grid-2 quote-collage">
            <div className="wrapper-quote">
              <div className="title-quote">Morbi pilvinar frementum turpis ullam corper commodo dui consequat a. Mauris vilae orci phaetra, mollis maetra massa vel, adipiscing</div>
              <div className="attribution">
                <div className="author">Stuart Mitchell</div>
                <div className="metadata">VP Mobile</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper-content">
          <div className="carousel">
            <div className="wrapper"><div className="ss-home"></div></div>
            <div className="wrapper"><div className="ss-fall"></div></div>
            <div className="wrapper">
              <div className="bg-iphone5s"><div className="ss-categories"></div></div>
            </div>
            <div className="wrapper"><div className="ss-recipe"></div></div>
            <div className="wrapper"><div className="ss-winter"></div></div>
          </div>
        </div>

        <div className="collage">
          <div className="grid-2-square bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}>
          </div>
          <div className="grid-4-square bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}></div>
          <div className="grid-4-square bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}></div>
          <div className="grid-2 bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}>
          </div>
        </div>

        <div className="collage">
          <div className="grid-2 copy-collage">
            Context for a series. Max 400 char. NOT apart of the narrative. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in luctus purus, nec posuere tellus. In fermentum, justo vitae mollis euismod, tellus neque vestibulum ante, sed pellentesque ipsum orci id elit. Suspendisse potenti. Curabitur pellentesque aliquet mauris. Morbi pulvinar fermentum turpis, ullamcorper commodo dui consequat a. Mauris vitae.
          </div>
          <div className="grid-2 bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}>
          </div>
          <div className="grid-2 bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}>
          </div>
          <div className="grid-2 bg-image" style={{backgroundImage: "url('http://unsplash.imgix.net/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?fit=crop&fm=jpg&h=700&q=75&w=1050')"}}>
          </div>
        </div>
        <div className="wrapper-content">
          <div className="conclusion">Conclusion lorem ipsum dolor sit amet consectatur vesti
        bulum crassa mit arunto desciplico</div>

          <div className="center-up formatting">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="wrapper-cta-case-study">
              <a className="btn-wire-inverse caps cta-case-study" data-contact>Get in Touch</a>
            </div>
          </div>
        </div>
        <div className="title-section featured">Featured Projects</div>
        <div className="collage">
          <a className="grid-2-square item-project bg-image-test-1" style={{backgroundImage: "url('/img/case-study/meteor/meteor-todos-home-iphone5s-600x600.jpg');"}}>
            <span className="subtitle-item">Meteor</span>
          </a>
          <a className="grid-2-square item-project bg-image-test-2" style={{backgroundImage: "url('/img/case-study/verso/verso-classes-iphone6-600x600.jpg');"}}>
            <span className="subtitle-item">Verso</span>
          </a>
        </div>
      </PageLayout>
    );
  }
});

module.exports = StyleguideCaseStudy;
