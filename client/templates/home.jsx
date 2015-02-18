Home = React.createClass({
  render: function() {
    // TODO: set meta
    // {{#metaTitle}}Percolate Studio: We build software that improves people's lives{{/metaTitle}}
//     {{#metaDescription}}Percolate Studio is an interdisciplinary team of designers and engineers that help companies achieve their goals. We identify challenges, design solutions, and make technology human.{{/metaDescription}}
//

    return (
      <div>
        <section className="section-home-why">
          <div className="hero-wrapper">
            <h1 className="title-page">Percolate Studio builds digital products to improve people's lives.</h1>
            {/* <Router.Link to="why" className="btn-wire caps">See Why</Router.Link>*/}
          </div>
        </section>

        <section className="section-home-how collage">
          <div className="grid-2-square">
            <h2 className="title-section">Our approach</h2>
            <div className="col-content">
              <p>Clients hire our interdisciplinary team of designers & engineers to identify challenges, design solutions, and make technology human. We're the rare team that can take a product from idea to market.</p>
              <Router.Link to="how" className="btn-secondary caps">See how we do it</Router.Link>
            </div>

          </div>

          <div className="grid-2 bg-image-how-texture-process"></div>
          <div className="grid-4-square bg-image-how-texture1"></div>
          <div className="grid-4-square bg-image-how-texture2"></div>
        </section>


        <section className="section-home-what">
          <h2 className="title-section">What we do</h2>

          <div className="grid-2 col-content">
            <p>We build software that spans consumer, education, and business intelligence. We help companies large and small achieve their goals. Businesses trust us to deliver elegant yet robust digital experiences.</p>
          </div>
          <div className="grid-2 col-content">
            <p>Our books, presentations, and articles help people understand the craft of creating software. Our frequent contributions to open source projects help bring ideas to life.</p>
          </div>

          <div className="grid-1 col-content">
            <Router.Link to="what" className="btn-secondary caps">See our work</Router.Link>
          </div>

          <picture className="home-collage">
             <source media="(min-width: 80em)"
                srcSet="/img/home-collage-1400x650@2x.jpg 2x,
                /img/home-collage-1400x650.jpg 1x"
                sizes="100vw" />

             <source media="(min-width: 50em)"
                srcSet="/img/home-collage-mobile-1000x625@2x.jpg 2x,
                /img/home-collage-mobile-1000x625.jpg 1x"
                sizes="100vw" />

             <source srcSet="/img/home-collage-mobile2-600x480@2x.jpg 2x,
                   /img/home-collage-mobile2-600x480.jpg 1x" />
             <img src="/img/home-collage-mobile-1000x625.jpg" alt="Desktop & Mobile Apps" />
          </picture>

        </section>
      </div>
    )
  }
});