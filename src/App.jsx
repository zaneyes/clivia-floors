import { useState } from "react";
import "./App.css";

const seriesData = [
  {
    id: "cl3",
    name: "CL3 Series",
    size: '7.21" x 48"',
    thickness: "6.5mm",
    wear: "20mil",
    description: "Reliable SPC flooring with popular colours.",
    colors: [
      { name: "CL321 - Bridal Veil Falls", image: "/images/CL321.jpg" },
      { name: "CL322 - Cascade Creeks", image: "/images/CL322.jpg" },
      { name: "CL323 - Cheam Lake", image: "/images/CL323.jpg" },
      { name: "CL324 - Boston Bar", image: "/images/CL324.jpg" },
      { name: "CL325 - Osoyoos", image: "/images/CL325.jpg" },
      { name: "CL326 - Mistaya", image: "/images/CL326.jpg" },
      { name: "CL327 - Eagle Blains", image: "/images/CL327.jpg" },
      { name: "CL328 - Sunshine Coast", image: "/images/CL328.jpg" },
      { name: "CL329 - Rose Valley", image: "/images/CL329.jpg" },
      { name: "CL330 - Skaha", image: "/images/CL330.jpg" },
      { name: "CL331 - Twin Creeks", image: "/images/CL331.png" },
    ],
  },

  {
    id: "wide",
    name: "7mm Wide Plank",
    size: '9" x 48"',
    thickness: "7mm",
    wear: "20mil",
    description: "Wide plank modern flooring designs.",
    colors: [
      { name: "CL1701 - Dartford", image: "/images/CL1701.PNG" },
      { name: "CL1702 - Sevenoaks", image: "/images/CL1702.PNG" },
      { name: "CL1703 - Chatham", image: "/images/CL1703.PNG" },
      { name: "CL1704 - Emberton", image: "/images/CL1704.PNG" },
      { name: "CL1705 - Forest Gate", image: "/images/CL1705.PNG" },
      { name: "CL1706 - Beacon", image: "/images/CL1706.PNG" },
      { name: "CL1707 - Moraine Drift", image: "/images/CL1707.PNG" },
      { name: "CL1708 - Peyto Glaze", image: "/images/CL1708.PNG" },
      { name: "CL1709 - O'Hara Alpine", image: "/images/CL1709.PNG" },
      { name: "CL1710 - Morning Mist", image: "/images/CL1710.PNG" },
    ],
  },

  {
    id: "standard",
    name: "7mm Standard",
    size: '7.21\" x 48\"',
    thickness: "7mm",
    wear: "20mil",
    description: "Dealer-friendly balanced flooring collection.",
    colors: [
      { name: "CL1731 - Brockton Totem", image: "/images/CL1731.PNG" },
      { name: "CL1732 - Monterrey Sierra", image: "/images/CL1732.png" },
      { name: "CL1733 - Kansas Heartland", image: "/images/CL1733.PNG" },
      { name: "CL1734 - Atlanta Pitch", image: "/images/CL1734.png" },
      { name: "CL1735 - Miami Beach", image: "/images/CL1735.png" },
      { name: "CL1736 - L.A. Studio", image: "/images/CL1736.PNG" },
    ],
  },

  {
    id: "premium",
    name: "8mm Premium",
    size: '9.1" x 48"',
    thickness: "8mm",
    wear: "20mil",
    description: "Premium SPC flooring with elevated construction.",
    colors: [
      { name: "CL1821 - Glacier", image: "/images/CL1821.jpg" },
      { name: "CL1822 - Celtic", image: "/images/CL1822.jpg" },
      { name: "CL1823 - Hyland", image: "/images/CL1823.jpg" },
      { name: "CL1824 - Aurora", image: "/images/CL1824.jpg" },
      { name: "CL1825 - Mara", image: "/images/CL1825.jpg" },
      { name: "CL1826 - Teslin", image: "/images/CL1826.jpg" },
    ],
  },
];

