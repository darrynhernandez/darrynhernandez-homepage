import { useEffect, useState } from "react";
import {
  experience,
  impactMetrics,
  leadership,
  metrics,
} from "./data";
import portrait from "../darryn-portrait.jpg";

const linkedInUrl = "https://www.linkedin.com/in/darryn-hernandez";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function LinkedInButton({ light = false, compact = false }) {
  return (
    <a
      className={`button${light ? " button--light" : ""}${compact ? " button--compact" : ""}`}
      href={linkedInUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Connect with Darryn Hernandez on LinkedIn"
    >
      Connect on LinkedIn
      <ArrowIcon />
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={closeMenu}>
          Darryn Hernandez
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="site-nav" className={`site-nav${menuOpen ? " is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
          <LinkedInButton compact />
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ label, children }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <div>{children}</div>
    </div>
  );
}

function Hero() {
  return (
    <main id="top">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Public-sector transformation leader</p>
          <div className="hero-grid">
            <div className="hero-content">
              <h1>
                Complex programs.
                <em>Clear direction.</em>
                Lasting public impact.
              </h1>
              <p className="hero-copy">
                I lead large-scale tax and revenue modernization programs from
                definition through rollout, production, and long-term support,
                aligning teams, stakeholders, and execution across complex
                environments.
              </p>
              <div className="hero-actions">
                <LinkedInButton />
                <a className="text-link" href="#experience">
                  Explore experience
                  <ArrowIcon />
                </a>
              </div>
            </div>
            <figure className="portrait">
              <div className="portrait-frame">
                <img
                  src={portrait}
                  alt="Darryn Hernandez, program leader in government transformation"
                  width="1365"
                  height="2048"
                  fetchPriority="high"
                />
              </div>
              <figcaption>
                Darryn Hernandez · Program Leader in Government Transformation
              </figcaption>
            </figure>
          </div>
          <div className="hero-metrics">
            {metrics.map((metric) => (
              <div className="hero-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <SectionHeading label="About">
            <h2>Leadership built for complexity.</h2>
            <div className="about-copy">
              <p>
                Over nearly two decades, I’ve led large-scale tax system
                implementations across city, state, and national jurisdictions.
              </p>
              <p>
                My focus is turning complex programs into clear plans, aligned
                teams, and reliable execution, improving operations and
                outcomes for organizations and the citizens they serve.
              </p>
            </div>
            <blockquote>
              Structure, clarity, and ownership are what move difficult
              programs forward.
            </blockquote>
          </SectionHeading>
          <div className="impact-grid">
            {impactMetrics.map((metric) => (
              <div className="impact-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <SectionHeading label="Experience">
            <h2>Experience &amp; impact across jurisdictions.</h2>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.date}-${item.organization}`}>
                  <time>{item.date}</time>
                  <div>
                    <h3>{item.role} <span>|</span> {item.organization}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </SectionHeading>
        </div>
      </section>

      <section className="section" id="leadership">
        <div className="container">
          <SectionHeading label="Leadership">
            <h2>How I lead.</h2>
            <div className="leadership-grid">
              {leadership.map((item) => (
                <article className="leadership-card" key={item.number}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </SectionHeading>
        </div>
      </section>

      <section className="closing">
        <div className="container">
          <h2>Transformation succeeds when people can see the path forward.</h2>
          <div className="closing-row">
            <p>
              I help organizations bring clarity, alignment, and disciplined
              execution to their most consequential programs.
            </p>
            <div className="closing-action">
              <LinkedInButton light />
              <span>linkedin.com/in/darryn-hernandez</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>Darryn Hernandez · Government Transformation &amp; Program Leadership</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
