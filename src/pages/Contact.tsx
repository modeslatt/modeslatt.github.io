import { useState, useEffect } from 'react'
import { FileText, Mail, Send } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/ui/SectionHeading'

// interface FormValues {
//   name: string
//   email: string
//   message: string
// }

// interface FormErrors {
//   name?: string
//   email?: string
//   message?: string
//   serverError?: string
// }

// const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// const BACK_URL: string = import.meta.env.VITE_BACK_URL;

// function validate(values: FormValues): FormErrors {
//   const errors: FormErrors = {}

//   if (values.name.trim().length < 2) errors.name = 'name must be at least 2 characters'
//   if (!EMAIL_PATTERN.test(values.email)) errors.email = 'enter a valid email address'
//   if (values.message.trim().length < 10) errors.message = 'message must be at least 10 characters'

//   return errors
// }

export function Contact() {
  // const [values, setValues] = useState<FormValues>({ name: '', email: '', message: '' })
  // const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isSubmitted) setIsSubmitted(false)
    }, 3000);

    return () => { 
      clearTimeout(timeout)
    }
  }, [isSubmitted])

  // function handleChange(field: keyof FormValues, value: string) {
  //   setValues((prev) => ({ ...prev, [field]: value }))
  // }

  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault()
  //   const validationErrors = validate(values)
  //   setErrors(validationErrors)

  //   if (Object.keys(validationErrors).length === 0) {
  //     fetch(BACK_URL + '/send-message', {
  //       method: "POST",
  //       body: JSON.stringify(values),
  //       headers: { "Content-Type": "application/json" }
  //     }).then(() => {
  //       setValues({ name: '', email: '', message: '' })
  //       setIsSubmitted(true)
  //     }).catch((err: any) => {
  //       setErrors({ serverError: 'Internal Server Error' })
  //       console.error(err)
  //     })
  //   }
  // }

  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <section>
        <SectionHeading command="cat contact.json" />
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <Mail size={16} className="text-term-green" />
            <a href={`mailto:${profile.email}`} className="text-term-gray hover:text-term-white">
              {profile.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Send size={16} className="text-term-green" />
            <a href={profile.telegramUrl} target="_blank" rel="noreferrer" className="text-term-gray hover:text-term-white">
              t.me/{profile.telegramHandle.replace('@', '')}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <FileText size={16} className="text-term-green" />
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-term-gray hover:text-term-white">
              cv.pdf
            </a>
          </li>
        </ul>
      </section>

      {/* <section>
        <SectionHeading command="./send-message.sh" />

        {isSubmitted ? (
          <p className="text-sm text-term-green">
            <span className="text-term-gray">&gt;</span> message sent. status: 200 OK. I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 animate-fade-up">
            <label className="flex flex-col gap-1 text-sm">
              <span className="text-term-gray-dim">name</span>
              <input
                value={values.name}
                onChange={(event) => handleChange('name', event.target.value)}
                className="border border-term-border bg-term-bg-alt px-3 py-2 text-term-white outline-none focus:border-term-green"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className="text-xs text-term-red">{errors.name}</span>}
            </label>

            <label className="flex flex-col gap-1 text-sm">
              <span className="text-term-gray-dim">email</span>
              <input
                type="email"
                value={values.email}
                onChange={(event) => handleChange('email', event.target.value)}
                className="border border-term-border bg-term-bg-alt px-3 py-2 text-term-white outline-none focus:border-term-green"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="text-xs text-term-red">{errors.email}</span>}
            </label>

            <label className="flex flex-col gap-1 text-sm">
              <span className="text-term-gray-dim">message</span>
              <textarea
                value={values.message}
                onChange={(event) => handleChange('message', event.target.value)}
                rows={5}
                className="resize-none border border-term-border bg-term-bg-alt px-3 py-2 text-term-white outline-none focus:border-term-green"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className="text-xs text-term-red">{errors.message}</span>}
            </label>

            <button
              type="submit"
              className="self-start border border-term-green px-4 py-2 text-sm text-term-green transition-colors hover:bg-term-green hover:text-term-bg"
            >
              $ send --message
            </button>
            {errors.serverError && <span className="text-xs text-term-red">{errors.serverError}</span>}
          </form>
        )}
      </section> */}
    </div>
  )
}
