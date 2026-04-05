import './Achievements.css';

const achievements = [
  {
    id: 'dsa-practice',
    icon: '⚡',
    title: 'Consistent DSA Practice',
    subtitle: 'Try To Solve Problem Daily Basis',
    description:
      'Dedicated to solving DSA problems on a daily basis. Covers arrays, linked lists, trees, graphs, dynamic programming, and more in C++.',
    metric: '📅',
    metricLabel: 'Solve Daily',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    tags: ['C++', 'DSA', 'Discipline'],
  },
  {
    id: 'backend-apis',
    icon: '🚀',
    title: 'Backend API Development',
    subtitle: 'Production-Ready Projects',
    description:
      'Built multiple production-grade RESTful APIs using Node.js, Express, MongoDB, Multer, and Cloudinary with JWT authentication and role-based access control.',
    metric: '3+',
    metricLabel: 'APIs Built',
    gradient: 'linear-gradient(135deg, #059669, #06b6d4)',
    tags: ['Node.js', 'REST API', 'Auth'],
  },
  {
    id: 'debugging',
    icon: '🔍',
    title: 'Strong Debugging Skills',
    subtitle: 'Systematic Problem Solving',
    description:
      'Developed excellent debugging skills through extensive practice — identifying root causes, analyzing stack traces, and resolving complex logical errors efficiently.',
    metric: '∞',
    metricLabel: 'Bugs Fixed',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    tags: ['Debugging', 'Logic', 'Analysis'],
  },
  {
    id: 'notes',
    icon: '📚',
    title: 'Academic Note Preparation',
    subtitle: 'Organized & Structured Learning',
    description:
      'Maintains detailed, well-organized academic notes for DSA topics, computer networks, DBMS, and other CS subjects to reinforce learning and aid revision.',
    metric: '100+',
    metricLabel: 'Topics Documented',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    tags: ['CS Theory', 'Notes', 'Revision'],
  },

  {
    id: 'communication',
    icon: '💬',
    title: 'Technical Communication',
    subtitle: 'Code & Clarity',
    description:
      'Capable of clearly explaining technical concepts, writing clean code comments, creating project documentation, and communicating solutions effectively.',
    metric: '3+',
    metricLabel: 'Projects Documented',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    tags: ['Documentation', 'Communication', 'GitHub'],
  },
];

const stats = [
  { num: '📅', label: 'Try To Solve Problem Daily Basis', icon: '⏱️' },
  { num: '3+', label: 'Projects Built', icon: '🏗️' },
  { num: '14+', label: 'Technologies Known', icon: '💻' },
  { num: '50+', label: 'DSA Problems Solved', icon: '🧩' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="glow-orb glow-orb-2" style={{ opacity: 0.3 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Achievements
          </span>
          <h2 className="section-title">What I've Accomplished</h2>
          <p className="section-subtitle">
            Every achievement is a milestone that reflects my commitment, discipline,
            and passion for continuous growth in computer science.
          </p>
        </div>

        {/* Stats banner */}
        <div className="achievements__stats">
          {stats.map(s => (
            <div className="achievements__stat" key={s.label}>
              <span className="achievements__stat-icon">{s.icon}</span>
              <span className="achievements__stat-num">{s.num}</span>
              <span className="achievements__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="achievements__grid">
          {achievements.map((a) => (
            <div className="achievement-card" key={a.id} id={`achievement-${a.id}`}>
              <div className="achievement-card__top" style={{ background: a.gradient }}>
                <div className="achievement-card__icon-large">{a.icon}</div>
                <div className="achievement-card__metric">
                  <span className="achievement-card__metric-num">{a.metric}</span>
                  <span className="achievement-card__metric-label">{a.metricLabel}</span>
                </div>
              </div>

              <div className="achievement-card__body">
                <span className="achievement-card__subtitle">{a.subtitle}</span>
                <h3 className="achievement-card__title">{a.title}</h3>
                <p className="achievement-card__desc">{a.description}</p>

                <div className="achievement-card__tags">
                  {a.tags.map(tag => (
                    <span key={tag} className="achievement-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
