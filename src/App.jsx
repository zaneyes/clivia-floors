import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import SpcLandingPage from "./SpcLandingPage";
import VinylWholesalePage from "./VinylWholesalePage";
import FlooringSupplierBCPage from "./FlooringSupplierBCPage";
import Blog from "./Blog";

const BASE = import.meta.env.BASE_URL;
const seriesData = [
  {
    id: "cl3",
    name: "Essential (6.5mm)",
    size: '7.21" x 48"',
    thickness: "6.5mm",
    wear: "20mil",
    description: "Reliable SPC flooring with popular colours.",
    specs: {
      sqft: "19.22 sq.ft / carton",
      weight: "42 lbs / carton",
      planks: "8 planks / carton",
      pallet: "55 cartons / pallet"
    },

    features: [
      "100% Waterproof",
      "Scratch Resistant Wear Layer",
      "Four-sided painted bevels",
      "Click Lock Installation",
      "Low Maintenance",
      "Suitable for Residential & Light Commercial"
    ],
    colors: [
      { name: "CL321 - Bridal Veil Falls", image: `${BASE}images/CL321.jpg` },
      { name: "CL322 - Cascade Creeks", image: `${BASE}images/CL322.jpg` },
      { name: "CL323 - Cheam Lake", image: `${BASE}images/CL323.jpg` },
      { name: "CL324 - Boston Bar", image: `${BASE}images/CL324.jpg` },
      { name: "CL325 - Osoyoos", image: `${BASE}images/CL325.jpg` },
      { name: "CL326 - Mistaya", image: `${BASE}images/CL326.jpg` },
      { name: "CL327 - Eagle Plains", image: `${BASE}images/CL327.jpg` },
      { name: "CL328 - Sunshine Coast", image: `${BASE}images/CL328.jpg` },
      { name: "CL329 - Rose Valley", image: `${BASE}images/CL329.jpg` },
      { name: "CL330 - Skaha", image: `${BASE}images/CL330.jpg` },
      { name: "CL331 - Twin Creeks", image: `${BASE}images/CL331.png` },
    ],
  },

  {
    id: "wide",
    name: "Wide Plank (7mm)",
    size: '9" x 48"',
    thickness: "7mm",
    wear: "20mil",
    description: "Wide plank modern flooring designs.",
    specs: {
      sqft: "24.17 sq.ft / carton",
      weight: "50 lbs / carton",
      planks: "8 planks / carton",
      pallet: "48 cartons / pallet"
    },

    features: [
      "100% Waterproof",
      "Scratch Resistant Wear Layer",
      "Four-sided painted bevels",
      "Enhanced Underlayment",
      "Click Lock Installation",
      "Low Maintenance",
      "Suitable for Residential & Light Commercial"
    ],
    colors: [
      { name: "CL1701 - Dartford", image: `${BASE}images/CL1701.PNG` },
      { name: "CL1702 - Sevenoaks", image: `${BASE}images/CL1702.PNG` },
      { name: "CL1703 - Chatham", image: `${BASE}images/CL1703.PNG` },
      { name: "CL1704 - Emberton", image: `${BASE}images/CL1704.PNG` },
      { name: "CL1705 - Forest Gate", image: `${BASE}images/CL1705.PNG` },
      { name: "CL1706 - Beacon", image: `${BASE}images/CL1706.PNG` },
      { name: "CL1707 - Moraine Drift", image: `${BASE}images/CL1707.PNG` },
      { name: "CL1708 - Peyto Glaze", image: `${BASE}images/CL1708.PNG` },
      { name: "CL1709 - O'Hara Alpine", image: `${BASE}images/CL1709.PNG` },
      { name: "CL1710 - Morning Mist", image: `${BASE}images/CL1710.PNG` },
    ],
  },

  {
    id: "standard",
    name: "Classic (7mm)",
    size: '7.21\" x 48\"',
    thickness: "7mm",
    wear: "20mil",
    description: "Dealer-friendly balanced flooring collection.",
    specs: {
      sqft: "19.23 sq.ft / carton",
      weight: "43 lbs / carton",
      planks: "8 planks / carton",
      pallet: "55 cartons / pallet"
    },

    features: [
      "100% Waterproof",
      "Scratch Resistant Wear Layer",
      "Micro bevels",
      "Enhanced Underlayment",
      "Click Lock Installation",
      "Low Maintenance",
      "Suitable for Residential & Light Commercial"
    ],
    colors: [
      { name: "CL1731 - Brockton Totem", image: `${BASE}images/CL1731.PNG` },
      { name: "CL1732 - Monterrey Sierra", image: `${BASE}images/CL1732.png` },
      { name: "CL1733 - Kansas Heartland", image: `${BASE}images/CL1733.PNG` },
      { name: "CL1734 - Atlanta Pitch", image: `${BASE}images/CL1734.png` },
      { name: "CL1735 - Miami Beach", image: `${BASE}images/CL1735.png` },
      { name: "CL1736 - L.A. Studio", image: `${BASE}images/CL1736.PNG` },
    ],
  },

  {
    id: "premium",
    name: "Premium (8mm)",
    size: '9.1" x 48"',
    thickness: "8mm",
    wear: "20mil",
    description: "Premium SPC flooring with elevated construction.",
    specs: {
      sqft: "18.122 sq.ft / carton",
      weight: "50 lbs / carton",
      planks: "6 planks / carton",
      pallet: "48 cartons / pallet"
    },

    features: [
      "100% Waterproof",
      "Enhanced Core",
      "Wide Planks",
      "Scratch Resistant Wear Layer",
      "Four-sided painted bevels",
      "Enhanced Underlayment",
      "Click Lock Installation",
      "Low Maintenance",
      "Suitable for Residential & Light Commercial"
    ],
    colors: [
      { name: "CL1821 - Glacier", image: `${BASE}images/CL1821.jpg` },
      { name: "CL1822 - Celtic", image: `${BASE}images/CL1822.jpg` },
      { name: "CL1823 - Hyland", image: `${BASE}images/CL1823.jpg` },
      { name: "CL1824 - Aurora", image: `${BASE}images/CL1824.jpg` },
      { name: "CL1825 - Mara", image: `${BASE}images/CL1825.jpg` },
      { name: "CL1826 - Teslin", image: `${BASE}images/CL1826.jpg` },
    ],
  },
];

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Site />
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 100);
  }, [pathname]);

  return null;
}

