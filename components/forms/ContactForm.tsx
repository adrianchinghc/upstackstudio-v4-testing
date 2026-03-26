'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { cn } from '@/lib/utils'
import { submitToHubSpot } from '@/lib/hubspot'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Loader2, Send, CheckCircle } from 'lucide-react'

const contactSchema = z.object({
  firstname: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Please provide more detail in your message'),
})

type ContactFormData = z.infer<typeof contactSchema>

const SUBJECT_OPTIONS = [
  { value: '', label: 'Select a subject' },
  { value: 'general', label: 'General enquiry' },
  { value: 'support', label: 'Existing project support' },
  { value: 'partnership', label: 'Partnership or collaboration' },
  { value: 'press', label: 'Press or media' },
  { value: 'other', label: 'Other' },
]

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstname: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    const { success, error } = await submitToHubSpot(data, 'contact')

    if (!success) {
      toast.error(error ?? 'Something went wrong. Please try again.')
      setIsSubmitting(false)
      return
    }

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className={cn('text-center py-12', className)}>
        <CheckCircle className="h-16 w-16 text-sky-accent mx-auto mb-6" />
        <h3 className="text-xl font-semibold mb-3">Thanks for reaching out.</h3>
        <p className="text-secondary">
          We'll get back to you within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-6', className)}>
      {/* Name */}
      <div>
        <label htmlFor="firstname" className="block text-sm font-medium mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="firstname"
          type="text"
          {...register('firstname')}
          className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
        />
        {errors.firstname && (
          <p className="mt-1 text-sm text-red-500">{errors.firstname.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company
        </label>
        <input
          id="company"
          type="text"
          {...register('company')}
          className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <select
          id="subject"
          {...register('subject')}
          className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]"
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="How can we help?"
          className="w-full rounded-lg border border-default bg-surface px-4 py-3 text-base placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
