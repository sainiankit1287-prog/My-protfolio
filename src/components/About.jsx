import './About.css';

const highlights = [
  { icon: '⚡', label: 'Try To Solve Problem Daily Basis', desc: 'DSA Practice' },
  { icon: '🎯', label: 'Focused', desc: 'Problem Solver' },
  { icon: '🚀', label: 'Builder', desc: 'Full-Stack Apps' },
  { icon: '📚', label: 'Learner', desc: 'Always Growing' },
];

const qualities = [
  'Strong foundation in Data Structures & Algorithms',
  'Building production-ready RESTful APIs with Node.js',
  'Creating responsive UIs with modern web tech',
  'Active GitHub contributor with documented projects',
  'Excellent debugging and logical thinking skills',
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__left">
            <div className="about__image-wrapper">
              <div className="about__image-bg"></div>
              <div className="about__image">
                <div className="about__image-inner">
                  <div className="about__avatar-text">AKS</div>
                  <div className="about__gpa-badge">
                    <span className="about__gpa-icon">🎓</span>
                    <span>B.Tech CSE</span>
                    <span className="about__gpa-year">2nd Year</span>
                  </div>
                </div>
              </div>

              {/* Stats around */}
              <div className="about__stat-card about__stat-card--1">
                <span className="about__stat-icon">💻</span>
                <div>
                  <div className="about__stat-num">4h+</div>
                  <div className="about__stat-text">Daily Coding</div>
                </div>
              </div>

              <div className="about__stat-card about__stat-card--2">
                <span className="about__stat-icon">🏆</span>
                <div>
                  <div className="about__stat-num">3+</div>
                  <div className="about__stat-text">Projects</div>
                </div>
              </div>

              <div className="about__code-snippet">
                <span className="code-kw">while</span>(<span className="code-var">true</span>) {'{'} <br />
                &nbsp; <span className="code-fn">learn</span>(); <br />
                &nbsp; <span className="code-fn">build</span>(); <br />
                &nbsp; <span className="code-fn">grow</span>(); <br />
                {'}'}
              </div>
            </div>
          </div>

          <div className="about__right">
            <span className="section-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              About Me
            </span>

            <h2 className="section-title">
              Passionate Developer,<br />Dedicated Learner
            </h2>
            <div className="divider"></div>

            <p className="about__bio">
              I'm <strong>Ankit Kumar Saini</strong>, a B.Tech Computer Science student with an unwavering
              passion for software development and problem-solving. My journey started with curiosity
              about how things work, and it evolved into a deep love for writing clean, efficient code.
            </p>

            <p className="about__bio">
              Currently, I'm building a strong foundation in <span className="highlight-text">Data Structures &
              Algorithms</span>, <span className="highlight-text">Backend Development</span>, and
              <span className="highlight-text"> Full-Stack Web Development</span>. I dedicate over
              4 hours every day to DSA practice and love turning complex problems into elegant solutions.
            </p>

            <ul className="about__qualities">
              {qualities.map((q, i) => (
                <li key={i} className="about__quality">
                  <span className="about__quality-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {q}
                </li>
              ))}
            </ul>

            <div className="about__highlights">
              {highlights.map(h => (
                <div className="about__highlight-card" key={h.desc}>
                  <span className="about__highlight-icon">{h.icon}</span>
                  <span className="about__highlight-label">{h.label}</span>
                  <span className="about__highlight-desc">{h.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
