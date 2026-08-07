import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowDown, Globe, MessageCircle, Share2 } from 'lucide-react'
import gsap from 'gsap'
import { events, programs } from '../data/site'

export default function HomePage() {
  const [refReady, setRefReady] = useState(false)

  useEffect(() => {
    if (refReady) {
      const timeline = gsap.timeline({ defaults: { duration: 1.1, ease: 'power3.out' } })
      timeline.from('.hero-eyebrow', { opacity: 0, y: 22, stagger: 0.08 })
      timeline.from('.hero-title', { opacity: 0, y: 28 }, '-=0.9')
      timeline.from('.hero-copy', { opacity: 0, y: 22 }, '-=0.85')
      timeline.from('.hero-actions', { opacity: 0, y: 22 }, '-=0.8')
      timeline.from('.stats-strip .stat-card', { opacity: 0, y: 28, stagger: 0.08 }, '-=0.75')
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
          <div className="hero-meta-row">
            <span className="hero-eyebrow">Justice · Dignity · Agency</span>
            <div className="hero-award-pill">Premium impact design</div>
          </div>
          <h1 className="hero-title">
            <span className="hero-line">
              Restoring <span className="hero-keyword-1">Dignity.</span>
            </span>
            <span className="hero-line">Empowering Women.</span>
            <span className="hero-line">
              <span className="hero-keyword-2">Transforming</span> Communities.
            </span>
          </h1>
          <p className="hero-copy">
            We build safe pathways for justice, education and leadership while
            creating bold systems of support across prisons, schools and the
            wider community.
          </p>
          <div className="hero-actions">
            <Link to="/donate" className="button button-primary hero-cta">
              Donate now
            </Link>
            <Link to="/programs" className="button button-secondary hero-cta hero-cta-outline">
              Explore programs
            </Link>
          </div>
          <div className="hero-footer-row">
            <div className="hero-socials">
              <a href="#" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Messages">
                <MessageCircle size={18} />
              </a>
              <a href="#" aria-label="Share">
                <Share2 size={18} />
              </a>
            </div>
            <div className="hero-scroll-indicator">
              <span>Scroll</span>
              <ArrowDown size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="stat-card">
          <p>2025</p>
          <span>Impact milestones set in motion</span>
        </div>
        <div className="stat-card">
          <p>1,000+</p>
          <span>Lives supported through care pathways</span>
        </div>
        <div className="stat-card">
          <p>5+</p>
          <span>Signature programs improving dignity</span>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-grid">
          <div className="mission-copy">
            <span className="eyebrow">Simply Feminine Network</span>
            <h2>Dignity is not a destination. It is the beginning.</h2>
            <p>
              We empower women, improve mental health, and restore dignity to women
              and children affected by the criminal justice system. From Kenya to
              the diaspora, our work turns practical care into renewed agency.
            </p>
            <Link to="/about" className="button button-tertiary">
              Our story
            </Link>
          </div>
          <div className="mission-details">
            <div className="mission-block">
              <strong>Our Approach</strong>
              <p>Holistic advocacy, safe spaces and leadership circles rooted in care.</p>
            </div>
            <div className="mission-block">
              <strong>Where we work</strong>
              <p>Kenya, East Africa, and international partner networks with local roots.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="programs-showcase">
        <div className="section-heading">
          <p className="eyebrow">Where we put care to work</p>
          <h2>Three doors into a bigger life.</h2>
        </div>
        <div className="programs-showcase-grid">
          {programs.map((program) => {
            return (
              <article key={program.slug} className="program-card showcase-card">
                <div
                  className="program-image"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(20,12,46,0.15), rgba(20,12,46,0.82)), url(${program.image})` }}
                >
                  <div className="program-tag">{program.accent}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <Link to="/programs" className="button button-tertiary program-link">
                    View all programs
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="giving-section">
        <div className="giving-grid">
          <div className="giving-media">
            <img
              src="https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&w=900&q=80"
              alt="Volunteer mentor and participant"
            />
            <div className="giving-badge">Care is a form of leadership.</div>
          </div>
          <div className="giving-copy">
            <p className="eyebrow">Gift with intention</p>
            <h2>A small gift can hold a great deal of possibility.</h2>
            <p>
              Whether it keeps a girl in school, equips a peer mentor, or helps a woman
              find her way through the justice system — your generosity creates agency
              and practical transformation.
            </p>
            <Link to="/donate" className="button button-primary">
              Explore giving
            </Link>
          </div>
        </div>
      </section>

      <section className="events-dark-section">
        <div className="events-dark-copy">
          <p className="eyebrow">Gathering with purpose</p>
          <h2>Meet us where change gathers.</h2>
        </div>
        <div className="events-dark-list">
          {events.map((event) => (
            <article key={event.title} className="event-dark-card">
              <div className="event-dark-date">
                <strong>{event.label}</strong>
                <span>{event.date}</span>
              </div>
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link to="/events" className="button button-tertiary events-link">
          All events
        </Link>
      </section>

      <section className="quote-section">
        <div className="quote-copy">
          <p className="eyebrow">Field note / 24</p>
          <h2>“For the first time, I was asked what I wanted — not what had happened to me.”</h2>
          <p>
            Our participants often describe the shift as the moment they were seen,
            heard, and treated like the future they were building.
          </p>
          <Link to="/stories" className="button button-tertiary">
            Read her story
          </Link>
        </div>
        <div className="quote-image">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
            alt="Woman smiling and working at table"
          />
        </div>
      </section>

      <section className="volunteer-banner">
        <div>
          <p className="eyebrow">Your time has agency</p>
          <h2>Bring your skills. Leave more possibility.</h2>
        </div>
        <Link to="/volunteer" className="button button-primary">
          Volunteer with us
        </Link>
      </section>
    </div>
  )
}
