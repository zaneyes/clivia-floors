import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function FlooringSupplierBCPage() {
  return (
    <section className="landingPage">
      <Helmet>
        <title>Flooring Supplier BC | Clivia Floors</title>
        <meta
          name="description"
          content="Clivia Floors is a flooring supplier in British Columbia offering SPC vinyl flooring collections for residential, renovation, multi-unit, and light commercial projects."
        />
      </Helmet>

      <div className="landingHero">
        <h1>
          Flooring Supplier <br /> in British Columbia
        </h1>

        <p>
          Clivia Floors supplies SPC vinyl flooring collections for projects
          across BC, with modern designs, reliable product quality, and practical
          performance.
        </p>

        <Link to="/contact" className="ctaBtn">
          Request Product Details
        </Link>

        <p className="ctaNote">We typically respond within 24 hours.</p>
      </div>

      <section className="landingSection">
        <h2>Why Work With Clivia Floors</h2>

        <div className="landingGrid">
          <div>
            <h3>Consistent Quality</h3>
            <p>
              SPC flooring collections selected for stable construction and
              dependable performance.
            </p>
          </div>

          <div>
            <h3>Modern Designs</h3>
            <p>
              Wood-look colours designed to fit today’s residential and
              commercial interiors.
            </p>
          </div>

          <div>
            <h3>Practical Performance</h3>
            <p>
              Waterproof, durable, and low-maintenance flooring for everyday use.
            </p>
          </div>

          <div>
            <h3>Project Friendly</h3>
            <p>
              Suitable for renovation, housing, and light commercial flooring
              applications.
            </p>
          </div>
        </div>
      </section>

      <section className="landingSection">
        <h2>Applications</h2>

        <div className="landingGrid">
          <div>
            <h3>Renovation Projects</h3>
            <p>Ideal for modern upgrades and remodeling projects.</p>
          </div>

          <div>
            <h3>Residential Spaces</h3>
            <p>Durable waterproof flooring for homes and living areas.</p>
          </div>

          <div>
            <h3>Multi-Unit Developments</h3>
            <p>Suitable for apartments, townhomes, and housing projects.</p>
          </div>

          <div>
            <h3>Light Commercial Spaces</h3>
            <p>Designed for offices, retail units, and low-traffic environments.</p>
          </div>
        </div>
      </section>

      <section className="landingCTA">
        <h2>Looking for SPC Flooring in BC?</h2>
        <p>
          Contact Clivia Floors for product details, availability, and project
          support.
        </p>

        <Link to="/contact" className="ctaBtn">
          Contact Us
        </Link>
      </section>
    </section>
  );
}