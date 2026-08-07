import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'

const gallery = [
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
]

export default function GalleryPage() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center', containScroll: 'trimSnaps' })
  const slides = useMemo(() => gallery, [])

  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Gallery | Simply Feminine Network</title>
        <meta
          name="description"
          content="Browse the Simply Feminine Network gallery for powerful imagery of community, education, and justice outreach."
        />
      </Helmet>

      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">Gallery</span>
        <h1>Imagery that reflects dignity, connection, and human leadership.</h1>
        <p>
          Our visual story is crafted with warmth, editorial styling, and a deep
          sense of global purpose.
        </p>
      </motion.section>

      <section className="gallery-shell">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((src, index) => (
              <motion.div key={src} className="embla__slide" whileHover={{ scale: 1.02 }}>
                <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
