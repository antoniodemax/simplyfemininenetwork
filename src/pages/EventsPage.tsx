import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { events } from '../data/site'
import { ArrowRight } from 'lucide-react'

export default function EventsPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Events | Simply Feminine Network</title>
        <meta
          name="description"
          content="Join us for upcoming gatherings that bring our community together to imagine change and celebrate progress."
        />
      </Helmet>

      {/* PageHero */}
      <PageHero
        eyebrow="Change is easier to imagine when we gather."
        title="Events that connect, inspire and mobilize"
        titleAccent="connect, inspire and mobilize"
        description="From intimate strategy sessions to large-scale convenings, our events create space for dialogue, partnership and collective action."
      />

      {/* Events list */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="events-list-section"
      >
        <div className="page-shell">
          <div className="events-list">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="event-row"
              >
                {/* Divider between rows (except first) */}
                {index > 0 && <div className="event-divider" />}

                <div className="event-row-content">
                  {/* Date/label column */}
                  <div className="event-date-column">
                    <p className="event-label">{event.label}</p>
                    <time dateTime={event.date}>
                      {new Date(event.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>

                  {/* Title + description */}
                  <div className="event-details">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                  </div>

                  {/* Circular arrow-icon link */}
                  <div className="event-link-column">
                    <a href="/contact" className="event-arrow-link" aria-label="Learn more about this event">
                      <ArrowRight size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}