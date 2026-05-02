import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const BASE = import.meta.env.BASE_URL;

const blogPosts = [
  {
    id: 1,
    category: "Flooring Guide",
    title: "SPC Flooring vs Laminate Flooring: Which Is Better?",
    excerpt:
      "A professional comparison for homeowners, contractors, and retail stores choosing between SPC and laminate flooring.",
    date: "May 2026",
    image: `${BASE}images/CL321.jpg`,
    link: "/blog/spc-vs-laminate-flooring",
  },
  {
    id: 2,
    category: "Wholesale Flooring",
    title: "What Retail Stores Should Look for in a Flooring Supplier",
    excerpt:
      "From consistent inventory to display support, here are the key factors retailers should consider when choosing a flooring supplier.",
    date: "May 2026",
    image: `${BASE}images/CL1705.PNG`,
    link: "/blog/wholesale-flooring-supplier-vancouver",
  },
  {
    id: 3,
    category: "Design Inspiration",
    title: "Best Flooring Colors for Modern Vancouver Homes",
    excerpt:
      "Explore neutral, warm, and natural SPC flooring colors that work beautifully in today’s interiors.",
    date: "April 2026",
    image: `${BASE}images/CL1821.jpg`,
    link: "/blog/best-flooring-colors",
  },
];

function Blog() {
  return (
    <main className="blogPage">
      <section className="blogHero">
        <div className="blogHeroContent">
          <p className="blogEyebrow">Clivia Floors Journal</p>
          <h1>Flooring Insights for Modern Spaces</h1>
          <p className="blogHeroText">
            Professional flooring guides, design inspiration, and product
            knowledge for retailers, contractors, designers, and homeowners.
          </p>
        </div>
      </section>

      <section className="featuredBlog">
        <div className="featuredImage">
          <img src={`${BASE}images/CL1825.jpg`} alt="Premium SPC flooring" />
        </div>

        <div className="featuredContent">
          <p className="blogCategory">Featured Guide</p>
          <h2>How to Choose the Right SPC Flooring for Your Project</h2>
          <p>
            Learn how thickness, wear layer, plank size, color tone, and
            installation environment affect the final flooring decision.
          </p>
          <Link to="/blog/how-to-choose-spc-flooring" className="blogButton">
            Read Flooring Guide
          </Link>
        </div>
      </section>

      <section className="blogGridSection">
        <div className="sectionHeader">
          <p className="blogEyebrow">Latest Articles</p>
          <h2>Knowledge That Helps You Choose Better Flooring</h2>
        </div>

        <div className="blogGrid">
          {blogPosts.map((post) => (
            <article className="blogCard" key={post.id}>
              <Link to={post.link} className="blogImageWrap">
                <img src={post.image} alt={post.title} />
              </Link>

              <div className="blogCardContent">
                <div className="blogMeta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h3>
                  <Link to={post.link}>{post.title}</Link>
                </h3>

                <p>{post.excerpt}</p>

                <Link to={post.link} className="readMore">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blogCTA">
        <div>
          <h2>Looking for Premium SPC Flooring?</h2>
          <p>
            Contact Clivia Floors for dealer pricing, display samples, product
            availability, and project support.
          </p>
        </div>

        <Link to="/contact" className="ctaButton">
          Request Price List
        </Link>
      </section>
    </main>
  );
}

export default Blog;