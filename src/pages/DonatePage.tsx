import { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'

export default function DonatePage() {
  const amounts = [500, 1000, 5000]
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
          content="Your generosity creates agency - support our work to restore dignity and empower women."
        />
      </Helmet>

      {/* PageHero */}
      <PageHero
        eyebrow="Your generosity creates agency."
        title="Every contribution builds power"
        titleAccent="builds power"
        description="When you give to SFN, you're not just funding programs - you're investing in women's leadership, justice reform, and community transformation."
      />

      {/* Two-column split */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="donate-split-section"
      >
        <div className="page-shell">
          <div className="impact-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Left: Donation form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="donation-form-card"
            >
              <div style={{
                background: 'linear-gradient(135deg, #3a1668 0%, #6d3399 100%)',
                color: 'white',
                padding: '2.5rem',
                borderRadius: '32px',
                boxShadow: '0 18px 40px rgba(17, 11, 42, 0.08)'
              }}>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
                  marginBottom: '1.5rem'
                }}>
                  Make your contribution
                </h2>

                {/* Amount selection */}
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{
                    fontSize: '1rem',
                    marginBottom: '0.75rem',
                    opacity: '0.9'
                  }}>
                    Choose your amount
                  </p>
                  <div className="donation-options" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.85rem'
                  }}>
                    {amounts.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => {
                          setSelected(value)
                          setCustom('')
                        }}
                        className={`pill ${selected === value && !custom ? 'active' : ''}`}
                        style={{
                          padding: '0.95rem 1.2rem',
                          fontSize: '0.9rem',
                          border: selected === value && !custom
                            ? 'none'
                            : '1px solid rgba(255, 255, 255, 0.3)',
                          background: selected === value && !custom
                            ? 'transparent'
                            : 'rgba(255, 255, 255, 0.15)',
                          color: selected === value && !custom
                            ? 'white'
                            : 'rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        KES {value}
                      </button>
                    ))}
                    <label className="field-group" style={{
                      flex: '1',
                      minWidth: '120px'
                    }}>
                      <span style={{
                        display: 'block',
                        fontSize: '0.9rem',
                        marginBottom: '0.25rem',
                        opacity: '0.9'
                      }}>
                        Custom amount
                      </span>
                      <input
                        type="number"
                        placeholder="KES"
                        value={custom}
                        onChange={(event) => setCustom(event.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.95rem 1.15rem',
                          border: '1px solid rgba(94, 88, 124, 0.14)',
                          borderRadius: '22px',
                          background: 'rgba(255, 255, 255, 0.82)',
                          color: 'white',
                          fontSize: '1rem'
                        }}
                      />
                    </label>
                  </div>
                </div>

                {/* Payment method toggle */}
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{
                    fontSize: '1rem',
                    marginBottom: '0.75rem',
                    opacity: '0.9'
                  }}>
                    Payment method
                  </p>
                  <div className="payment-toggle" style={{
                    display: 'flex',
                    gap: '0.85rem'
                  }}>
                    {['M-Pesa', 'Credit / Debit Card'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setMethod(option)}
                        className={`pill ${method === option ? 'active' : ''}`}
                        style={{
                          padding: '0.95rem 1.2rem',
                          fontSize: '0.9rem',
                          border: method === option
                            ? 'none'
                            : '1px solid rgba(255, 255, 255, 0.3)',
                          background: method === option
                            ? 'transparent'
                            : 'rgba(255, 255, 255, 0.15)',
                          color: method === option
                            ? 'white'
                            : 'rgba(255, 255, 255, 0.8)'
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <AnimatePresence mode="wait">
                  {completed ? (
                    <motion.div
                      key="thank-you"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="thank-you-panel"
                      style={{
                        marginTop: '1.5rem',
                        padding: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.15)',
                        borderRadius: '24px'
                      }}
                    >
                      <h3 style={{
                        marginBottom: '0.75rem',
                        fontSize: '1.25rem'
                      }}>
                        Thank you for your support.
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        opacity: '0.9'
                      }}>
                        Your donation of KES {amount.toLocaleString()} will fund
                        dignity kits, education programs, and justice outreach.
                      </p>
                    </motion.div>
                  ) : (
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => setCompleted(true)}
                      style={{
                        width: '100%',
                        padding: '1rem 1.75rem',
                        fontSize: '0.95rem',
                        background: 'linear-gradient(135deg, #c8922f 0%, #e6b337 100%)',
                        boxShadow: '0 18px 48px rgba(200, 162, 77, 0.24)'
                      }}
                    >
                      Donate KES {amount.toLocaleString()} via {method}
                    </button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right: Why it matters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="why-it-matters"
            >
              <div style={{ padding: '2rem' }}>
                <h2 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem',
                  color: '#3a1668',
                  marginBottom: '1.5rem'
                }}>
                  Why it matters
                </h2>

                <p style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.7',
                  color: 'rgba(30, 27, 41, 0.78)',
                  marginBottom: '2rem'
                }}>
                  Your contribution goes directly to programs that create lasting change. We prioritize trust, transparency, and tangible outcomes in everything we do.
                </p>

                {/* Checkmarked list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      background: 'linear-gradient(135deg, #c8922f 0%, #e6b337 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      {/* Checkmark */}
                      <span style={{
                        color: 'white',
                        fontSize: '1rem',
                        lineHeight: 1
                      }}>
                        � ✓
                      </span>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgba(30, 27, 41, 0.78)',
                        margin: 0
                      }}>
                        Justice outreach that provides legal education and support to women in detention
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      background: 'linear-gradient(135deg, #c8922f 0%, #e6b337 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <span style={{
                        color: 'white',
                        fontSize: '1rem',
                        lineHeight: 1
                      }}>
                        � ✓
                      </span>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgba(30, 27, 41, 0.78)',
                        margin: 0
                      }}>
                        Sanitary towel drives that keep girls in school with dignity and confidence
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '4px',
                      background: 'linear-gradient(135deg, #c8922f 0%, #e6b337 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: '0'
                    }}>
                      <span style={{
                        color: 'white',
                        fontSize: '1rem',
                        lineHeight: 1
                      }}>
                        � ✓
                      </span>
                    </div>
                    <div>
                      <p style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.7',
                        color: 'rgba(30, 27, 41, 0.78)',
                        margin: 0
                      }}>
                        Mentorship and leadership development for the next generation of women leaders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}