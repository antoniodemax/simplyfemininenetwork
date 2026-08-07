import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const stories = [
  {
    title: 'From Prison Cell to Community Advocate',
    subtitle: 'Her story became a rallying point for restorative justice and renewed family trust.',
    quote: 'I found my voice when others chose to listen and believe in my future.',
  },
  {
    title: 'Leadership in a New Light',
    subtitle: 'A rural educator turned mentor now leads national coaching circles.',
    quote: 'When I was given space to lead, I learned that my story mattered.',
  },
]

export default function StoriesPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Stories | Simply Feminine Network</title>
        <meta
          name="description"
          content="Read the impact stories from Simply Feminine Network's participants and partners."
        />
      </Helmet>

      <motion.section className="page-hero" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <span className="eyebrow">Stories</span>
        <h1>Powerful narratives that underline dignity, resilience, and leadership.</h1>
        <p>
          Each story is a carefully held reflection of hope, courage and the
          systems that helped women thrive again.
        </p>
      </motion.section>

      <div className="stories-grid page-stories-grid">
        {stories.map((story) => (
          <motion.article key={story.title} className="story-card large" whileHover={{ y: -8 }}>
            <div className="story-copy">
              <span className="eyebrow">Impact story</span>
              <h2>{story.title}</h2>
              <p>{story.subtitle}</p>
              <blockquote>“{story.quote}”</blockquote>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
