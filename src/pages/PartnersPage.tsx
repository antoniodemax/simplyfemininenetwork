import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { partners } from '../data/site'

export default function PartnersPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Partners | Simply Feminine Network</title>
        <meta
          name="description"
          content="Meet our growing circle of partners who share our vision for dignity, justice, and empowerment."
        />
      </Helmet>

      {/* PageHero */}
      <PageHero
        eyebrow="Change is a team sport."
        title="Together we build pathways to dignity"
        titleAccent="pathways to dignity"
        description="Our impact is multiplied through thoughtful partnerships with organizations that share our values and vision."
      />

      {/* Partners showcase */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="partners-showcase-section"
      >
        <div className="page-shell">
          {/* "Our growing circle" eyebrow */}
          <p className="eyebrow" style={{
            color: '#F2528A',
            fontSize: '0.875rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: '1.5rem',
            display: 'inline-flex',
            alignItems: 'center'
          }}>
            <span style={{
              display: 'block',
              width: '3.5rem',
              height: '1px',
              background: '#F2528A',
              marginRight: '0.75rem'
            }}></span>
            Our growing circle
          </p>

          {/* 4-column grid of partner chips */}
          <div className="partners-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="partner-chip"
              >
                <div style={{
                  padding: '1.5rem',
                  border: '1px solid #efe5f7',
                  borderRadius: '24px',
                  textAlign: 'center',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'rgba(30, 27, 41, 0.78)'
                  }}>
                    {partner}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solid dark-purple CTA banner */}
          <div className="cta-banner" style={{
            background: 'linear-gradient(135deg, #3a1668 0%, #6d3399 100%)',
            color: 'white',
            padding: '3rem 2rem',
            borderRadius: '32px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              marginBottom: '1.5rem',
              opacity: '0.9'
            }}>
              Could we build something meaningful together?
            </p>
            <Link to="/contact" className="button button-secondary" style={{
              padding: '0.9rem 2rem',
              fontSize: '0.95rem',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)'
            }}>
              Start a conversation
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}