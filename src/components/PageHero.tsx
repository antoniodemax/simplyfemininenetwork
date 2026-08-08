import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow: string
  title: string
  titleAccent?: string  // Word/phrase to accent with pink or gold
  description: string
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  description
}: PageHeroProps) {
  // Split title into parts for accent styling
  const titleParts = title.split(' ')
  const hasAccent = titleAccent !== undefined

  return (
    <>
      {/* Full-bleed hero band */}
// We'll implement the actual component logic here after planning
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-hero-band"
      >
        <div className="page-hero-content">
          <span className="page-eyebrow">{eyebrow}</span>
          <h1 className="page-title">
            {titleParts.map((word, index) => {
              // Check if this word (or phrase) should be accented
              if (hasAccent && titleAccent &&
                  title.toLowerCase().includes(titleAccent.toLowerCase()) &&
                  word.toLowerCase() === titleAccent.split(' ')[0]) {
                // For multi-word accent, we'd need more complex logic
                // Simplified: accent the first matching word
                return (
                  <span key={index} className="page-title-accent">
                    {word}
                  </span>
                )
              }
              return <span key={index}>{word}</span>
            })}
          </h1>
          <p className="page-description">{description}</p>
        </div>
      </motion.div>
    </>
  )
}