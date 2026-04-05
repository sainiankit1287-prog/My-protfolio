import { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '💻',
    skills: [
      { name: 'C++', level: 80, color: '#00599c' },
      { name: 'JavaScript', level: 82, color: '#f7df1e' },
      { name: 'HTML', level: 90, color: '#e34f26' },
      { name: 'CSS', level: 85, color: '#264de4' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 78, color: '#339933' },
      { name: 'Express.js', level: 75, color: '#000000' },
      { name: 'MongoDB', level: 72, color: '#47a248' },
      { name: 'JWT Auth', level: 70, color: '#d63aff' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Libs',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 82, color: '#f05032' },
      { name: 'Multer', level: 73, color: '#6366f1' },
      { name: 'Cloudinary', level: 70, color: '#3448c5' },
      { name: 'Bootstrap', level: 80, color: '#7952b3' },
    ],
  },
  {
    id: 'cs',
    label: 'CS Concepts',
    icon: '🧠',
    skills: [
      { name: 'Data Structures', level: 78, color: '#6366f1' },
      { name: 'Algorithms', level: 76, color: '#8b5cf6' },
      { name: 'Problem Solving', level: 80, color: '#06b6d4' },
      { name: 'Computer Networks', level: 65, color: '#10b981' },
    ],
  },
];

const techBadges = [
  { name: 'C++', icon: '⚡', tag: 'Systems' },
  { name: 'JavaScript', icon: '🌐', tag: 'Web' },
  { name: 'Node.js', icon: '🟢', tag: 'Backend' },
  { name: 'Express.js', icon: '🚀', tag: 'Framework' },
  { name: 'MongoDB', icon: '🍃', tag: 'Database' },
  { name: 'HTML', icon: '📄', tag: 'Markup' },
  { name: 'CSS', icon: '🎨', tag: 'Styling' },
  { name: 'Bootstrap', icon: '🅱️', tag: 'UI' },
  { name: 'Git', icon: '🔀', tag: 'VCS' },
  { name: 'GitHub', icon: '🐙', tag: 'Platform' },
  { name: 'JWT', icon: '🔐', tag: 'Auth' },
  { name: 'Multer', icon: '📁', tag: 'Upload' },
  { name: 'Cloudinary', icon: '☁️', tag: 'Cloud' },
  { name: 'Computer Networks', icon: '🌐', tag: 'Networking' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const activeCat = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="skills">
      <div className="glow-orb glow-orb-1" style={{ opacity: 0.5 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
            Technical Skills
          </span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build fast, scalable, and maintainable applications —
            from data structures mastery to full-stack development.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="skills__tabs">
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              id={`skills-tab-${cat.id}`}
              className={`skills__tab ${activeTab === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span>{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Progress bars */}
        <div className="skills__progress-grid">
          {activeCat && activeCat.skills.map(skill => (
            <div className="skills__progress-item" key={skill.name}>
              <div className="skills__progress-header">
                <span className="skills__progress-name">{skill.name}</span>
                <span className="skills__progress-percent">{skill.level}%</span>
              </div>
              <div className="skills__progress-bar">
                <div
                  className="skills__progress-fill"
                  style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, var(--accent-primary), ${skill.color})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* All skills badge cloud */}
        <div className="skills__cloud-header">
          <div className="divider" style={{ margin: '0 auto 16px', width: '40px' }}></div>
          <p className="skills__cloud-title">All Technologies</p>
        </div>
        <div className="skills__cloud">
          {techBadges.map(tech => (
            <div className="skills__badge" key={tech.name} title={tech.name}>
              <span className="skills__badge-icon">{tech.icon}</span>
              <span className="skills__badge-name">{tech.name}</span>
              <span className="skills__badge-tag">{tech.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
