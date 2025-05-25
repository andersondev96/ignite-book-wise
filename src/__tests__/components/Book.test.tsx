import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'

import { Book } from '@/src/components/Book'

const mockBook = {
  id: '04c3f36a-456b-46a4-a115-82e749f458a0',
  name: 'Clean Code',
  author: 'Robert C.Martin',
  summary: 'A handbook of agile software craftsmanship.',
  cover_url: 'public/images/clean-code.jpg',
  total_pages: 464,
  created_at: new Date('2008-08-01'),
  avgRating: 4,
}

describe('<Book />', () => {
  it('renders the book name, author, and cover image', () => {
    render(<Book book={mockBook} />)
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
  })
})
