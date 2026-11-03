import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SpcLandingPage() {
    return (
        <section className="landingPage">

            <Helmet>
                <title>SPC Flooring Canada | Clivia Floors</title>
                <meta
                    name="description"
                    content="Clivia Floors is a trusted SPC flooring supplier in Canada. Wholesale pricing, reliable inventory, and modern flooring collections for retailers and contractors."
                />
            </Helmet>

            {/* HERO */}
            <div className="landingHero">
                <div>
                    <h1>SPC Flooring Supplier in Canada</h1>
                    <p>
                        Clivia Floors provides high-quality SPC flooring,
                        reliable inventory, and modern designs for your properties.
                    </p>

                    <Link to="/contact" className="ctaBtn">
                        Request Product Information
                    </Link>
                </div>
            </div>

            {/* WHY US */}
            <section className="landingSection">
                <h2>Why Choose Clivia Floors</h2>

                <div className="landingGrid">
                    <div>
                        <h3>Consistent Quality</h3>
                        <p>Carefully controlled SPC construction with stable performance across all collections.</p>
                    </div>

                    <div>
                        <h3>Reliable Inventory</h3>
                        <p>Consistent stock availability for ongoing projects and repeat orders.</p>
                    </div>

                    <div>
                        <h3>Modern Collections</h3>
                        <p>Carefully selected colours that match current market trends.</p>
                    </div>

                    <div>
                        <h3>Practical Performance</h3>
                        <p>
                            Designed for everyday use with durability, easy installation, and low maintenance.
                        </p>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="landingSection">
                <h2>Our SPC Flooring Collections</h2>

                <p className="landingText">
                    Explore our 6.5mm, 7mm, and 8mm SPC flooring collections designed for
                    residential and commercial use.
                </p>

                <Link to="/#collections" className="ctaBtnOutline">
                    View Collections
                </Link>
            </section>

            {/* APPLICATION */}
            <section className="landingSection">
                <h2>Applications</h2>

                <div className="landingGrid">

                    <div>
                        <h3>Residential Projects</h3>
                        <p>Waterproof and durable flooring ideal for modern living spaces.</p>
                    </div>

                    <div>
                        <h3>Multi-Unit Developments</h3>
                        <p>Consistent product supply for apartments, townhomes, and housing projects.</p>
                    </div>

                    <div>
                        <h3>Light Commercial Spaces</h3>
                        <p>Suitable for offices, retail units, and low-traffic commercial environments.</p>
                    </div>
                    <div>
                        <h3>Renovation Projects</h3>
                        <p>
                            Ideal for residential upgrades and interior remodeling with minimal maintenance.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="landingCTA">
                <h2>Looking for a Reliable SPC Flooring Supplier?</h2>
                <p>Contact us today for pricing, availability, and dealer support.</p>

                <Link to="/contact" className="ctaBtn">
                    Contact Clivia Floors
                </Link>
            </section>

        </section>
    );
}