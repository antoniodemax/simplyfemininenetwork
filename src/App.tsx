import { Suspense, lazy } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProgramsPage = lazy(() => import('./pages/ProgramsPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const VolunteerPage = lazy(() => import('./pages/VolunteerPage'))
const DonatePage = lazy(() => import('./pages/DonatePage'))
const StoriesPage = lazy(() => import('./pages/StoriesPage'))
const PartnersPage = lazy(() => import('./pages/PartnersPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))

function App() {
  const location = useLocation()

  return (
    <div className="app-shell bg-[#FCFAF8] text-[#1E1B29]">
      <Navigation />
      <main className="page-shell">
        <Suspense fallback={<div className="loading-state">Loading…</div>}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="inner-shell"
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/volunteer" element={<VolunteerPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
