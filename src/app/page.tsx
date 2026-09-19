const expertise = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    description:
      "Building responsive, accessible and functional web experiences.",
  },
  {
    number: "02",
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Turning ideas and problems into structured software solutions.",
  },
  {
    number: "03",
    title: "LINUX & SYSTEMS",
    description:
      "Working with Linux environments, the command line, permissions and system fundamentals.",
  },
  {
    number: "04",
    title: "NETWORKING",
    description:
      "Learning how devices, applications and services communicate across networks.",
  },
  {
    number: "05",
    title: "WEB SECURITY",
    description:
      "Exploring web vulnerabilities, defensive thinking and the security behind applications.",
  },
  {
    number: "06",
    title: "UI / UX",
    description:
      "Designing interfaces that are clear, intentional and easy to use.",
  },
];

const qualities = [
  {
    title: "CURIOSITY",
    quote:
      "I want to understand what’s happening underneath, not just whether it works.",
  },
  {
    title: "PERSISTENCE",
    quote:
      "If something breaks, I want to understand why before I move on.",
  },
  {
    title: "PROBLEM SOLVING",
    quote:
      "I prefer understanding the problem properly before deciding how to solve it.",
  },
  {
    title: "ATTENTION TO DETAIL",
    quote:
      "I notice the small things, especially when they affect how something works or feels.",
  },
  {
    title: "ADAPTABILITY",
    quote:
      "I’m comfortable changing my approach when I find a better one.",
  },
];

const playground = [
  {
    title: "C",
    description: "Small programs, algorithms and experiments.",
  },
  {
    title: "LINUX",
    description: "Commands, systems, permissions and environment exploration.",
  },
  {
    title: "SECURITY",
    description:
      "Labs and exercises as I develop my cybersecurity skills.",
  },
  {
    title: "EXPERIMENTS",
    description:
      "Things I build simply because I want to understand how they work.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Emma Dasilva, back to top">
            ED / 26
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#expertise">EXPERTISE</a>
            <a href="#playground">PLAYGROUND</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </header>

        <div className="hero-content">
          <div className="hero-kicker">
            <span>SOFTWARE DEVELOPER</span>
            <span>CYBERSECURITY STUDENT</span>
            <span>COTONOU, BENIN</span>
          </div>

          <h1 className="hero-name" aria-label="Emma Dasilva">
            <span>EMMA</span>
            <span>DASILVA</span>
          </h1>

          <div className="hero-footer">
            <p>
              Building software while learning how systems work, communicate
              and stay secure.
            </p>
            <a href="#about" className="scroll-link">
              EXPLORE ↓
            </a>
          </div>
        </div>
      </section>

      <section className="section section-about" id="about">
        <div className="section-meta">
          <span>01</span>
          <span>ABOUT</span>
        </div>

        <div className="about-grid">
          <h2 className="section-title">ABOUT ME</h2>

          <div className="about-copy">
            <p>
              I’m Emma, a software developer and cybersecurity student based in
              Cotonou.
            </p>
            <p>
              I started programming because I wanted to understand how the
              digital things I used every day were actually built. What began
              with websites gradually became an interest in software, systems,
              Linux, networks and security.
            </p>
            <p>
              I like building things that are useful, functional and
              thoughtfully designed. But I’m also interested in what happens
              behind the interface: how systems work, how they communicate,
              where things can go wrong and how they can be made more secure.
            </p>
            <p>
              Today, I’m developing my skills across both software development
              and cybersecurity. I don’t see them as completely separate paths.
              I want to understand technology from both sides: how to build it
              and how to protect it.
            </p>
            <p>
              I’m still learning, experimenting and becoming a better developer
              with every project I take on.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-work" id="work">
        <div className="section-meta">
          <span>02</span>
          <span>WORK</span>
        </div>

        <div className="section-heading-row">
          <h2 className="section-title">SELECTED WORK</h2>
          <p className="section-intro">
            A selection of projects, experiments and ideas I’ve turned into
            working products.
          </p>
        </div>

        <article className="project">
          <div className="project-index">01</div>

          <div className="project-main">
            <p className="project-type">CYBERSECURITY PROJECT</p>
            <h3>BANDIT REDLINE</h3>
            <p className="project-description">
              A cybersecurity learning project documenting my progress through
              OverTheWire Bandit while developing practical skills in Linux,
              SSH, permissions, file handling and command-line problem solving.
            </p>
          </div>

          <dl className="project-details">
            <div>
              <dt>ROLE</dt>
              <dd>Cybersecurity Learning / Documentation</dd>
            </div>
            <div>
              <dt>TECHNOLOGIES</dt>
              <dd>Linux / Bash / SSH</dd>
            </div>
          </dl>

          <a className="project-link" href="#playground">
            VIEW PROJECT <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>

      <section className="section section-expertise" id="expertise">
        <div className="section-meta">
          <span>03</span>
          <span>EXPERTISE</span>
        </div>

        <h2 className="section-title expertise-title">WHAT I WORK WITH</h2>

        <div className="expertise-list">
          {expertise.map((item) => (
            <article className="expertise-item" key={item.number}>
              <span className="item-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-qualities">
        <div className="section-meta">
          <span>04</span>
          <span>QUALITIES</span>
        </div>

        <h2 className="section-title">HOW I WORK</h2>

        <div className="qualities-list">
          {qualities.map((quality, index) => (
            <article className="quality" key={quality.title}>
              <span className="item-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{quality.title}</h3>
              <p>“{quality.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-playground" id="playground">
        <div className="section-meta">
          <span>05</span>
          <span>PLAYGROUND</span>
        </div>

        <div className="section-heading-row playground-heading">
          <h2 className="section-title">MY DIGITAL PLAYGROUND</h2>
          <div className="section-intro">
            <p>Not everything I build needs to become a finished project.</p>
            <p>
              This is where I experiment, test ideas, learn new tools and
              explore the technical things that interest me.
            </p>
          </div>
        </div>

        <div className="playground-list">
          {playground.map((item, index) => (
            <article className="playground-item" key={item.title}>
              <span className="item-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="playground-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <footer className="section contact" id="contact">
        <div className="section-meta">
          <span>06</span>
          <span>CONTACT</span>
        </div>

        <h2 className="contact-title">
          LET’S BUILD
          <br />
          SOMETHING.
        </h2>

        <div className="contact-grid">
          <p>
            I’m open to opportunities, collaborations and conversations with
            people building interesting things.
          </p>

          <div className="contact-actions">
            <span className="email-placeholder">DROP ME AN EMAIL ↗</span>

            <div className="socials" aria-label="Social links">
              <a
                href="https://github.com/emma-dasilva-dev"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB ↗
              </a>
              <span>LINKEDIN ↗</span>
              <span>INSTAGRAM ↗</span>
            </div>
          </div>
        </div>

        <div className="footer-line">
          <span>EMMA DASILVA</span>
          <span>COTONOU</span>
          <span>2026</span>
        </div>
      </footer>
    </main>
  );
}
