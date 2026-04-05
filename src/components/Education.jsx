import './Education.css';

const educationData = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Your University Name',
    duration: '2024 – 2028',
    status: 'Currently Pursuing',
    year: '2nd Year',
    description:
      'Pursuing a comprehensive Computer Science degree with focus on software development, data structures, algorithms, and systems programming. Committed to academic excellence while building real-world projects.',
    courses: [
      'Data Structures & Algorithms',
      'Object Oriented Programming (C++)',
      'Computer Networks',
      'Database Management Systems',
      'Operating Systems',
      'Discrete Mathematics',
    ],
    highlights: [
      'Try To Solve Problem Daily Basis in DSA',
      'Building full-stack web apps',
      'Active GitHub contributions',
      'Consistent unit test preparation',
    ],
    icon: '🎓',
    color: 'var(--accent-primary)',
  },
];

const focusAreas = [
  { icon: '🧩', title: 'Data Structures', desc: 'Arrays, LL, Trees, Graphs, Heaps' },
  { icon: '⚡', title: 'Algorithms', desc: 'Sorting, Searching, DP, Greedy' },
  { icon: '🌐', title: 'Web Development', desc: 'React, Node.js, Express, MongoDB' },
  { icon: '🔐', title: 'System Design', desc: 'APIs, Auth, Cloud, Scaling basics' },
  { icon: '📐', title: 'CS Fundamentals', desc: 'OS, DBMS, CN, OOP' },
  { icon: '💡', title: 'Problem Solving', desc: 'LeetCode, logic, debugging' },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            Education
          </span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Building a solid CS foundation while constantly applying concepts through hands-on projects.
          </p>
        </div>

        <div className="education__content">
          {/* Main card */}
          {educationData.map(edu => (
            <div className="education__card" key={edu.id} id={`education-${edu.id}`}>
              <div className="education__card-left">
                <div className="education__icon-wrapper">
                  <span className="education__degree-icon">{edu.icon}</span>
                </div>
                <div className="education__timeline-line"></div>
              </div>

              <div className="education__card-right">
                <div className="education__card-header">
                  <div>
                    <span className="education__status">
                      <span className="education__status-dot"></span>
                      {edu.status}
                    </span>
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__institution">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="education__meta">
                    <div className="education__duration">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {edu.duration}
                    </div>
                    <div className="education__year-badge">{edu.year}</div>
                  </div>
                </div>

                <p className="education__description">{edu.description}</p>

                <div className="education__details">
                  <div className="education__detail-block">
                    <h4 className="education__detail-title">📚 Core Courses</h4>
                    <div className="education__courses">
                      {edu.courses.map(c => (
                        <span className="education__course" key={c}>{c}</span>
                      ))}
                    </div>
                  </div>

                  <div className="education__detail-block">
                    <h4 className="education__detail-title">✨ Key Highlights</h4>
                    <ul className="education__highlights-list">
                      {edu.highlights.map(h => (
                        <li key={h}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Focus areas */}
          <div className="education__focus">
            <h3 className="education__focus-title">Current Learning Focus</h3>
            <div className="education__focus-grid">
              {focusAreas.map(area => (
                <div className="education__focus-card" key={area.title}>
                  <span className="education__focus-icon">{area.icon}</span>
                  <h4 className="education__focus-name">{area.title}</h4>
                  <p className="education__focus-desc">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
