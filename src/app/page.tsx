const skills = [
  "HTML / CSS",
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "MySQL",
  "C",
  "Linux / Bash",
  "Git / GitHub",
  "Networking fundamentals",
  "Web security",
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="logo" href="#top">EMMA DASILVA</a>
        <nav aria-label="Primary navigation">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE DEVELOPMENT × CYBERSECURITY</p>
          <h1>
            I build useful software
            <span>and learn how to secure it.</span>
          </h1>
          <p className="hero-intro">
            I’m Emma, a software developer and cybersecurity student based in Cotonou.
            I’m interested in building clean digital products and understanding the systems behind them.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">VIEW MY WORK</a>
            <a className="button secondary" href="#contact">CONTACT ME</a>
          </div>
        </div>

        <div className="hero-note">
          <span>BASED IN</span>
          <strong>COTONOU, BENIN</strong>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-heading">
          <p>01 / ABOUT</p>
          <h2>Building and understanding.</h2>
        </div>

        <div className="about-copy">
          <p>
            I started programming because I wanted to understand how the digital things I used every day were actually built.
            What began with websites gradually became an interest in software, systems, Linux, networks and security.
          </p>
          <p>
            Today, I’m developing my skills across both software development and cybersecurity.
            I want to understand technology from both sides: how to build it and how to protect it.
          </p>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p>02 / FEATURED WORK</p>
          <h2>Bandit Redline</h2>
        </div>

        <article className="project-card">
          <div className="project-copy">
            <div className="project-meta">
              <span>CYBERSECURITY</span>
              <span>2026</span>
            </div>
            <p>
              A cybersecurity learning project documenting my progress through OverTheWire Bandit while developing practical skills in Linux, SSH, permissions, file handling and command-line problem solving.
            </p>
          </div>

          <div className="project-stack">
            <span>LINUX</span>
            <span>BASH</span>
            <span>SSH</span>
          </div>

          <a href="#skills">VIEW PROJECT ↗</a>
        </article>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p>03 / SKILLS</p>
          <h2>What I work with.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="contact-label">04 / CONTACT</p>
          <h2>Let’s build something useful.</h2>
          <p>
            I’m open to opportunities, collaborations and conversations with people building interesting things.
          </p>
        </div>

        <div className="contact-links">
          <span>EMAIL ↗</span>
          <a href="https://github.com/emma-dasilva-dev" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <span>LINKEDIN ↗</span>
          <span>INSTAGRAM ↗</span>
        </div>
      </section>

      <footer>
        <span>EMMA DASILVA</span>
        <span>COTONOU</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
