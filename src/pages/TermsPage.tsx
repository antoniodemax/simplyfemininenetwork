import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Terms | Simply Feminine Network</title>
      </Helmet>

      <motion.section className="page-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <span className="eyebrow">Terms of Use</span>
        <h1>Our site terms, responsibility, and the way we serve our community.</h1>
      </motion.section>

      <div className="policy-copy">
        <p>These terms outline the use of this site and our commitment to delivering a secure and accessible digital experience.</p>
        <p>While we do not process real payments through this demo site, all donation interactions are presented in a secure, trust-centered format.</p>
      </div>
    </div>
  )
}
