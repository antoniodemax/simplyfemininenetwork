import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Privacy Policy | Simply Feminine Network</title>
      </Helmet>

      <motion.section className="page-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <span className="eyebrow">Privacy Policy</span>
        <h1>How we protect your privacy and handle data responsibly.</h1>
      </motion.section>

      <div className="policy-copy">
        <p>We respect your privacy. Any information shared through our contact forms is used only to support your inquiry and will never be sold.</p>
        <p>Our site uses secure methods for donation selection and contact. We strive to follow best practices for data security and accessibility across all digital experiences.</p>
      </div>
    </div>
  )
}
