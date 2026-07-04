import { capabilities, navItems, selectedWork } from "./data.js";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="site-name" href="#top" aria-label="Back to top">
        Ahita是一只哈士奇
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src={import.meta.env.BASE_URL + "images/husky-hero.png"}
          alt="A Siberian Husky with icy blue eyes"
        />
      </div>
      <div className="hero-copy">
        <h1>我无所不能</h1>
        <p>
          A personal capability system for turning complexity into clear work,
          useful products, and memorable outcomes.
        </p>
        <a className="primary-action" href="#work">
          View selected work <ArrowIcon />
        </a>
      </div>
      <div className="hero-caption">
        <span>Identity</span>
        <span>Clarity</span>
        <span>Momentum</span>
      </div>
    </section>
  );
}

function CapabilityMap() {
  return (
    <section className="section capability-section" id="about">
      <div className="section-head">
        <h2>Built for clear movement.</h2>
        <p>
          The husky sets the tone: alert, focused, energetic, and composed.
          The rest of the site translates that feeling into professional proof.
        </p>
      </div>
      <div className="capability-grid">
        {capabilities.map((item, index) => (
          <article className="capability-item" key={item.title}>
            <span className="item-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="section work-section" id="work">
      <div className="section-head">
        <h2>Selected Work</h2>
        <p>
          Replace these with real projects, screenshots, links, and outcomes as
          the portfolio becomes more specific.
        </p>
      </div>
      <div className="work-list">
        {selectedWork.map((work) => (
          <article className="work-row" key={work.title}>
            <div>
              <span>{work.type}</span>
              <h3>{work.title}</h3>
            </div>
            <p>{work.summary}</p>
            <a href="mailto:hello@example.com" aria-label={`Discuss ${work.title}`}>
              <ArrowIcon />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div>
        <h2>Let's make the next thing unmistakable.</h2>
        <p>Replace this with your preferred email, social links, or booking path.</p>
      </div>
      <a className="primary-action" href="mailto:hello@example.com">
        hello@example.com <ArrowIcon />
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <CapabilityMap />
      <SelectedWork />
      <Contact />
    </main>
  );
}
