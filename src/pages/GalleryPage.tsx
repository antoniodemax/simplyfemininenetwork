import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { gallery } from '../data/site'

export default function GalleryPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Gallery | Simply Feminine Network</title>
        <meta
          name="description"
          content="A gallery of dignity in motion - capturing moments of courage, connection, and community."
        />
      </Helmet>

      {/* PageHero */}
      <PageHero
        eyebrow="A gallery of dignity in motion."
        title="Moments that move us"
        titleAccent="that move us"
        description="Through our lens, we capture the dignity, resilience, and beauty of the women and communities we serve."
      />

      {/* Full-bleed bento grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="gallery-bento-section"
      >
        {/* Remove page shell padding for full-bleed effect */}
        <div className="gallery-bento-grid">
          {gallery.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="gallery-bento-item"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}