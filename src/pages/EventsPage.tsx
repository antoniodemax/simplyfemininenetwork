import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const events = [
  {
    title: 'Annual Charity Gala Ball',
    location: 'Nairobi',
    date: '2026-11-22',
    label: 'Nov 22',
    description: 'An evening of culture, awards and funding for the next season of impact.',
  },
  {
    title: "Women's Leadership Summit",
    location: 'Berlin',
    date: '2026-12-09',
    label: 'Dec 09',
    description: 'Global changemakers gather to explore justice, education and partnerships.',
  },
]

function useCountdown(dateString: string) {
  return useMemo(() => {
    const diff = Math.max(0, Math.ceil((new Date(dateString).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    return `${diff} days`;
  }, [dateString])
}

export default function EventsPage() {
  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Events | Simply Feminine Network</title>
        <meta
          name="description"
          content="View upcoming Simply Feminine Network events, including our Nairobi Gala Ball and global leadership summit."
        />
      </Helmet>

      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">Events</span>
        <h1>Experiences crafted to elevate women’s voices and funding momentum.</h1>
        <p>
          Join us for curated gatherings that build partnerships, celebrate courage,
          and amplify the future of women-led justice and education.
        </p>
      </motion.section>

      <div className="events-grid page-events-grid">
        {events.map((event) => (
          <motion.article key={event.title} className="event-card large" whileHover={{ y: -8 }}>
            <div className="event-date-card">
              <strong>{event.label}</strong>
              <span>{event.location}</span>
            </div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <div className="event-meta">
              <span>
                <MapPin size={16} /> {event.location}
              </span>
              <span>{useCountdown(event.date)}</span>
            </div>
            <button type="button" className="button button-primary">
              Reserve your seat
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
