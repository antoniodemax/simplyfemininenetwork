import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About us', to: '/about' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Programs', to: '/programs' },
  { label: 'Stories', to: '/stories' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Partners', to: '/partners' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`site-nav ${scrolled ? 'glow-nav' : ''}`}
    >
      <div className="nav-shell">
        <Link to="/" className="brand">
          <span className="brand-mark">SFN</span>
          <span className="brand-copy">
            <strong>Simply Feminine Network</strong>
            <small>Kenya · Germany</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/donate" className="nav-link nav-cta nav-cta-mobile">
            Donate Now
          </Link>
        </nav>

        <Link to="/donate" className="nav-cta nav-cta-desktop">
          Donate Now
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  )
}
