import './Contact.css';
import resumePdf from '../assets/Ankit_Kumar_Saini_Resume.pdf';

const contactLinks = [
  {
    id: 'github',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/sainiankit1287-prog',
    href: 'https://github.com/sainiankit1287-prog',
    color: '#6366f1',
    desc: 'Check out my repositories and code',
  },
  {
    id: 'linkedin',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/ankit-kumar-saini',
    href: 'https://linkedin.com/in/ankit-kumar-saini',
    color: '#0077b5',
    desc: 'Connect with me professionally',
  }
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="glow-orb glow-orb-1" style={{ opacity: 0.4 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact
          </span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Open to internship opportunities, collaborative projects, and tech discussions.
            Don't hesitate to reach out!
          </p>
        </div>

        <div className="contact__inner">
          {/* Left: Info */}
          <div className="contact__info">
            <div className="contact__availability">
              <div className="contact__availability-dot"></div>
              <div>
                <p className="contact__availability-title">Available for Opportunities</p>
                <p className="contact__availability-desc">
                  Currently looking for internships, open-source opportunities, and exciting projects.
                </p>
              </div>
            </div>

            <div className="contact__links">
              {contactLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                  id={`contact-${link.id}`}
                >
                  <div className="contact__link-icon" style={{ color: link.color, background: `${link.color}15`, border: `1px solid ${link.color}30` }}>
                    {link.icon}
                  </div>
                  <div className="contact__link-info">
                    <p className="contact__link-label">{link.label}</p>
                    <p className="contact__link-value">{link.value}</p>
                    <p className="contact__link-desc">{link.desc}</p>
                  </div>
                  <svg className="contact__link-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              ))}
            </div>

            <a href={resumePdf} download="Ankit_Kumar_Saini_Resume.pdf" className="contact__resume-btn btn btn-outline" id="contact-resume-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download My Resume/CV
            </a>
          </div>

          {/* Right: Direct Email Area */}
          <div className="contact__form-wrapper contact__direct-email">
            <div className="contact__direct-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3>Email Me Directly</h3>
            <p>I am highly responsive to emails. Send me a message and I'll get back to you as soon as possible.</p>
            
            <a href="mailto:sainiankit1287@gmail.com" className="btn btn-primary contact__email-btn">
              sainiankit1287@gmail.com
            </a>
            
            <p className="contact__reply-time">Usually responds within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