function Site() {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="site">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cl3" element={<SeriesPage seriesId="cl3" setSelectedColor={setSelectedColor} />} />
        <Route path="/wide-plank" element={<SeriesPage seriesId="wide" setSelectedColor={setSelectedColor} />} />
        <Route path="/standard" element={<SeriesPage seriesId="standard" setSelectedColor={setSelectedColor} />} />
        <Route path="/premium" element={<SeriesPage seriesId="premium" setSelectedColor={setSelectedColor} />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/visualizer" element={<VisualizerPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/flooring-supplier-bc" element={<FlooringSupplierBCPage />} />
        <Route path="/colour/:slug" element={<ColourDetailPage />} />
        <Route path="/spc-flooring-canada" element={<SpcLandingPage />} />
        <Route path="/vinyl-flooring-wholesale" element={<VinylWholesalePage />} />
        <Route path="/wholesale-flooring-bc" element={<SeoWholesaleBC />} />
      </Routes>

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

      <Footer />
    </div>
  );
}

function Header() {
  const navigate = useNavigate();

  const goCollections = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("collections")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };
  const goHome = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const allColours = useMemo(() => {
    return seriesData.flatMap((series) =>
      series.colors.map((color) => ({
        ...color,
        seriesName: series.name,
        slug: createSlug(color.name),
      }))
    );
  }, []);

  const searchResults = allColours.filter((color) =>
    color.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const openMenu = () => {
    setMenuClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuClosing(true);

    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
      setProductsOpen(false);
    }, 280);
  };

  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          <img src={`${BASE}images/logo.jpg`} />
        </Link>

        <nav>

          <Link onClick={goHome}>Home</Link>

          <div className="navDropdown">
            <button className="dropdownTrigger" onClick={goCollections}>
              Series ▾
            </button>

            <div className="dropdownMenu">
              <Link to="/cl3">Clivia Essential (6.5mm)</Link>
              <Link to="/wide-plank">Clivia Wide Plank (7mm)</Link>
              <Link to="/standard">Clivia Classic (7mm)</Link>
              <Link to="/premium">Clivia Premium (8mm)</Link>
            </div>
          </div>

          <Link to="/resources">Resources</Link>
          <Link to="/visualizer">Visualizer</Link>
          {/* <Link to="/blog">Blog</Link> */}
          <Link to="/contact">Contact</Link>
        </nav>
        <button
          className="searchIconBtn"
          onClick={() => setSearchOpen(true)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>

        {searchOpen && (
          <div className="searchOverlay">
            <div className="searchBox">
              <button
                className="searchClose"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchText("");
                }}
              >
                ×
              </button>

              <h2>Search Colours</h2>

              <input
                autoFocus
                type="text"
                placeholder="Search by colour name or code, e.g. CL1705"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <div className="searchResults">
                {searchText && searchResults.length === 0 && (
                  <p className="noResult">No matching colours found.</p>
                )}

                {searchText &&
                  searchResults.map((color) => (
                    <Link
                      key={color.name}
                      to={`/colour/${color.slug}`}
                      className="searchResultItem"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchText("");
                      }}
                    >
                      <img src={color.image} alt={color.name} />

                      <div>
                        <strong>{color.name}</strong>
                        <span>{color.seriesName}</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* <Link className="quoteBtn" to="/contact">
        Dealer Inquiry
      </Link> */}
        <button
          className="menuBtn"
          onClick={openMenu}
        >
          ☰
        </button>

      </header>

      {menuOpen && (
        <div className={`drawerMenuOverlay ${menuClosing ? "closing" : ""}`}
          onClick={closeMenu}>
          <div
            className={`drawerMenu ${menuClosing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawerMenuTop">
              <span>Menu</span>
              <button onClick={closeMenu}>×</button>
            </div>

            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  closeMenu();

                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }, 300);
                } else {
                  closeMenu();
                }
              }}
            >
              Home
            </Link>
            <button
              className="drawerDropdownTrigger"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span>Products</span>
              <span>{productsOpen ? "⌃" : "⌄"}</span>
            </button>

            {/* {productsOpen && (
              <div className="drawerSubMenu">
                <Link to="/cl3" onClick={() => setMenuOpen(false)}>
                  Essential (6.5mm)
                </Link>
                <Link to="/wide-plank" onClick={() => setMenuOpen(false)}>
                  Wide Plank Flooring (7mm)
                </Link>
                <Link to="/standard" onClick={() => setMenuOpen(false)}>
                  Classic Flooring (7mm)
                </Link>
                <Link to="/premium" onClick={() => setMenuOpen(false)}>
                  Premium Flooring (8mm)
                </Link>
              </div>
            )} */}

            <div className={`drawerSubMenu ${productsOpen ? "open" : ""}`}>
              <Link to="/cl3" onClick={closeMenu}>Essential 6.5mm</Link>
              <Link to="/wide-plank" onClick={closeMenu}>Wide Plank 7mm</Link>
              <Link to="/standard" onClick={closeMenu}>Classic 7mm</Link>
              <Link to="/premium" onClick={closeMenu}>Premium 8mm</Link>
            </div>


            <Link to="/resources" onClick={closeMenu}>Resources</Link>
            <Link to="/visualizer" onClick={closeMenu}>Room Visualizer</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/contact" onClick={closeMenu}>Order Samples</Link>
            <Link to="/contact" onClick={closeMenu}>Find a Dealer</Link>
          </div>
        </div>
      )}
    </>
  );
}

function Home() {
  const navigate = useNavigate();

  const goCollections = () => {
    document.getElementById("collections")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
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
            comfort, and performance — perfect for modern homes, renovations, light commercial spaces.
          </p>

          <div className="heroButtons">
            <button onClick={goCollections}>Explore Our Series</button>
            {/* <button className="outlineBtn" onClick={() => navigate("/contact")}>
              Dealer Inquiry
            </button> */}
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
                const routeMap = {
                  cl3: "/cl3",
                  wide: "/wide-plank",
                  standard: "/standard",
                  premium: "/premium",
                };

                navigate(routeMap[item.id]);
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
                <button>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function SeriesPage({ seriesId, setSelectedColor }) {
  const selectedSeries = seriesData.find((item) => item.id === seriesId);
  const navigate = useNavigate();

  if (!selectedSeries) return null;

  return (
    <section className="detailPage">
      <button
        className="back"
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            document.getElementById("collections")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 120);
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
          <Link
            key={color.name}
            to={`/colour/${createSlug(color.name)}`}
            state={{ color }}
            className="colorTile"
          >
            <img src={color.image} alt={color.name} />

            <div className="colorInfo">
              <h3>{color.name}</h3>
              <span className="detailsBtn">Details</span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

function ColourDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const allColours = seriesData.flatMap((series) =>
    series.colors.map((color) => ({
      ...color,
      seriesName: series.name,
      size: series.size,
      thickness: series.thickness,
      wear: series.wear,
      description: series.description,
      specs: series.specs,
      features: series.features,
    }))
  );

  const color = allColours.find((item) => createSlug(item.name) === slug);

  if (!color) {
    return (
      <section className="detailPage">
        <h1>Colour Not Found</h1>
        <Link to="/">Back Home</Link>
      </section>
    );
  }

  return (
    <section className="colourDetailPage">

      <div className="colourDetailHero luxuryDetailHero">
        <div>
          <p className="eyebrow">{color.seriesName}</p>
          <h1>{color.name}</h1>
          <p>
            A premium SPC flooring colour designed for modern homes, retail
            showrooms, builders, and project applications.
          </p>

          <Link className="quoteBtn" to="/contact">
            Request This Colour
          </Link>
        </div>

        <img src={color.image} alt={`${color.name} SPC flooring`} />
      </div>

      <div className="quickSpecs">
        <div>
          <span>Series</span>
          <strong>{color.seriesName}</strong>
        </div>
        <div>
          <span>Size</span>
          <strong>{color.size}</strong>
        </div>
        <div>
          <span>Thickness</span>
          <strong>{color.thickness}</strong>
        </div>
        <div>
          <span>Wear Layer</span>
          <strong>{color.wear}</strong>
        </div>
      </div>

      <section className="productStory">
        <p className="eyebrow">Product Overview</p>
        <h2>Built for everyday performance and showroom appeal.</h2>
        <p>
          {color.name} is part of the {color.seriesName} collection, offering durable,
          waterproof SPC flooring with a realistic wood look for residential and light
          commercial spaces.
        </p>
      </section>

      <section className="technicalSection">
        <div className="sectionHeading">
          <p className="eyebrow">Technical Specifications</p>
          <h2>Specifications</h2>
        </div>

        <div className="technicalGrid">
          <div>
            <span>Coverage</span>
            <strong>{color.specs?.sqft}</strong>
          </div>

          <div>
            <span>Weight</span>
            <strong>{color.specs?.weight}</strong>
          </div>

          <div>
            <span>Planks per Carton</span>
            <strong>{color.specs?.planks}</strong>
          </div>

          <div>
            <span>Cartons per Pallet</span>
            <strong>{color.specs?.pallet}</strong>
          </div>
        </div>
      </section>

      <section className="featuresSection">
        <div className="sectionHeading">
          <p className="eyebrow">Why Dealers Choose It</p>
          <h2>Features</h2>
        </div>

        <div className="featurePills">
          {color.features?.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <div className="detailBackArea">
          <button
            className="backBtn"
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}
          >
            ← View More Colours
          </button>
        </div>
      </section>

      <section className="detailCTA">
        <div>
          <h2>Need samples or dealer pricing?</h2>
          <p>
            Contact Clivia Floors for availability, pricing, display samples, and
            project support.
          </p>
        </div>

        <Link to="/contact">Contact Us</Link>
      </section>
    </section>
  );
}

function ResourcesPage() {
  return (
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
        <a className="resourceCard" href={`${BASE}resources/clivia_floors_specs.pdf`}
          download>
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
  );
}

function VisualizerPage() {
  const navigate = useNavigate();

  return (
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
          <button onClick={() => navigate("/contact")}>Get Early Access</button>
          <button className="lightBtn" onClick={() => navigate("/")}>
            Back Home
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="contactFormPage">
      <div className="contactFormHero">
        <p className="eyebrow">Contact Us</p>
        {/* <h1>Dealer Inquiry</h1> */}
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

          <input name="companyName" type="text" placeholder="Company Name" />
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
  );
}

function SeoSpcCanada() {
  return (
    <section className="resourcesPage">
      <div className="resourcesHero">
        <p className="eyebrow">SPC Flooring Canada</p>
        <h1>SPC Flooring Supplier in Canada</h1>
        <p>
          Clivia Floors supplies premium SPC flooring collections for retail stores,
          builders, contractors, and flooring dealers across Canada.
        </p>
      </div>
    </section>
  );
}

function SeoWholesaleBC() {
  return (
    <section className="resourcesPage">
      <div className="resourcesHero">
        <p className="eyebrow">Wholesale Flooring BC</p>
        <h1>Wholesale Flooring Distributor in British Columbia</h1>
        <p>
          Clivia Floors supports flooring retailers, contractors, and project buyers
          with SPC flooring supply in BC and across Canada.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div className="footerBrand">
          <img src={`${BASE}images/logo.jpg`} alt="Clivia Floors" />

          <p>
            Premium SPC flooring collections for modern homes.
          </p>

          <div className="socialLinks">
            <span>f</span>
            <a
              href="https://www.instagram.com/cliviafloors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ig
            </a>
            <span>in</span>
          </div>
        </div>

        <div>
          <h4>Collections</h4>
          <Link to="/cl3">CL3 Series</Link>
          <Link to="/wide-plank">7mm Wide Plank</Link>
          <Link to="/standard">7mm Standard</Link>
          <Link to="/premium">8mm Premium</Link>
        </div>

        <div>
          <h4>Resources</h4>
          <Link to="/resources">Spec Sheets</Link>
          <Link to="/resources">Installation Guide</Link>
          <Link to="/resources">Warranty</Link>
          <Link to="/visualizer">Visualizer</Link>
          <Link to="/spc-flooring-canada">SPC Flooring Canada</Link>
          <Link to="/vinyl-flooring-wholesale">Vinyl Flooring Wholesale</Link>
          <Link to="/flooring-supplier-bc">Flooring Supplier BC</Link>
        </div>

        <div className="footerContact">
          <h4>Contact</h4>
          <p>BC, Canada</p>
          <p>info@hrzfloors.com</p>
          <Link className="footerCTA" to="/contact">
            <span className="arrow">→</span>
            Dealer Inquiry
          </Link>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 Clivia Floors. All rights reserved.</p>
        <p>Wholesale SPC Flooring</p>
      </div>
    </footer>
  );
}

export default App;













// function App() {
//   const [page, setPage] = useState("home");
//   const selectedSeries = seriesData.find((item) => item.id === page);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const goPageTop = (pageName) => {
//     document.documentElement.style.scrollBehavior = "auto";
//     window.scrollTo(0, 0);
//     setPage(pageName);

//     setTimeout(() => {
//       document.documentElement.style.scrollBehavior = "smooth";
//     }, 100);
//   };
//   return (
//     <BrowserRouter>
//       <div className="site">
//         <header className="header">
//           <div
//             className="logo"
//             onClick={() => {
//               setPage("home");
//               setTimeout(() => {
//                 window.scrollTo({
//                   top: 0,
//                   behavior: "smooth",
//                 });
//               }, 100);
//             }}
//           >
//             <img src="/images/logo.jpg" alt="Clivia Floors" />
//           </div>

//           <nav>
//             <button
//               onClick={() => {
//                 setPage("home");
//                 setTimeout(() => {
//                   window.scrollTo({
//                     top: 0,
//                     behavior: "smooth",
//                   });
//                 }, 100);
//               }}
//             >
//               Home
//             </button>
//             <div className="navDropdown">
//               <button className="dropdownTrigger">Series ▾</button>

//               <div className="dropdownMenu">
//                 <button onClick={() => setPage("cl3")}>Clivia 6.5mm SPC 3 Series</button>

//                 <button onClick={() => setPage("wide")}>
//                   Clivia 7mm SPC 170 Series
//                 </button>

//                 <button onClick={() => setPage("standard")}>
//                   Clivia 7mm SPC 173 Series
//                 </button>

//                 <button onClick={() => setPage("premium")}>
//                   Clivia 8mm SPC 18 Series
//                 </button>
//               </div>
//             </div>
//             <button onClick={() => setPage("resources")}>Resources</button>
//             <button
//               onClick={() => {
//                 document.documentElement.style.scrollBehavior = "auto";
//                 window.scrollTo(0, 0);
//                 setPage("visualizer");

//                 setTimeout(() => {
//                   document.documentElement.style.scrollBehavior = "smooth";
//                 }, 100);
//               }}
//             >
//               Visualizer
//             </button>
//             <button onClick={() => setPage("contact")}>Contact</button>
//           </nav>

//           <button className="quoteBtn" onClick={() => setPage("contact")}>
//             Dealer Inquiry
//           </button>
//         </header>

//         {page === "home" && (
//           <>
//             <section className="luxuryHero">
//               <div className="heroOverlay">
//                 <p className="heroLabel">Premium SPC Flooring</p>

//                 <h1>
//                   Artistically Inspired.
//                   <br />
//                   Made for Life.
//                 </h1>

//                 <p className="heroText">
//                   Clivia SPC flooring combines stunning wood designs with durability,
//                   comfort, and performance — perfect for retail stores, builders, and
//                   modern homes.
//                 </p>

//                 <div className="heroButtons">
//                   <button
//                     onClick={() => {
//                       setPage("home");

//                       setTimeout(() => {
//                         document.getElementById("collections")?.scrollIntoView({
//                           behavior: "smooth",
//                           block: "start",
//                         });
//                       }, 100);
//                     }}
//                   >
//                     Explore Our Series
//                   </button>
//                   <button className="outlineBtn" onClick={() => setPage("contact")}>
//                     Dealer Inquiry
//                   </button>
//                 </div>
//               </div>
//             </section>

//             <section id="collections" className="luxuryCollections">
//               <p className="sectionLabel">Our Collections</p>
//               <h2>Find the Perfect Floor for Your Space</h2>
//               <p className="sectionSub">
//                 Explore our premium SPC flooring series, designed for style, strength,
//                 and everyday living.
//               </p>

//               <div className="luxuryGrid">
//                 {seriesData.map((item) => (
//                   <div
//                     className="luxuryCard"
//                     key={item.id}
//                     onClick={() => {
//                       document.documentElement.style.scrollBehavior = "auto";
//                       window.scrollTo(0, 0);
//                       setPage(item.id);

//                       setTimeout(() => {
//                         document.documentElement.style.scrollBehavior = "smooth";
//                       }, 100);
//                     }}
//                   >
//                     <div
//                       className="luxuryCardImage"
//                       style={{
//                         backgroundImage: `url(${item.colors?.[0]?.image || "/images/CL321.jpg"})`,
//                       }}
//                     ></div>

//                     <div className="luxuryCardText">
//                       <h3>{item.name}</h3>
//                       <p>
//                         {item.thickness} · {item.size}
//                       </p>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           document.documentElement.style.scrollBehavior = "auto";
//                           window.scrollTo(0, 0);
//                           setPage(item.id);

//                           setTimeout(() => {
//                             document.documentElement.style.scrollBehavior = "smooth";
//                           }, 100);
//                         }}
//                       >
//                         Explore
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </>
//         )}

//         {selectedSeries && (
//           <section className="detailPage">
//             <button
//               className="back"
//               onClick={() => {
//                 setPage("home");

//                 setTimeout(() => {
//                   document.getElementById("collections")?.scrollIntoView({
//                     behavior: "smooth",
//                   });
//                 }, 100);
//               }}
//             >
//               ← Back to Series
//             </button>

//             <div className="detailHero">
//               <h1>{selectedSeries.name}</h1>
//               <p>{selectedSeries.description}</p>
//             </div>

//             <div className="detailSpecs">
//               <div>
//                 <span>Size</span>
//                 <strong>{selectedSeries.size}</strong>
//               </div>

//               <div>
//                 <span>Thickness</span>
//                 <strong>{selectedSeries.thickness}</strong>
//               </div>

//               <div>
//                 <span>Wear Layer</span>
//                 <strong>{selectedSeries.wear}</strong>
//               </div>
//             </div>

//             <h2>Available Colours</h2>

//             <div className="colorGrid">
//               {selectedSeries.colors.map((color) => (
//                 <div
//                   className="colorTile"
//                   key={color.name}
//                   onClick={() => setSelectedColor(color)}
//                 >
//                   <img src={color.image} alt={color.name} />
//                   <h3>{color.name}</h3>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {page === "contact" && (
//           <section className="contactFormPage">
//             <div className="contactFormHero">
//               <p className="eyebrow">Contact Us</p>
//               <h1>Dealer Inquiry</h1>
//               <p>
//                 Fill out the form below and our team will contact you about pricing,
//                 samples, availability, and dealer support.
//               </p>
//             </div>

//             <form
//               className="dealerForm"
//               action="https://formspree.io/f/mzdyljbw"
//               method="POST"
//             >
//               <div className="formColumn">
//                 <h2>Your Contact Information</h2>

//                 <input name="firstName" type="text" placeholder="First Name *" required />
//                 <input name="lastName" type="text" placeholder="Last Name *" required />
//                 <input name="email" type="email" placeholder="Email *" required />
//                 <input name="phone" type="tel" placeholder="Phone Number" />
//                 <input name="province" type="text" placeholder="Province / State *" required />
//               </div>

//               <div className="formColumn">
//                 <h2>Company Contact Information</h2>

//                 <input name="companyName" type="text" placeholder="Company Name *" required />
//                 <input name="companyWebsite" type="text" placeholder="Company Website" />
//                 <input name="companyPhone" type="tel" placeholder="Company Phone Number" />
//               </div>

//               <textarea
//                 name="message"
//                 placeholder="Leave a quick message and we'll get back to you as soon as we are able. Thanks! :)"
//               ></textarea>

//               <button type="submit">Submit Inquiry</button>
//             </form>
//           </section>
//         )}
//         {selectedColor && (
//           <div className="modal" onClick={() => setSelectedColor(null)}>
//             <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//               <button className="closeBtn" onClick={() => setSelectedColor(null)}>
//                 ×
//               </button>

//               <img src={selectedColor.image} alt={selectedColor.name} />
//               <h2>{selectedColor.name}</h2>
//             </div>
//           </div>
//         )}
//         {page === "visualizer" && (
//           <section className="comingSoonPage">
//             <div className="comingSoonCard">
//               <p className="eyebrow">Clivia Innovation</p>

//               <h1>Room Visualizer</h1>

//               <h2>Coming Soon</h2>

//               <p>
//                 Upload your room photo and preview Clivia flooring colours instantly.
//                 Our next-generation flooring simulator is currently in development.
//               </p>

//               <div className="comingButtons">
//                 <button onClick={() => setPage("contact")}>
//                   Get Early Access
//                 </button>

//                 <button
//                   className="lightBtn"
//                   onClick={() => {
//                     setPage("home");

//                     setTimeout(() => {
//                       document.documentElement.style.scrollBehavior = "auto";
//                       window.scrollTo(0, 0);

//                       setTimeout(() => {
//                         document.documentElement.style.scrollBehavior = "smooth";
//                       }, 100);
//                     }, 50);
//                   }}
//                 >
//                   Back Home
//                 </button>
//               </div>
//             </div>
//           </section>
//         )}
//         {page === "resources" && (
//           <section className="resourcesPage">
//             <div className="resourcesHero">
//               <p className="eyebrow">Resources</p>
//               <h1>Product Documents & Guides</h1>
//               <p>
//                 Download Clivia Floors spec sheets, installation guides, warranty
//                 information, and product resources.
//               </p>
//             </div>

//             <div className="resourceGrid">
//               <a className="resourceCard" href="/resources/clivia_floors_specs.pdf" download>
//                 <h3>Spec Sheets</h3>
//                 <p>Product specifications, series details, carton information, and warranty data.</p>
//                 <span>Download PDF</span>
//               </a>

//               <a className="resourceCard" href="/resources/installation_guide.pdf" download>
//                 <h3>Installation Guide</h3>
//                 <p>Floating installation instructions and recommended installation practices.</p>
//                 <span>Download PDF</span>
//               </a>

//               <a className="resourceCard" href="/resources/warranty_information.pdf" download>
//                 <h3>Warranty Information</h3>
//                 <p>Residential and light commercial warranty information for Clivia flooring.</p>
//                 <span>Download PDF</span>
//               </a>
//             </div>
//           </section>
//         )}
//         <footer className="siteFooter">
//           <div className="footerGrid">
//             <div className="footerBrand">
//               <img src="/images/logo.jpg" alt="Clivia Floors" />
//               <p>
//                 Premium SPC flooring collections for retail stores, builders, and modern homes.
//               </p>

//               <div className="socialLinks">
//                 <span>f</span>
//                 <span>ig</span>
//                 <span>in</span>
//               </div>
//             </div>

//             <div>
//               <h4>Collections</h4>
//               <button onClick={() => goPageTop("cl3")}>CL3 Series</button>
//               <button onClick={() => goPageTop("wide")}>7mm Wide Plank</button>
//               <button onClick={() => goPageTop("standard")}>7mm Standard</button>
//               <button onClick={() => goPageTop("premium")}>8mm Premium</button>
//             </div>

//             <div>
//               <h4>Resources</h4>
//               <button onClick={() => setPage("resources")}>Spec Sheets</button>
//               <button onClick={() => setPage("resources")}>Installation Guide</button>
//               <button onClick={() => setPage("resources")}>Warranty</button>
//               <button
//                 onClick={() => {
//                   document.documentElement.style.scrollBehavior = "auto";
//                   window.scrollTo(0, 0);
//                   setPage("visualizer");

//                   setTimeout(() => {
//                     document.documentElement.style.scrollBehavior = "smooth";
//                   }, 100);
//                 }}
//               >
//                 Visualizer
//               </button>
//             </div>

//             <div className="footerContact">
//               <h4>Contact</h4>
//               <p>BC, Canada</p>
//               <p>info@hrzfloors.com</p>
//               <button className="footerCTA" onClick={() => setPage("contact")}>
//                 Dealer Inquiry
//               </button>
//             </div>
//           </div>

//           <div className="footerBottom">
//             <p>© 2026 Clivia Floors. All rights reserved.</p>
//             <p>Wholesale SPC Flooring</p>
//           </div>
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// function CL3Page({ seriesData, setSelectedColor }) {
//   const selectedSeries = seriesData.find((item) => item.id === "cl3");

//   return (
//     <section className="detailPage">
//       <div className="detailHero">
//         <h1>{selectedSeries.name}</h1>
//         <p>{selectedSeries.description}</p>
//       </div>

//       <div className="colorGrid">
//         {selectedSeries.colors.map((color) => (
//           <div
//             className="colorTile"
//             key={color.name}
//             onClick={() => setSelectedColor(color)}
//           >
//             <img src={color.image} alt={color.name} />
//             <h3>{color.name}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
