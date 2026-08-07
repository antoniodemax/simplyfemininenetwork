import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Contact | Simply Feminine Network</title>
        <meta
          name="description"
          content="Contact Simply Feminine Network to donate, partner, volunteer, or learn more about our impact."
        />
      </Helmet>

      <motion.section className="page-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <span className="eyebrow">Contact</span>
        <h1>Let’s build a more dignified future together.</h1>
        <p>
          Reach out to learn how to donate, volunteer, partner or attend an
          upcoming event.
        </p>
      </motion.section>

      <div className="contact-grid">
        <div className="contact-card">
          <p className="eyebrow">Head office</p>
          <h2>Nairobi, Kenya</h2>
          <p>info@simplyfemininenetwork.org</p>
          <p>+254 700 000 000</p>
        </div>
        <div className="contact-card contact-panel">
          <label className="field-group">
            <span>Name</span>
            <input type="text" placeholder="Your name" />
          </label>
          <label className="field-group">
            <span>Email</span>
            <input type="email" placeholder="your@email.com" />
          </label>
          <label className="field-group">
            <span>Message</span>
            <textarea rows={5} placeholder="How can we help?" />
          </label>
          <button type="button" className="button button-primary button-full">
            Send message
          </button>
        </div>
      </div>
    </div>
  )
}
