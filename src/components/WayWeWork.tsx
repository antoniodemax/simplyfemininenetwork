import { motion } from 'framer-motion'

export default function WayWeWork() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="way-we-work-section"
    >
      <div className="way-we-work-content">
        <span className="way-we-work-eyebrow">The way we work</span>
        <h2 className="way-we-work-title">Our guiding principles</h2>
        <div className="way-we-work-grid">
          {/* Column 1 */}
          <div className="way-we-work-column">
            <div className="way-we-work-item">
              <span className="way-we-work-number">01</span>
              <h3>Listen before we lead</h3>
              <p>
                We center lived experience, ensuring solutions are shaped by
                the women and communities we serve.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="way-we-work-column">
            <div className="way-we-work-item">
              <span className="way-we-work-number">02</span>
              <h3>Make systems more human</h3>
              <p>
                We redesign legal, health and economic structures to be
                compassionate, accessible and trauma-informed.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="way-we-work-column">
            <div className="way-we-work-item">
              <span className="way-we-work-number">03</span>
              <h3>Build for the long term</h3>
              <p>
                We invest in leadership, infrastructure and advocacy that
                creates lasting change beyond our programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}