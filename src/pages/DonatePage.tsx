import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'

const amounts = [500, 1000, 5000]

export default function DonatePage() {
  const [selected, setSelected] = useState(1000)
  const [custom, setCustom] = useState('')
  const [method, setMethod] = useState('M-Pesa')
  const [completed, setCompleted] = useState(false)

  const amount = useMemo(() => {
    const parsed = Number(custom)
    return parsed > 0 ? parsed : selected
  }, [custom, selected])

  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Donate | Simply Feminine Network</title>
        <meta
          name="description"
          content="Donate to Simply Feminine Network and support justice outreach, sanitary drives, mentorship, and community care."
        />
      </Helmet>

      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">Donate</span>
        <h1>Elevate impact through a premium, secure giving experience.</h1>
        <p>
          Select a contribution that feels right to you, and watch it turn into
          meaningful support for women, children and communities.
        </p>
      </motion.section>

      <section className="donation-page-grid">
        <div className="donation-panel">
          <div className="section-card">
            <span className="eyebrow">Giving tiers</span>
            <div className="donation-options">
              {amounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setSelected(value)
                    setCustom('')
                  }}
                  className={`pill ${selected === value && !custom ? 'active' : ''}`}
                >
                  KES {value}
                </button>
              ))}
            </div>
            <label className="field-group">
              <span>Custom amount</span>
              <input
                type="number"
                placeholder="KES 750"
                value={custom}
                onChange={(event) => setCustom(event.target.value)}
              />
            </label>
            <div className="payment-toggle" role="group" aria-label="Payment method">
              {['M-Pesa', 'Credit / Debit Card'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMethod(option)}
                  className={`pill ${method === option ? 'active' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {completed ? (
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="thank-you-panel"
                >
                  <h3>Thank you for your support.</h3>
                  <p>
                    Your donation of KES {amount.toLocaleString()} will fund
                    dignity kits and education programs.
                  </p>
                </motion.div>
              ) : (
                <button
                  type="button"
                  className="button button-primary button-full"
                  onClick={() => setCompleted(true)}
                >
                  Donate KES {amount.toLocaleString()} via {method}
                </button>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="card-preview">
          <div className="payment-card">
            <div className="payment-card-top">
              <span className="eyebrow">Secure checkout</span>
              <span className="payment-type">{method}</span>
            </div>
            <h2>KES {amount.toLocaleString()}</h2>
            <p>Supporting dignity, education, and reintegration programs.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
