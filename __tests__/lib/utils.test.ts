import { describe, it, expect } from 'vitest'
import { cn, buildCalendlyUrl, formatDate, slugify } from '@/lib/utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'included', false && 'excluded')).toBe('base included')
  })

  it('handles undefined and null values', () => {
    expect(cn('base', undefined, null, 'end')).toBe('base end')
  })

  it('merges Tailwind classes correctly', () => {
    expect(cn('px-4 py-2', 'px-6')).toBe('py-2 px-6')
  })

  it('handles empty input', () => {
    expect(cn()).toBe('')
  })
})

describe('buildCalendlyUrl', () => {
  it('builds URL with query parameters', () => {
    const url = buildCalendlyUrl('John', 'Doe', 'john@example.com')
    expect(url).toContain('first_name=John')
    expect(url).toContain('last_name=Doe')
    expect(url).toContain('email=john%40example.com')
  })

  it('handles special characters in names (URL encoded)', () => {
    const url = buildCalendlyUrl("O'Brien", 'Smith', 'test@test.com')
    expect(url).toContain('first_name=O%27Brien')
  })
})

describe('formatDate', () => {
  it('formats date string correctly', () => {
    const formatted = formatDate('2024-03-15')
    expect(formatted).toContain('March')
    expect(formatted).toContain('15')
    expect(formatted).toContain('2024')
  })

  it('formats Date object correctly', () => {
    const formatted = formatDate(new Date('2024-12-25'))
    expect(formatted).toContain('December')
    expect(formatted).toContain('25')
    expect(formatted).toContain('2024')
  })
})

describe('slugify', () => {
  it('converts text to lowercase slug', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('removes special characters', () => {
    expect(slugify('Hello! World?')).toBe('hello-world')
  })

  it('handles multiple spaces and dashes', () => {
    expect(slugify('Hello   World---Test')).toBe('hello-world-test')
  })

  it('trims leading and trailing dashes', () => {
    expect(slugify('--Hello World--')).toBe('hello-world')
  })

  it('handles empty string', () => {
    expect(slugify('')).toBe('')
  })
})
