import { Link } from 'react-router-dom'
import { ArrowRight, Globe2, Mail, Users } from 'lucide-react'

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
]

const programLinks = [
  { label: 'Justice Outreach', to: '/programs#justice-outreach' },
  { label: 'Hygiene Drives', to: '/programs#sanitary-drives' },
  { label: 'Mentorship', to: '/programs#mentorship-leadership' },
]

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-grid">
        <div>
          <p className="eyebrow">Simply Feminine Network</p>
          <p className="footer-copy">
            A globally rooted women’s empowerment initiative forging justice,
            education and dignity across Kenya and beyond.
          </p>
        </div>

        <div>
          <p className="eyebrow">Quick Links</p>
          <ul className="footer-list">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Programs</p>
          <ul className="footer-list">
            {programLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Connect</p>
          <div className="social-row">
            <a href="#" aria-label="Website">
              <Globe2 size={18} />
            </a>
            <a href="#" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="#" aria-label="Partners">
              <Users size={18} />
            </a>
          </div>
          <Link to="/privacy" className="footer-link-inline">
            Privacy Policy <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Simply Feminine Network. All rights reserved.</p>
        <p>
          <Link to="/terms">Terms</Link> · <Link to="/privacy">Privacy</Link>
        </p>
      </div>
    </footer>
  )
}
