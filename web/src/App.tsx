import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [mode, setMode] = useState<"developer" | "athlete">("developer");

  const isDeveloper = mode === "developer";

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
      </header>

      <main id="home">
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

          {isDeveloper && (
            <div className="hero-photo">
              <img
                src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
                alt="Jack Chow"
                width="4020"
                height="6024"
              />
              <span>Builder on and off the court.</span>
            </div>
          )}
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
      </main>

      <footer>
        <span>Jack Chow</span>
        <span>Developer. Athlete. Always learning.</span>
      </footer>
    </div>
  );
}

export default App;
