import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function VinylWholesalePage() {
  return (
    <section className="landingPage">

      <Helmet>
        <title>Vinyl Flooring Wholesale Canada | Clivia Floors</title>
        <meta
          name="description"
          content="Clivia Floors offers vinyl flooring wholesale in Canada. Reliable SPC collections, consistent quality, and modern designs for retailers and projects."
        />
      </Helmet>

      {/* HERO */}
      <div className="landingHero">
        <div>
          <h1>Vinyl Flooring Wholesale in Canada</h1>

          <p>
            Clivia Floors supplies SPC vinyl flooring across Canada.
          </p>

          <Link to="/contact" className="ctaBtn">
            Get Product Information
          </Link>

          <p className="ctaNote">
            We typically respond within 24 hours.
          </p>
        </div>
      </div>

      {/* WHY */}
      <section className="landingSection">
        <h2>Why Work With Clivia Floors</h2>

        <div className="landingGrid">
          <div>
            <h3>Consistent Quality</h3>
            <p>Stable SPC construction designed for reliable performance.</p>
          </div>

          <div>
            <h3>Reliable Supply</h3>
            <p>Inventory planning to support ongoing projects.</p>
          </div>

          <div>
            <h3>Modern Collections</h3>
            <p>Colours aligned with current market demand.</p>
          </div>

          <div>
            <h3>Practical Performance</h3>
            <p>Durable, waterproof, and easy to install.</p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="landingSection">
        <h2>Applications</h2>

        <div className="landingGrid">

          <div>
            <h3>Renovation Projects</h3>
            <p>Ideal for modern home upgrades and remodeling.</p>
          </div>

          <div>
            <h3>Residential Projects</h3>
            <p>Waterproof flooring designed for everyday living.</p>
          </div>

          <div>
            <h3>Multi-Unit Developments</h3>
            <p>Suitable for apartments and large-scale projects.</p>
          </div>

          <div>
            <h3>Light Commercial Spaces</h3>
            <p>Offices, retail units, and low-traffic environments.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="landingCTA">
        <h2>Looking for a Vinyl Flooring Supplier?</h2>

        <p>
          Contact Clivia Floors for product details, availability, and support.
        </p>

        <Link to="/contact" className="ctaBtn">
          Contact Us
        </Link>
      </section>

    </section>
  );
}