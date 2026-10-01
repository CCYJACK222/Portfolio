import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [mode, setMode] = useState<"developer" | "athlete">("developer");
  const mainRef = useRef<HTMLElement>(null);

  const isDeveloper = mode === "developer";

  useEffect(() => {
    const sections =
      mainRef.current?.querySelectorAll<HTMLElement>("section:not(.hero)");

    if (
      !sections ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();

      sections.forEach((section) => {
        section.classList.remove("reveal", "is-visible");
      });
    };
  }, [mode]);

  return (
    <div className={`portfolio ${mode}`}>
      <header className="navbar">
        <a className="name" href="#home">
          Jack Chow
        </a>

        <div className="mode-switch" aria-label="Portfolio mode">
          <button
            type="button"
            className={isDeveloper ? "selected" : ""}
            aria-pressed={isDeveloper}
            onClick={() => setMode("developer")}
          >
            ☀ Developer
          </button>

          <button
            type="button"
            className={!isDeveloper ? "selected" : ""}
            aria-pressed={!isDeveloper}
            onClick={() => setMode("athlete")}
          >
            ☾ Athlete
          </button>
        </div>
        <nav className="section-nav" aria-label="Page sections">
          {isDeveloper ? (
            <>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#resume">Contact & Resume</a>
            </>
          ) : (
            <>
              <a href="#athlete-profile">Profile & Stats</a>
              <a href="#highlights">Highlights</a>
              <a href="#athlete-story">My Story</a>
            </>
          )}
        </nav>
      </header>

      <main id="home" ref={mainRef}>
        <section className="hero" key={mode}>
          <div className="hero-copy">
            <p className="eyebrow">
              {isDeveloper
                ? "COMPUTER SCIENCE · CLASS OF 2027"
                : "SACRED HEART UNIVERSITY · NCAA DIVISION I"}
            </p>

            <h1>
              {isDeveloper ? (
                <>
                  Curious mind.
                  <br />
                  <span>Driven to build.</span>
                </>
              ) : (
                <>
                  Same drive.
                  <br />
                  <span>Different court.</span>
                </>
              )}
            </h1>

            <p className="intro">
              {isDeveloper
                ? "I'm Jack Chow, a computer science student at Sacred Heart University interested in software engineering, AI, and building useful products."
                : "I'm Jack Chow, a Division I men's volleyball player at Sacred Heart University. I'm an outside hitter who brings focus, teamwork, and energy to the court."}
            </p>

            <a
              className="primary-link"
              href={
                isDeveloper
                  ? "https://github.com/CCYJACK222"
                  : "mailto:jackchowpersonal@gmail.com"
              }
            >
              {isDeveloper ? "Explore my GitHub ↗" : "Get in touch ↗"}
            </a>
          </div>

          <div className={`hero-photo ${!isDeveloper ? "athlete-photo" : ""}`}>
            <img
              src={`${import.meta.env.BASE_URL}images/${
                isDeveloper ? "headshot.jpg" : "volleyball.jpg"
              }`}
              alt={isDeveloper ? "Jack Chow" : "Jack Chow playing volleyball"}
            />

            <span>
              {isDeveloper
                ? "Builder on and off the court."
                : "Sacred Heart University · Men’s Volleyball"}
            </span>
          </div>
        </section>

        {isDeveloper && (
          <section className="projects-section" id="projects">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Things I've been building.</h2>
              <p>
                Exploring software, AI, and practical problems through hands-on
                projects.
              </p>
            </div>

            <div className="project-grid">
              <article className="project-card">
                <span className="project-category">MOBILE APPLICATION</span>
                <h3>Ascendra</h3>
                <p>
                  A personal budgeting app for tracking transactions and
                  understanding spending, built with React Native and
                  TypeScript.
                </p>

                <ul className="tech-tags" aria-label="Ascendra technologies">
                  <li>React Native</li>
                  <li>TypeScript</li>
                  <li>Supabase</li>
                  <li>Expo</li>
                </ul>
              </article>

              <article className="project-card">
                <span className="project-category">AI DESKTOP APPLICATION</span>
                <h3>SidekickAI</h3>
                <p>
                  A desktop AI assistant with a 2D companion, chat, voice
                  interaction, and local memory for tasks and notes.
                </p>

                <ul className="tech-tags" aria-label="SidekickAI technologies">
                  <li>Electron</li>
                  <li>OpenAI API</li>
                  <li>JavaScript</li>
                </ul>
              </article>

              <article className="project-card">
                <span className="project-category">
                  SENIOR CAPSTONE · IN PROGRESS
                </span>
                <h3>Automated Optical Inspection</h3>
                <p>
                  Working with a five-person team on computer vision research
                  for inspecting circuit breaker panel components in a
                  Sikorsky-sponsored capstone.
                </p>

                <ul className="tech-tags" aria-label="Capstone focus areas">
                  <li>Python</li>
                  <li>Computer Vision</li>
                  <li>Image Processing</li>
                </ul>
              </article>
            </div>

            <a
              className="text-link"
              href="https://github.com/CCYJACK222"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub ↗
            </a>
          </section>
        )}

        {isDeveloper && (
          <section className="experience-section" id="experience">
            <div className="section-heading">
              <p className="eyebrow">EXPERIENCE</p>
              <h2>Learning through real work.</h2>
              <p>
                Applying my technical skills through internships, research, and
                collaboration.
              </p>
            </div>

            <div className="experience-list">
              <article className="experience-item">
                <div className="experience-meta">
                  <span>JUL — AUG 2026</span>
                  <span>Shenzhen, China</span>
                </div>

                <div className="experience-details">
                  <h3>AI Engineer Intern</h3>
                  <p className="experience-company">S.F. Express</p>

                  <ul>
                    <li>
                      Developed an AI calling system connecting speech
                      recognition, AI-generated responses, and speech synthesis.
                    </li>
                    <li>Benchmarked 15 services across ASR, LLM, and TTS.</li>
                    <li>
                      Reduced response latency from approximately 7 seconds to
                      1–3 seconds.
                    </li>
                  </ul>

                  <ul className="tech-tags" aria-label="Internship focus areas">
                    <li>ASR</li>
                    <li>LLMs</li>
                    <li>TTS</li>
                    <li>Benchmarking</li>
                  </ul>
                </div>
              </article>

              <article className="experience-item">
                <div className="experience-meta">
                  <span>AUG 2026</span>
                  <span>Fairfield, Connecticut</span>
                </div>

                <div className="experience-details">
                  <h3>Research Data Analyst</h3>
                  <p className="experience-company">
                    Sacred Heart University · School of Computing & Engineering
                  </p>

                  <p className="experience-description">
                    Supported a research project involving de-identified
                    movement data from UConn women’s basketball athletes, with a
                    focus on time-series analysis and athlete insights.
                  </p>

                  <ul className="tech-tags" aria-label="Research focus areas">
                    <li>Python</li>
                    <li>Data Analysis</li>
                    <li>Time-Series Data</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        )}
        {isDeveloper && (
          <>
            <section className="skills-section" id="skills">
              <div className="section-heading">
                <p className="eyebrow">MY TOOLKIT</p>
                <h2>Skills I build with.</h2>
              </div>

              <div className="skills-grid">
                <article className="skill-group">
                  <h3>Languages</h3>
                  <ul className="tech-tags">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>C</li>
                    <li>SQL</li>
                    <li>HTML / CSS</li>
                  </ul>
                </article>

                <article className="skill-group">
                  <h3>Frameworks & Libraries</h3>
                  <ul className="tech-tags">
                    <li>React</li>
                    <li>React Native</li>
                    <li>Expo</li>
                    <li>Flask</li>
                    <li>Pandas</li>
                    <li>Electron</li>
                  </ul>
                </article>

                <article className="skill-group">
                  <h3>Databases & Tools</h3>
                  <ul className="tech-tags">
                    <li>Supabase</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>SQLite</li>
                    <li>Git / GitHub</li>
                    <li>Clerk</li>
                  </ul>
                </article>
              </div>
            </section>

            <section className="education-section" id="education">
              <div className="section-heading">
                <p className="eyebrow">EDUCATION</p>
                <h2>Where I'm growing.</h2>
              </div>

              <article className="education-card">
                <div>
                  <p className="education-date">2023 — 2027</p>
                  <h3>Sacred Heart University</h3>
                  <p>Bachelor of Science in Computer Science</p>
                  <p className="education-detail">
                    Mathematics minor · Fairfield, Connecticut
                  </p>
                </div>

                <span className="education-badge">Class of 2027</span>
              </article>
            </section>

            <section className="resume-section" id="resume">
              <div>
                <p className="eyebrow">LET'S CONNECT</p>
                <h2>Want to know more?</h2>
                <p>
                  Get in touch to talk about my work, opportunities, or
                  something we could build together.
                </p>
              </div>

              <div className="resume-actions">
                <a
                  className="primary-link"
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View resume ↗
                </a>
                <a
                  className="primary-link"
                  href="mailto:jackchowpersonal@gmail.com"
                >
                  Email me ↗
                </a>

                <a
                  className="text-link"
                  href="https://www.linkedin.com/in/jack-chow-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </section>
          </>
        )}

        {!isDeveloper && (
          <>
            <section className="athlete-section" id="athlete-profile">
              <div className="section-heading">
                <p className="eyebrow">ON THE COURT</p>
                <h2>Jack Chow. Outside hitter.</h2>
                <p>
                  NCAA Division I men's volleyball at Sacred Heart University.
                  Bringing the same dedication to competition that I bring to
                  building and learning.
                </p>
              </div>

              <div className="athlete-stats">
                <article className="stat-card">
                  <p className="stat-value">6′3″</p>
                  <h3>Height</h3>
                  <p>190 cm</p>
                </article>

                <article className="stat-card">
                  <p className="stat-value">11′4″</p>
                  <h3>Jump reach</h3>
                  <p>345 cm</p>
                </article>

                <article className="stat-card">
                  <p className="stat-value">OH</p>
                  <h3>Position</h3>
                  <p>Outside hitter</p>
                </article>

                <article className="stat-card">
                  <p className="stat-value">D1</p>
                  <h3>Competition</h3>
                  <p>NCAA Division I</p>
                </article>
              </div>

              <p className="stats-note">
                Height and jump reach recorded May 2026.
              </p>
            </section>
            <section className="athlete-section" id="highlights">
              <div className="section-heading">
                <p className="eyebrow">GAME FOOTAGE</p>
                <h2>See me in action.</h2>
                <p>Volleyball highlights from the court.</p>
              </div>

              <div className="highlight-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/vUd_rFI5ccY"
                  title="Jack Chow volleyball highlights"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="video-links">
                <a
                  className="text-link"
                  href="https://www.youtube.com/watch?v=vUd_rFI5ccY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube ↗
                </a>

                <a
                  className="text-link"
                  href="https://www.youtube.com/@jackchow6376"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More videos on my channel ↗
                </a>
              </div>
            </section>
            <section className="athlete-section" id="athlete-story">
              <div className="section-heading">
                <p className="eyebrow">BEYOND THE NUMBERS</p>
                <h2>More than the game.</h2>
              </div>

              <div className="athlete-values">
                <article className="athlete-value">
                  <span className="value-number">01</span>
                  <h3>Discipline</h3>
                  <p>
                    Balancing training, competition, and a computer science
                    degree takes consistent effort and a commitment to
                    improving.
                  </p>
                </article>

                <article className="athlete-value">
                  <span className="value-number">02</span>
                  <h3>Teamwork</h3>
                  <p>
                    Volleyball means communicating, trusting teammates, and
                    working together toward a shared goal.
                  </p>
                </article>

                <article className="athlete-value">
                  <span className="value-number">03</span>
                  <h3>Growth</h3>
                  <p>
                    Every practice and match is another opportunity to learn,
                    adjust, and come back stronger.
                  </p>
                </article>
              </div>
            </section>

            <section className="resume-section">
              <div>
                <p className="eyebrow">LET'S CONNECT</p>
                <h2>Talk volleyball with me.</h2>
                <p>
                  Reach out to connect or learn more about my experience as a
                  student athlete.
                </p>
              </div>

              <div className="resume-actions">
                <a
                  className="primary-link"
                  href="mailto:jackchowpersonal@gmail.com"
                >
                  Get in touch ↗
                </a>
              </div>
            </section>
          </>
        )}
      </main>

      <footer>
        <span>Jack Chow</span>
        <span>Developer. Athlete. Always learning.</span>
      </footer>
    </div>
  );
}

export default App;
