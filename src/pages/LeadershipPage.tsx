import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import WayWeWork from '../components/WayWeWork'

export default function LeadershipPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Leadership | Simply Feminine Network</title>
        <meta
          name="description"
          content="Meet the leaders who drive Simply Feminine Network's mission to restore dignity and empower women."
        />
      </Helmet>

      {/* PageHero */}
      <PageHero
        eyebrow="The people who make possibility practical."
        title="Leadership rooted in lived experience"
        titleAccent="lived experience"
        description="Our leadership team brings together decades of experience in justice reform, women's rights, and community organizing from across Kenya and Europe."
      />

      {/* Profile cards side by side */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="leadership-profiles-section"
      >
        <div className="page-shell">
          <div className="impact-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Profile Card 1 */}
            <div>
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3a1668 0%, #6d3399 100%)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '2rem', fontStyle: 'italic' }}>
                  AM
                </span>
              </div>
              <p className="eyebrow" style={{
                color: '#F2528A',
                fontSize: '0.875rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                fontWeight: '700',
                marginBottom: '0.5rem',
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
                Founder & Executive Director
              </p>
              <h2 style={{
                color: '#3a1668',
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                lineHeight: '1.2',
                marginBottom: '1rem',
                display: 'inline-block'
              }}>
                Amina Moyo
              </h2>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'rgba(30, 27, 41, 0.78)',
                marginBottom: '1.5rem'
              }}>
                Amina brings 15 years of experience in human rights law and justice reform, having worked with international tribunals and grassroots organizations across East Africa. Her vision for SFN emerged from direct work with incarcerated women who deserved dignity, not pity.
              </p>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'rgba(30, 27, 41, 0.78)'
              }}>
                Under her leadership, SFN has expanded from a single prison outreach program to a comprehensive network supporting women's leadership development, legal advocacy, and economic empowerment initiatives.
              </p>
            </div>

            {/* Profile Card 2 */}
            <div>
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3a1668 0%, #6d3399 100%)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '2rem', fontStyle: 'italic' }}>
                  JS
                </span>
              </div>
              <p className="eyebrow" style={{
                color: '#F2528A',
                fontSize: '0.875rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                fontWeight: '700',
                marginBottom: '0.5rem',
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
                Director of Programs
              </p>
              <h2 style={{
                color: '#3a1668',
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                lineHeight: '1.2',
                marginBottom: '1rem',
                display: 'inline-block'
              }}>
                Johan Schneider
              </h2>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'rgba(30, 27, 41, 0.78)',
                marginBottom: '1.5rem'
              }}>
                Johan brings expertise in organizational development and international program management, having led humanitarian initiatives in conflict and post-conflict settings. His approach focuses on building sustainable systems that outlive any single intervention.
              </p>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'rgba(30, 27, 41, 0.78)'
              }}>
                He oversees SFN's program portfolio, ensuring each initiative maintains the highest standards of effectiveness, ethical implementation, and genuine community partnership.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3-stat inline row */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="leadership-stats-section"
      >
        <div className="stats-strip" style={{
          margin: '3rem auto',
          background: '#FCFAF8',
          borderRadius: '32px 32px 0 0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transform: 'translateY(-2rem)',
          padding: '2.25rem 2rem 2rem'
        }}>
          <div className="stat-card" style={{
            padding: '1.8rem 1.6rem',
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            color: '#1b1137',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '2rem',
              margin: '0 0 0.75rem',
              color: '#2e1f58'
            }}>
              2021
            </p>
            <span style={{
              display: 'block',
              color: 'rgba(30, 27, 41, 0.78)',
              fontSize: '0.95rem'
            }}>
              Founded
            </span>
          </div>

          <div className="stat-card" style={{
            padding: '1.8rem 1.6rem',
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            color: '#1b1137',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '2rem',
              margin: '0 0 0.75rem',
              color: '#2e1f58'
            }}>
              NGO of the Year
            </p>
            <span style={{
              display: 'block',
              color: 'rgba(30, 27, 41, 0.78)',
              fontSize: '0.95rem'
            }}>
              2024 Award
            </span>
          </div>

          <div className="stat-card" style={{
            padding: '1.8rem 1.6rem',
            borderRadius: '28px',
            background: 'rgba(255, 255, 255, 0.14)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            color: '#1b1137',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '2rem',
              margin: '0 0 0.75rem',
              color: '#2e1f58'
            }}>
              Dignity First
            </p>
            <span style={{
              display: 'block',
              color: 'rgba(30, 27, 41, 0.78)',
              fontSize: '0.95rem'
            }}>
              Core Principle
            </span>
          </div>
        </div>
      </motion.section>

      {/* WayWeWork component */}
      <WayWeWork />
    </div>
  )
}