function App() {
  const [page, setPage] = useState("home");
  const selectedSeries = seriesData.find((item) => item.id === page);
  const [selectedColor, setSelectedColor] = useState(null);
  const goPageTop = (pageName) => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    setPage(pageName);

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 100);
  };
  return (
    <div className="site">
      <header className="header">
        <div
          className="logo"
          onClick={() => {
            setPage("home");
            setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }, 100);
          }}
        >
          <img src="/images/logo.jpg" alt="Clivia Floors" />
        </div>

        <nav>
          <button
            onClick={() => {
              setPage("home");
              setTimeout(() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            Home
          </button>
          <div className="navDropdown">
            <button className="dropdownTrigger">Series ▾</button>

            <div className="dropdownMenu">
              <button onClick={() => setPage("cl3")}>Clivia 6.5mm SPC 3 Series</button>

              <button onClick={() => setPage("wide")}>
                Clivia 7mm SPC 170 Series
              </button>

              <button onClick={() => setPage("standard")}>
                Clivia 7mm SPC 173 Series
              </button>

              <button onClick={() => setPage("premium")}>
                Clivia 8mm SPC 18 Series
              </button>
            </div>
          </div>
          <button onClick={() => setPage("resources")}>Resources</button>
          <button
            onClick={() => {
              document.documentElement.style.scrollBehavior = "auto";
              window.scrollTo(0, 0);
              setPage("visualizer");

              setTimeout(() => {
                document.documentElement.style.scrollBehavior = "smooth";
              }, 100);
            }}
          >
            Visualizer
          </button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </nav>

        <button className="quoteBtn" onClick={() => setPage("contact")}>
          Dealer Inquiry
        </button>
      </header>

      {page === "home" && (
        <>
          <section className="luxuryHero">
            <div className="heroOverlay">
              <p className="heroLabel">Premium SPC Flooring</p>

              <h1>
                Artistically Inspired.
                <br />
                Made for Life.
              </h1>

              <p className="heroText">
                Clivia SPC flooring combines stunning wood designs with durability,
                comfort, and performance — perfect for retail stores, builders, and
                modern homes.
              </p>

              <div className="heroButtons">
                <button
                  onClick={() => {
                    setPage("home");

                    setTimeout(() => {
                      document.getElementById("collections")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }}
                >
                  Explore Our Series
                </button>
                <button className="outlineBtn" onClick={() => setPage("contact")}>
                  Dealer Inquiry
                </button>
              </div>
            </div>
          </section>

          <section id="collections" className="luxuryCollections">
            <p className="sectionLabel">Our Collections</p>
            <h2>Find the Perfect Floor for Your Space</h2>
            <p className="sectionSub">
              Explore our premium SPC flooring series, designed for style, strength,
              and everyday living.
            </p>

            <div className="luxuryGrid">
              {seriesData.map((item) => (
                <div
                  className="luxuryCard"
                  key={item.id}
                  onClick={() => {
                    document.documentElement.style.scrollBehavior = "auto";
                    window.scrollTo(0, 0);
                    setPage(item.id);

                    setTimeout(() => {
                      document.documentElement.style.scrollBehavior = "smooth";
                    }, 100);
                  }}
                >
                  <div
                    className="luxuryCardImage"
                    style={{
                      backgroundImage: `url(${item.colors?.[0]?.image || "/images/CL321.jpg"})`,
                    }}
                  ></div>

                  <div className="luxuryCardText">
                    <h3>{item.name}</h3>
                    <p>
                      {item.thickness} · {item.size}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        document.documentElement.style.scrollBehavior = "auto";
                        window.scrollTo(0, 0);
                        setPage(item.id);

                        setTimeout(() => {
                          document.documentElement.style.scrollBehavior = "smooth";
                        }, 100);
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {selectedSeries && (
        <section className="detailPage">
          <button
            className="back"
            onClick={() => {
              setPage("home");

              setTimeout(() => {
                document.getElementById("collections")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            ← Back to Series
          </button>

          <div className="detailHero">
            <h1>{selectedSeries.name}</h1>
            <p>{selectedSeries.description}</p>
          </div>

          <div className="detailSpecs">
            <div>
              <span>Size</span>
              <strong>{selectedSeries.size}</strong>
            </div>

            <div>
              <span>Thickness</span>
              <strong>{selectedSeries.thickness}</strong>
            </div>

            <div>
              <span>Wear Layer</span>
              <strong>{selectedSeries.wear}</strong>
            </div>
          </div>

          <h2>Available Colours</h2>

          <div className="colorGrid">
            {selectedSeries.colors.map((color) => (
              <div
                className="colorTile"
                key={color.name}
                onClick={() => setSelectedColor(color)}
              >
                <img src={color.image} alt={color.name} />
                <h3>{color.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === "contact" && (
        <section className="contactFormPage">
          <div className="contactFormHero">
            <p className="eyebrow">Contact Us</p>
            <h1>Dealer Inquiry</h1>
            <p>
              Fill out the form below and our team will contact you about pricing,
              samples, availability, and dealer support.
            </p>
          </div>

          <form
            className="dealerForm"
            action="https://formspree.io/f/mzdyljbw"
            method="POST"
          >
            <div className="formColumn">
              <h2>Your Contact Information</h2>

              <input name="firstName" type="text" placeholder="First Name *" required />
              <input name="lastName" type="text" placeholder="Last Name *" required />
              <input name="email" type="email" placeholder="Email *" required />
              <input name="phone" type="tel" placeholder="Phone Number" />
              <input name="province" type="text" placeholder="Province / State *" required />
            </div>

            <div className="formColumn">
              <h2>Company Contact Information</h2>

              <input name="companyName" type="text" placeholder="Company Name *" required />
              <input name="companyWebsite" type="text" placeholder="Company Website" />
              <input name="companyPhone" type="tel" placeholder="Company Phone Number" />
            </div>

            <textarea
              name="message"
              placeholder="Leave a quick message and we'll get back to you as soon as we are able. Thanks! :)"
            ></textarea>

            <button type="submit">Submit Inquiry</button>
          </form>
        </section>
      )}
      {selectedColor && (
        <div className="modal" onClick={() => setSelectedColor(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setSelectedColor(null)}>
              ×
            </button>

            <img src={selectedColor.image} alt={selectedColor.name} />
            <h2>{selectedColor.name}</h2>
          </div>
        </div>
      )}
      {page === "visualizer" && (
        <section className="comingSoonPage">
          <div className="comingSoonCard">
            <p className="eyebrow">Clivia Innovation</p>

            <h1>Room Visualizer</h1>

            <h2>Coming Soon</h2>

            <p>
              Upload your room photo and preview Clivia flooring colours instantly.
              Our next-generation flooring simulator is currently in development.
            </p>

            <div className="comingButtons">
              <button onClick={() => setPage("contact")}>
                Get Early Access
              </button>

              <button
                className="lightBtn"
                onClick={() => {
                  setPage("home");

                  setTimeout(() => {
                    document.documentElement.style.scrollBehavior = "auto";
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                      document.documentElement.style.scrollBehavior = "smooth";
                    }, 100);
                  }, 50);
                }}
              >
                Back Home
              </button>
            </div>
          </div>
        </section>
      )}
      {page === "resources" && (
        <section className="resourcesPage">
          <div className="resourcesHero">
            <p className="eyebrow">Resources</p>
            <h1>Product Documents & Guides</h1>
            <p>
              Download Clivia Floors spec sheets, installation guides, warranty
              information, and product resources.
            </p>
          </div>

          <div className="resourceGrid">
            <a className="resourceCard" href="/resources/clivia_floors_specs.pdf" download>
              <h3>Spec Sheets</h3>
              <p>Product specifications, series details, carton information, and warranty data.</p>
              <span>Download PDF</span>
            </a>

            <a className="resourceCard" href="/resources/installation_guide.pdf" download>
              <h3>Installation Guide</h3>
              <p>Floating installation instructions and recommended installation practices.</p>
              <span>Download PDF</span>
            </a>

            <a className="resourceCard" href="/resources/warranty_information.pdf" download>
              <h3>Warranty Information</h3>
              <p>Residential and light commercial warranty information for Clivia flooring.</p>
              <span>Download PDF</span>
            </a>
          </div>
        </section>
      )}
      <footer className="siteFooter">
        <div className="footerGrid">
          <div className="footerBrand">
            <img src="/images/logo.jpg" alt="Clivia Floors" />
            <p>
              Premium SPC flooring collections for retail stores, builders, and modern homes.
            </p>

            <div className="socialLinks">
              <span>f</span>
              <span>ig</span>
              <span>in</span>
            </div>
          </div>

          <div>
            <h4>Collections</h4>
            <button onClick={() => goPageTop("cl3")}>CL3 Series</button>
            <button onClick={() => goPageTop("wide")}>7mm Wide Plank</button>
            <button onClick={() => goPageTop("standard")}>7mm Standard</button>
            <button onClick={() => goPageTop("premium")}>8mm Premium</button>
          </div>

          <div>
            <h4>Resources</h4>
            <button onClick={() => setPage("resources")}>Spec Sheets</button>
            <button onClick={() => setPage("resources")}>Installation Guide</button>
            <button onClick={() => setPage("resources")}>Warranty</button>
            <button
              onClick={() => {
                document.documentElement.style.scrollBehavior = "auto";
                window.scrollTo(0, 0);
                setPage("visualizer");

                setTimeout(() => {
                  document.documentElement.style.scrollBehavior = "smooth";
                }, 100);
              }}
            >
              Visualizer
            </button>
          </div>

          <div className="footerContact">
            <h4>Contact</h4>
            <p>BC, Canada</p>
            <p>info@hrzfloors.com</p>
            <button className="footerCTA" onClick={() => setPage("contact")}>
              Dealer Inquiry
            </button>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2026 Clivia Floors. All rights reserved.</p>
          <p>Wholesale SPC Flooring</p>
        </div>
      </footer>
    </div>
  );
}


export default App;