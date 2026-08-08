import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { programs } from '../data/site'

export default function ProgramsPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Programs | Simply Feminine Network</title>
        <meta
          name="description"
          content="Explore our programs that combine practical care with structural change to empower women and transform systems."
        />
      </Helmet>

      {/* PageHero */}
      <PageHero
        eyebrow="Practical care. Structural change."
        title="Programs that meet women where they are"
        titleAccent="where they are"
        description="Our initiatives are designed to address immediate needs while working to transform the systems that create those needs in the first place."
      />

      {/* Programs showcase - full-width stacked rows */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="programs-showcase-section"
      >
        <div className="page-shell">
          {programs.map((program, index) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="program-row"
            >
              {/* Lavender background row */}
              <div className="program-row-content" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                backgroundColor: '#efe5f7',
                padding: '3rem 2rem',
                borderRadius: '32px',
                marginBottom: '2rem'
              }}>
                {/* Image left */}
                <div className="program-image-container">
                  <div style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    backgroundColor: '#e0d6eb',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {/* In real implementation, this would be the actual program image */}
                    <span style={{
                      color: '#3a1668',
                      fontSize: '3rem',
                      fontStyle: 'italic'
                    }}>
                      {program.accent?.charAt(0) || 'SFN'}
                    </span>
                  </div>
                </div>

                {/* Copy right */}
                <div className="program-copy-container">
                  {/* Numbered eyebrow */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#3a1668'
                    }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span style={{
                      width: '1px',
                      height: '20px',
                      backgroundColor: '#3a1668',
                      display: 'block'
                    }}></span>
                    <span style={{
                      textTransform: 'uppercase',
                      fontSize: '0.875rem',
                      letterSpacing: '0.24em',
                      fontWeight: '700',
                      color: '#3a1668'
                    }}>
                      {program.accent} & ADVOCACY
                    </span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '2rem',
                    color: '#3a1668',
                    lineHeight: '1.2',
                    marginBottom: '1.5rem'
                  }}>
                    {program.title}
                  </h2>

                  {/* Description */}
                  <p style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.7',
                    color: 'rgba(30, 27, 41, 0.78)',
                    marginBottom: '2rem'
                  }}>
                    {program.description}
                  </p>

                  {/* Link */}
                  <Link to="/contact" className="button button-secondary" style={{
                    padding: '0.9rem 1.8rem',
                    fontSize: '0.95rem'
                  }}>
                    Talk to our team →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}