import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 'resume-builder',
    title: 'Online Resume Builder',
    category: 'Frontend',
    tags: ['HTML', 'Bootstrap', 'JavaScript', 'CSS'],
    description:
      'A dynamic web application that empowers users to effortlessly create professional resumes with a live real-time preview. Features include form-driven input, dynamic section management, and instant visual feedback — making resume creation fast and intuitive.',
    highlights: [
      'Live preview with instant DOM updates',
      'Dynamic form sections (add/remove)',
      'Responsive design with Bootstrap',
      'Print-to-PDF functionality',
      'Clean, professional template output',
    ],
    recruiterNote: '🎯 Demonstrates DOM manipulation mastery, UX thinking, and real-world usability.',
    github: 'https://github.com/sainiankit1287-prog/first-intern-project-using-php-basic-',
    // demo: '#',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    icon: '📄',
    status: 'This a basic learning project, How website works behind the scene',
  },
  {
    id: 'video-backend',
    title: 'Video Upload & Management Backend',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Multer', 'Cloudinary'],
    description:
      'A production-grade RESTful API backend for secure video file management. Implements JWT-based authentication, role-based access control, Cloudinary CDN integration for cloud storage, and comprehensive CRUD operations with input validation and error handling.',
    highlights: [
      'JWT-secured authentication & authorization',
      'Cloudinary cloud storage integration',
      'Multer for multipart form handling',
      'Express.js RESTful API architecture',
      'MongoDB for metadata management',
      'Proper error handling & validation',
    ],
    recruiterNote: '🚀 Shows mastery of Node.js ecosystem — exactly what backend roles look for.',
    github: 'https://github.com/sainiankit1287-prog/backend-learning-in-js',
    // demo: '#',
    gradient: 'linear-gradient(135deg, #059669, #06b6d4)',
    icon: '🎬',
    status: 'Running',
  },
  {
    id: 'dsa-repo',
    title: 'DSA Problem Solving Repository',
    category: 'Algorithms',
    tags: ['C++', 'DSA', 'Algorithms', 'Data Structures'],
    description:
      'A comprehensive, well-documented C++ repository covering solved problems across linked lists, trees, dynamic programming, greedy algorithms, recurrence relations, and string challenges. Organized for both learning and showcase purposes.',
    highlights: [
      '50+ handcrafted C++ solutions',
      'Linked lists, trees, stacks & queues',
      'Recurrence relations & DP patterns',
      'String algorithms & pattern matching',
      'Big-O complexity annotations',
      'Clean & readable code structure',
    ],
    recruiterNote: '🧠 Proof of algorithmic thinking — critical for SDE & product-based companies.',
    github: 'https://github.com/Ankitkumar-saini',
    demo: null,
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    icon: '🧩',
    status: 'Ongoing',
  },
];

const futurePlans = [
  { icon: '🤖', title: 'AI Chat App', tech: 'React + OpenAI API' },
  { icon: '📊', title: 'Real-time Analytics Dashboard', tech: 'React + Socket.io' },
  { icon: '🛒', title: 'E-Commerce Platform', tech: 'MERN Stack' },
  { icon: '💬', title: 'Chat Application', tech: 'WebSockets + Node.js' },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="glow-orb glow-orb-2" style={{ opacity: 0.4 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications built with modern tech — showcasing both frontend creativity
            and backend engineering skills.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <div
              className={`project-card ${expanded === project.id ? 'project-card--expanded' : ''}`}
              key={project.id}
              id={`project-${project.id}`}
            >
              {/* Header */}
              <div className="project-card__header">
                <div className="project-card__header-content">
                  <span className="project-card__icon">{project.icon}</span>
                  <span className={`project-card__status project-card__status--${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <span className="project-card__category">{project.category}</span>
              </div>

              {/* Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Tags */}
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span className="project-card__tag" key={tag}>{tag}</span>
                  ))}
                </div>

                {/* Highlights - expandable */}
                <button
                  className="project-card__expand-btn"
                  id={`project-expand-${project.id}`}
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {expanded === project.id ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="18 15 12 9 6 15"/>
                      </svg>
                      Hide Details
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                      Key Highlights
                    </>
                  )}
                </button>

                {expanded === project.id && (
                  <div className="project-card__highlights">
                    <ul>
                      {project.highlights.map((h, i) => (
                        <li key={i}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="project-card__recruiter-note">{project.recruiterNote}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="project-card__actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    id={`project-github-${project.id}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="btn btn-primary btn-sm"
                      id={`project-demo-${project.id}`}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future plans */}
        <div className="projects__coming-soon">
          <div className="projects__coming-label">
            <div className="divider" style={{ margin: '0 auto 12px', width: '40px' }}></div>
            <p>🚀 Coming Soon — Planned Projects for Placement Preparation</p>
          </div>
          <div className="projects__future-grid">
            {futurePlans.map(plan => (
              <div className="projects__future-card" key={plan.title}>
                <span className="projects__future-icon">{plan.icon}</span>
                <div>
                  <p className="projects__future-title">{plan.title}</p>
                  <p className="projects__future-tech">{plan.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
