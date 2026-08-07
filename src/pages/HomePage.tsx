import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {
  ChevronDown,
  Droplet,
  Heart,
  MapPin,
  Scale,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react'
import gsap from 'gsap'
import { events, programs, stories } from '../data/site'

export default function HomePage() {
  const [selectedAmount, setSelectedAmount] = useState(1000)
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('M-Pesa')
  const [donated, setDonated] = useState(false)
  const [refReady, setRefReady] = useState(false)
  const [statsRef, inView] = useInView({ triggerOnce: true, rootMargin: '-120px' })

  const donatedAmount = useMemo(() => {
    const value = Number(customAmount)
    if (value > 0) return value
    return selectedAmount
  }, [customAmount, selectedAmount])

  useEffect(() => {
    if (refReady) {
      const timeline = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } })
      timeline.from('.hero-copy', { opacity: 0, y: 36, stagger: 0.12 })
      timeline.from('.hero-cta', { opacity: 0, y: 28, stagger: 0.1 }, '-=0.95')
      timeline.from('.impact-card', { opacity: 0, y: 25, stagger: 0.08 }, '-=0.85')
    }
  }, [refReady])

  useEffect(() => {
    setRefReady(true)
  }, [])

  return (
    <div className="home-page">
      <Helmet>
        <title>Simply Feminine Network | Empowering women through justice and education</title>
        <meta
          name="description"
          content="Simply Feminine Network restores dignity, empowers women, and transforms communities with premium humanitarian programs in Kenya and beyond."
        />
      </Helmet>

      <section className="hero-section">
        <div className="hero-image-layer" aria-hidden="true" />
        <div className="hero-foreground" />
        <div className="hero-copy-wrapper">
          <span className="hero-eyebrow">Global impact, Kenyan roots</span>
          <h1 className="hero-title">
            Restoring Dignity. Empowering Women. Transforming Communities.
          </h1>
          <p className="hero-copy">
            We build safe pathways for justice, education and leadership while
            creating bold systems of support across prisons, schools and the
            wider community.
          </p>
          <div className="hero-actions">
            <Link to="/donate" className="button button-primary hero-cta">
              Donate Now
            </Link>
            <Link to="/programs" className="button button-secondary hero-cta">
              Explore Our Programs
            </Link>
          </div>
          <div className="hero-stats hero-cta">
            <div>
              <span>18+ years</span>
              <p>Delivering transformational care.</p>
            </div>
            <div>
              <span>Kenya + international</span>
              <p>Program partners across East Africa and Europe.</p>
            </div>
          </div>
        </div>
        <div className="hero-floating">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-dot hero-dot-1"
          />
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-dot hero-dot-2"
          />
        </div>
        <div className="scroll-label">
          <ChevronDown size={24} />
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="impact-section" ref={statsRef}>
        <div className="impact-badge">
          <Trophy size={18} />
          <span>Winner: NGO of the Year — Pride of Kenya Awards</span>
        </div>
        <div className="impact-grid">
          <article className="impact-card">
            <Users size={28} className="impact-icon" />
            <strong>
              {inView ? <CountUp end={1000} duration={2.2} separator="," /> : '0'}+
            </strong>
            <p>Lives Impacted</p>
          </article>
          <article className="impact-card">
            <Scale size={28} className="impact-icon" />
            <strong>{inView ? <CountUp end={5} duration={2.2} /> : '0'}+</strong>
            <p>Prison Outreaches</p>
          </article>
          <article className="impact-card">
            <Droplet size={28} className="impact-icon" />
            <strong>
              {inView ? <CountUp end={10000} duration={2.2} separator="," /> : '0'}+
            </strong>
            <p>Sanitary Pads Distributed</p>
          </article>
        </div>
      </section>

      <section className="donation-section" id="donate">
        <div className="section-heading">
          <p className="eyebrow">Support dignity</p>
          <h2>Premium giving made simple and inspiring.</h2>
        </div>
        <div className="donation-grid">
          <div className="donation-art">
            <div className="donation-art-card">
              <Heart size={26} className="art-icon" />
              <p>
                Every gift becomes fast, visible impact — from emergency hygiene
                kits to mentorship scholarships.
              </p>
            </div>
          </div>

          <motion.div
            className="donation-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="eyebrow">Donate securely</p>
            <h3>Choose your gift</h3>
            <div className="donation-options">
              {[500, 1000, 5000].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount('')
                  }}
                  className={`pill ${selectedAmount === amount && !customAmount ? 'active' : ''}`}
                >
                  KES {amount}
                </button>
              ))}
            </div>
            <label className="field-group">
              <span>Custom amount</span>
              <input
                type="number"
                placeholder="KES 750"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
              />
            </label>
            <div className="payment-toggle" role="group" aria-label="Payment method">
              {['M-Pesa', 'Credit / Debit Card'].map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`pill ${paymentMethod === method ? 'active' : ''}`}
                >
                  {method}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {donated ? (
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="thank-you-panel"
                >
                  <h4>Thank you for your generosity.</h4>
                  <p>
                    Your gift of KES {donatedAmount.toLocaleString()} helps women
                    regain dignity and create a lasting ripple of change.
                  </p>
                </motion.div>
              ) : (
                <button
                  type="button"
                  className="button button-primary button-full"
                  onClick={() => setDonated(true)}
                >
                  Donate KES {donatedAmount.toLocaleString()} with {paymentMethod}
                </button>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="programs-section">
        <div className="section-heading">
          <p className="eyebrow">Our signature work</p>
          <h2>Programs that restore trust and create leadership.</h2>
        </div>
        <div className="program-grid">
          {programs.map((program) => {
            const iconMap = {
              Scale,
              Droplet,
              Sparkles,
            }
            const Icon = iconMap[program.icon as keyof typeof iconMap]
            return (
              <motion.article
                key={program.slug}
                className="program-card"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              >
                <span className="program-label">{program.accent}</span>
                <div className="program-icon">
                  <Icon size={28} />
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to="/programs" className="button button-tertiary">
                  Learn More
                </Link>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="events-section">
        <div className="section-heading">
          <p className="eyebrow">Upcoming moments</p>
          <h2>Gathering change-makers across continents.</h2>
        </div>
        <div className="events-grid">
          {events.map((event) => {
            const days = Math.max(
              0,
              Math.ceil((new Date(event.date).getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
            )
            return (
              <motion.article
                key={event.title}
                className="event-card"
                whileHover={{ y: -6 }}
              >
                <div className="event-date">
                  <strong>{event.label}</strong>
                  <span>{event.time}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  <span>
                    <MapPin size={16} /> {event.location}
                  </span>
                  <span>{days} days away</span>
                </div>
                <Link to="/events" className="button button-secondary">
                  RSVP
                </Link>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="stories-section">
        <div className="section-heading">
          <p className="eyebrow">Impact stories</p>
          <h2>Real stories of restoration and civic leadership.</h2>
        </div>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <motion.article
              key={story.title}
              className={`story-card ${index % 2 === 1 ? 'story-alt' : ''}`}
              whileHover={{ scale: 1.01 }}
            >
              <div className="story-image" style={{ backgroundImage: `url(${story.image})` }} />
              <div className="story-copy">
                <span className="eyebrow">Featured story</span>
                <h3>{story.title}</h3>
                <p>{story.subtitle}</p>
                <Link to="/stories" className="button button-tertiary">
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-card">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2>Receive stories, event invitations and impact updates.</h2>
          </div>
          <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit" className="button button-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
