import Experience from "@/components/Experience";

const expertise = [
  ["WEB DEVELOPMENT", "Building responsive, accessible and functional web experiences."],
  ["SOFTWARE DEVELOPMENT", "Turning ideas and problems into structured software solutions."],
  ["LINUX & SYSTEMS", "Working with Linux environments, the command line, permissions and system fundamentals."],
  ["NETWORKING", "Learning how devices, applications and services communicate across networks."],
  ["WEB SECURITY", "Exploring web vulnerabilities, defensive thinking and the security behind applications."],
  ["UI / UX", "Designing interfaces that are clear, intentional and easy to use."],
];

const qualities = [
  ["CURIOSITY", "I want to understand what’s happening underneath, not just whether it works."],
  ["PERSISTENCE", "If something breaks, I want to understand why before I move on."],
  ["PROBLEM SOLVING", "I prefer understanding the problem properly before deciding how to solve it."],
  ["ATTENTION TO DETAIL", "I notice the small things, especially when they affect how something works or feels."],
  ["ADAPTABILITY", "I’m comfortable changing my approach when I find a better one."],
];

const playground = [
  ["C", "Small programs, algorithms and experiments."],
  ["LINUX", "Commands, systems, permissions and environment exploration."],
  ["SECURITY", "Labs and exercises as I develop my cybersecurity skills."],
  ["EXPERIMENTS", "Things I build simply because I want to understand how they work."],
];

export default function Home() {
  return (
    <>
      <Experience />
      <main className="site-content">
        <section className="hero" id="top">
          <header className="site-header">
            <a className="brand-mark" href="#top" aria-label="Emma Dasilva, back to top">
              ED
            </a>

            <nav className="desktop-nav" aria-label="Primary navigation">
              <a href="#work">WORK</a>
              <a href="#about">ABOUT</a>
              <a href="#expertise">EXPERTISE</a>
              <a href="#playground">PLAYGROUND</a>
              <a href="#contact">CONTACT</a>
            </nav>

            <span className="header-year">2026</span>
          </header>

          <div className="hero-stage">
            <div className="hero-title-mask">
              <h1 className="hero-name">EMMA DASILVA</h1>
            </div>

            <div className="hero-descriptor">
              <span className="hero-arrow" aria-hidden="true">↘</span>
              <p>
                SOFTWARE DEVELOPER &amp; CYBERSECURITY STUDENT
                <br />
                BASED IN COTONOU
              </p>
            </div>
          </div>

          <a className="scroll-orbit" href="#about" aria-label="Scroll to about section">
            <span>↓</span>
            <span>SCROLL</span>
          </a>
        </section>

        <section className="section intro-section" id="about">
          <div className="section-label">ABOUT ME</div>

          <div className="intro-grid">
            <p className="intro-lead">
              I’m Emma, a software developer and cybersecurity student based in Cotonou.
            </p>

            <div className="intro-copy">
              <p>
                I started programming because I wanted to understand how the digital things I used every day were actually built. What began with websites gradually became an interest in software, systems, Linux, networks and security.
              </p>
              <p>
                I like building things that are useful, functional and thoughtfully designed. But I’m also interested in what happens behind the interface: how systems work, how they communicate, where things can go wrong and how they can be made more secure.
              </p>
              <p>
                Today, I’m developing my skills across both software development and cybersecurity. I don’t see them as completely separate paths. I want to understand technology from both sides: how to build it and how to protect it.
              </p>
              <p>
                I’m still learning, experimenting and becoming a better developer with every project I take on.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <div className="section-label">EXPERTISE</div>

          <div className="editorial-list">
            {expertise.map(([title, description], index) => (
              <article className="editorial-row expertise-item" key={title}>
                <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-head">
            <span className="section-label">RECENT WORK</span>
            <span className="section-count">01 PROJECT</span>
          </div>

          <article className="project">
            <div className="project-topline">
              <span>01</span>
              <span>CYBERSECURITY / PERSONAL</span>
              <span>2026</span>
            </div>

            <div className="project-title-wrap">
              <h2>BANDIT REDLINE</h2>
            </div>

            <div className="project-bottom">
              <p>
                Documenting my progress through OverTheWire Bandit while developing practical skills in Linux, SSH, permissions, file handling and command-line problem solving.
              </p>

              <div className="project-meta">
                <span>LINUX</span>
                <span>BASH</span>
                <span>SSH</span>
              </div>

              <a href="#playground">VIEW PROJECT ↗</a>
            </div>
          </article>
        </section>

        <section className="section" id="qualities">
          <div className="section-label">HOW I WORK</div>

          <div className="editorial-list qualities-list">
            {qualities.map(([title, quote], index) => (
              <article className="editorial-row quality" key={title}>
                <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{title}</h2>
                <p>“{quote}”</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section playground-section" id="playground">
          <div className="playground-intro">
            <span className="section-label">PLAYGROUND</span>
            <div>
              <p>Not everything I build needs to become a finished project.</p>
              <p>
                This is where I experiment, test ideas, learn new tools and explore the technical things that interest me.
              </p>
            </div>
          </div>

          <div className="editorial-list playground-list">
            {playground.map(([title, description], index) => (
              <article className="editorial-row playground-item" key={title}>
                <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <footer className="contact" id="contact">
          <div className="contact-top">
            <span>INTERESTED IN WORKING TOGETHER?</span>
            <span>COTONOU / 2026</span>
          </div>

          <div className="contact-main">
            <p>DROP ME AN EMAIL!</p>
          </div>

          <div className="contact-bottom">
            <div className="socials">
              <a href="https://github.com/emma-dasilva-dev" target="_blank" rel="noreferrer">GITHUB</a>
              <span>LINKEDIN</span>
              <span>INSTAGRAM</span>
            </div>
            <span>EMMA DASILVA</span>
          </div>
        </footer>
      </main>
    </>
  );
}
