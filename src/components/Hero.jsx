import { useEffect, useRef, useState } from 'react';
import './Hero.css';
import resumePdf from '../assets/Ankit_Kumar_Saini_Resume.pdf';

const roles = [
  'Full-Stack Developer',
  'DSA Enthusiast',
  'Backend Engineer',
  'Problem Solver',
  'CS Student',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="grid-mesh"></div>
        {/* Floating code snippets */}
        <div className="hero__code-float hero__code-float--1">
          <span className="code-kw">const</span> <span className="code-var">solve</span> = <span className="code-fn">() =&gt;</span> {'{'}<br/>
          &nbsp;&nbsp;<span className="code-kw">return</span> <span className="code-str">"optimal"</span><br/>
          {'}'}
        </div>
        <div className="hero__code-float hero__code-float--2">
          <span className="code-kw">#include</span> <span className="code-str">&lt;dsa&gt;</span><br/>
          <span className="code-fn">int</span> <span className="code-var">main</span><span className="code-kw">()</span> {'{'}<br/>
          &nbsp;&nbsp;<span className="code-fn">solve</span><span className="code-kw">()</span>;<br/>
          {'}'}
        </div>
        <div className="hero__code-float hero__code-float--3">
          <span className="code-kw">npm</span> <span className="code-var">run</span> <span className="code-fn">dev</span><br/>
          <span className="code-str">✓ Server running</span><br/>
          <span className="code-str">→ localhost:3000</span>
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <div className="hero__badge animate-fadeInUp">
            <span className="hero__badge-dot"></span>
            Available for Internships & Projects
          </div>

          <h1 className="hero__name animate-fadeInUp">
            Hi, I'm <span className="highlight">Ankit Kumar</span>
            <br />
            <span className="highlight">Saini</span>
          </h1>

          <div className="hero__role animate-fadeInUp">
            <span className="hero__role-prefix">I'm a </span>
            <span className="hero__role-text">
              {displayed}
              <span className="hero__cursor">|</span>
            </span>
          </div>

          <p className="hero__description animate-fadeInUp">
            B.Tech Computer Science student passionate about building scalable web applications,
            mastering data structures & algorithms, and creating elegant solutions to complex problems.
            Currently dedicated to <strong>Try To Solve Problem Daily Basis</strong> for DSA preparation.
          </p>

          <div className="hero__stats animate-fadeInUp">
            <div className="hero__stat">
              <span className="hero__stat-num" style={{fontSize:'0.75rem', lineHeight:'1.3', textAlign:'center'}}>Daily<br/>DSA</span>
              <span className="hero__stat-label">Solve Problems</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">3+</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">14+</span>
              <span className="hero__stat-label">Tech Skills</span>
            </div>
          </div>

          <div className="hero__actions animate-fadeInUp">
            <button
              className="btn btn-primary"
              id="hero-projects-btn"
              onClick={() => scrollToSection('projects')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              View Projects
            </button>
            <button
              className="btn btn-outline"
              id="hero-contact-btn"
              onClick={() => scrollToSection('contact')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get in Touch
            </button>
            <a
              href={resumePdf}
              download="Ankit_Kumar_Saini_Resume.pdf"
              className="btn btn-outline"
              id="hero-resume-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <div className="hero__social animate-fadeInUp">
            <a
              href="https://github.com/Ankitkumar-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              id="hero-github-link"
              aria-label="GitHub Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ankit-kumar-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              id="hero-linkedin-link"
              aria-label="LinkedIn Profile"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:ankitkumarsaini@email.com"
              className="hero__social-link"
              id="hero-email-link"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-wrapper animate-float">
            <div className="hero__avatar-ring"></div>
            <div className="hero__avatar">
              <div className="hero__avatar-initials">AKS</div>
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Open to opportunities
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              C++ & JavaScript
            </div>
            <div className="hero__avatar-badge hero__avatar-badge--3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Backend Expert
            </div>
          </div>

          <div className="hero__tech-orbit">
            {['C++', 'JS', 'Node', 'DSA', 'Git', 'React'].map((tech, i) => (
              <div
                key={tech}
                className="hero__tech-pill"
                style={{ '--delay': `${i * 0.5}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <button
          className="hero__scroll-btn"
          onClick={() => scrollToSection('about')}
          id="hero-scroll-btn"
          aria-label="Scroll down"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
