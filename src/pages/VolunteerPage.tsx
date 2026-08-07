import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'

const volunteerSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  reason: z.string().min(10, 'Tell us why you want to volunteer'),
})

type VolunteerForm = z.infer<typeof volunteerSchema>

export default function VolunteerPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<VolunteerForm>({ resolver: zodResolver(volunteerSchema) })

  const onSubmit = () => {
    window.setTimeout(() => {
      reset()
    }, 100)
  }

  return (
    <div className="page-shell page-content">
      <Helmet>
        <title>Volunteer | Simply Feminine Network</title>
        <meta
          name="description"
          content="Join Simply Feminine Network as a volunteer and support prison outreach, education, and leadership programs."
        />
      </Helmet>

      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">Volunteer</span>
        <h1>Bring your skills and compassion to a movement that honors women’s dignity.</h1>
        <p>
          Volunteer with us in mentoring, community outreach, event support and
          program development.
        </p>
      </motion.section>

      <motion.form
        className="form-shell"
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <label className="field-group">
          <span>Name</span>
          <input {...register('name')} />
          {errors.name && <span className="field-error">{errors.name.message}</span>}
        </label>
        <label className="field-group">
          <span>Email</span>
          <input type="email" {...register('email')} />
          {errors.email && <span className="field-error">{errors.email.message}</span>}
        </label>
        <label className="field-group">
          <span>Phone Number</span>
          <input type="tel" {...register('phone')} />
          {errors.phone && <span className="field-error">{errors.phone.message}</span>}
        </label>
        <label className="field-group">
          <span>Reason for volunteering</span>
          <textarea rows={4} {...register('reason')} />
          {errors.reason && <span className="field-error">{errors.reason.message}</span>}
        </label>
        <button type="submit" className="button button-primary button-full">
          {isSubmitSuccessful ? 'Thank you — we’ll be in touch' : 'Submit application'}
        </button>
      </motion.form>
    </div>
  )
}
