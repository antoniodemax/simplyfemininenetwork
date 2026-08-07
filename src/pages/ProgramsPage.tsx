import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Droplet, Scale, Sparkles } from 'lucide-react'

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Justice System Outreach',
      description:
        'Restorative legal guidance, family reconciliation and advocacy for women behind bars.',
      icon: Scale,
    },
    {
      title: 'Sanitary Towel Drives',
      description:
        'Care packages, dignity education and sustainable hygiene in rural and urban schools.',
      icon: Droplet,
    },
    {
      title: 'Mentorship & Leadership',
      description:
        'Curated leadership circles that nurture confidence, economic agency and civic voice.',
      icon: Sparkles,
    },
  ]

  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Programs | Simply Feminine Network</title>
        <meta
          name="description"
          content="Explore the signature programs of Simply Feminine Network, including prison outreach, hygiene initiatives, and leadership development."
        />
      </Helmet>

      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">Programs</span>
        <h1>Designed programs that meet complex needs with elegant care.</h1>
        <p>
          From restorative justice work to community-led mentorship, our programs
          combine empathy, evidence and local leadership.
        </p>
      </motion.section>

      <div className="program-grid program-page-grid">
        {programs.map((program) => {
          const Icon = program.icon
          return (
            <motion.article
              key={program.title}
              className="program-card large"
              whileHover={{ y: -8 }}
            >
              <div className="program-icon-large">
                <Icon size={28} />
              </div>
              <h2>{program.title}</h2>
              <p>{program.description}</p>
              <button type="button" className="button button-tertiary">
                Learn more
              </button>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
