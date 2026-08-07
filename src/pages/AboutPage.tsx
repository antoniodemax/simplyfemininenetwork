import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>About | Simply Feminine Network</title>
        <meta
          name="description"
          content="Learn about Simply Feminine Network's mission to restore dignity and empower women through justice reform, education, and outreach."
        />
      </Helmet>

      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">About us</span>
        <h1>We partner with women, communities and institutions to design compassionate systems.</h1>
        <p>
          Since our founding, we have anchored our work in courage, dignity and
          inclusive leadership. Every program is shaped by women who have lived
          experience and a deep commitment to locally led transformation.
        </p>
      </motion.section>

      <section className="content-grid">
        <article className="feature-card">
          <h2>Justice with purpose</h2>
          <p>
            Our prison outreach brings restorative advocacy and legal education
            directly to women who are rebuilding their lives after incarceration.
          </p>
        </article>
        <article className="feature-card">
          <h2>Education that endures</h2>
          <p>
            We invest in mentorship, school partnerships and leadership labs that
            equip girls and young women with agency and access.
          </p>
        </article>
        <article className="feature-card">
          <h2>Global trust, local care</h2>
          <p>
            Working across Kenya and Europe, we connect donors, partners and
            communities through responsive and transparent programs.
          </p>
        </article>
      </section>

      <div className="feature-banner">
        <div>
          <p className="eyebrow">Our promise</p>
          <h2>Every initiative is designed to feel premium, human and sustainable.</h2>
        </div>
        <Link to="/contact" className="button button-primary">
          Partner with us
        </Link>
      </div>
    </div>
  )
}
