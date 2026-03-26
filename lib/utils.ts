import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { CALENDLY_URL } from './constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildCalendlyUrl(firstName: string, lastName: string, email: string): string {
  const params = new URLSearchParams({
    first_name: firstName,
    last_name: lastName,
    email: email,
  })
  return `${CALENDLY_URL}?${params.toString()}`
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
