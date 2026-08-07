import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const partners = ['UN Women', 'World Vision', 'Global Fund', 'Nairobi Trust', 'Justice Forward']

export default function PartnersPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Partners | Simply Feminine Network</title>
        <meta
          name="description"
          content="Meet the trusted partners powering Simply Feminine Network across justice, advocacy, and education."
        />
      </Helmet>

      <motion.section className="page-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <span className="eyebrow">Partners</span>
        <h1>We collaborate with thoughtful organizations that share our values.</h1>
        <p>
          Our partnerships are built on shared ethics, strategic care, and
          lasting support for communities.
        </p>
      </motion.section>

      <div className="partners-grid">
        {partners.map((name) => (
          <motion.div key={name} className="partner-card" whileHover={{ scale: 1.01 }}>
            <span>{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
