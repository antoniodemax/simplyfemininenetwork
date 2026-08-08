import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { stories } from '../data/site'

export default function StoriesPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Stories | Simply Feminine Network</title>
        <meta
          name="description"
          content="Read powerful stories of transformation, resilience, and leadership from the women at the heart of our work."
        />
      </Helmet>

      {/* PageHero */}
      <PageHero
        eyebrow="The people behind the numbers."
        title="Stories of courage, dignity and transformation"
        titleAccent="courage, dignity and transformation"
        description="Every number represents a woman with a story - of struggle, of resilience, of reclaiming her power and purpose."
      />

      {/* Asymmetric split: Featured story left, story list right */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="stories-split-section"
      >
        <div className="page-shell">
          <div className="impact-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Large featured story (left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="featured-story"
            >
              <div style={{
                width: '100%',
                aspectRatio: '4 / 5',
                backgroundColor: '#e0d6eb',
                borderRadius: '32px',
                overflow: 'hidden',
                marginBottom: '2rem'
              }}>
                {/* In real implementation, this would be the actual featured story image */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(58, 22, 104, 0.3), rgba(109, 51, 153, 0.3))',
                  color: 'white',
                  fontSize: '4rem',
                  fontStyle: 'italic',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  SFN
                </div>
              </div>

              <p className="eyebrow" style={{
                color: '#F2528A',
                fontSize: '0.875rem',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                fontWeight: '700',
                marginBottom: '1rem',
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
                From Prison Cell to Community Advocate
              </p>

              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.25rem',
                color: '#3a1668',
                lineHeight: '1.2',
                marginBottom: '1.5rem'
              }}>
                From Prison Cell to Community Advocate
              </h2>

              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.7',
                color: 'rgba(30, 27, 41, 0.78)',
                marginBottom: '2rem'
              }}>
                After years navigating a justice system that viewed her as a problem rather than a person, Amina found her voice through our prison outreach program. What began as legal education sessions evolved into a leadership journey that saw her become one of our most effective community advocates, helping other women navigate their own paths to dignity and self-determination.
              </p>
            </motion.div>

            {/* Stacked list of smaller story cards (right) */}
            <div className="story-list">
              {stories.slice(1).map((story, index) => ( //$ skipping first story as it's featured
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  className="story-card-small"
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    marginBottom: '1.5rem'
                  }}>
                    {/* Thumbnail */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#e0d6eb',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <span style={{
                        color: '#3a1668',
                        fontSize: '2rem',
                        fontStyle: 'italic'
                      }}>
                        {story.title.charAt(0)}
                      </span>
                    </div>

                    {/* Story content */}
                    <div>
                      <p className="eyebrow" style={{
                        color: '#F2528A',
                        fontSize: '0.75rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          display: 'block',
                          width: '2rem',
                          height: '1px',
                          background: '#F2528A',
                          marginRight: '0.5rem'
                        }}></span>
                        Impact story
                      </p>

                      <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.5rem',
                        color: '#3a1668',
                        lineHeight: '1.3',
                        marginBottom: '0.75rem'
                      }}>
                        {story.title}
                      </h3>

                      <Link to="/contact" className="button button-tertiary" style={{
                        padding: '0.7rem 1.4rem',
                        fontSize: '0.85rem',
                        marginTop: '1rem'
                      }}>
                        Read story →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}