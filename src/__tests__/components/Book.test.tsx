import '@testing-library/jest-dom'
import { randomUUID } from 'node:crypto'

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { describe, it, expect, vi } from 'vitest'

import { Book } from '@/src/components/Book'

vi.mock('../../components/ModalBookDetails', () => ({
  ModalBookDetails: ({ id }: { id: string }) => (
    <div data-testid="modal-book-details">Modal for Book ID: {id}</div>
  ),
}))

vi.mock('../../components/ui/Stars', () => ({
  Stars: ({ rate }: { rate: number }) => (
    <div data-testid="stars" data-rate={rate}></div>
  ),
}))

const mockBook = {
  id: '04c3f36a-456b-46a4-a115-82e749f458a0',
  name: 'Clean Code',
  author: 'Robert C. Martin',
  summary: 'A handbook of agile software craftsmanship.',
  cover_url: 'public/images/clean-code.jpg',
  total_pages: 464,
  created_at: new Date('2008-08-01'),
  avgRating: 4,
}

const mockSession: Session = {
  user: {
    id: randomUUID(),
    name: 'Test User',
    email: 'test@example.com',
    avatar_url: 'https://example.com/avatar.png',
  },
  expires: '2099-12-31T23:59:59.999Z',
}

describe('<Book />', () => {
  // Teste de snapshot
  it('matches snapshot', () => {
    const { container } = render(
      <SessionProvider session={mockSession}>
        <Book book={mockBook} />
      </SessionProvider>,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders the book name, author, and cover image', () => {
    render(
      <SessionProvider session={mockSession}>
        <Book book={mockBook} />
      </SessionProvider>,
    )

    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Robert C. Martin')).toBeInTheDocument()
    expect(screen.getByAltText('Clean Code')).toHaveAttribute(
      'src',
      '/images/clean-code.jpg',
    )
  })

  it('renders the correct average rating', () => {
    render(
      <SessionProvider session={mockSession}>
        <Book book={mockBook} />
      </SessionProvider>,
    )

    const stars = screen.getByTestId('stars')
    expect(stars).toBeInTheDocument()
    expect(stars).toHaveAttribute('data-rate', '4')
  })

  it('renders different average ratings', () => {
    const ratings = [0, 2.5, 5]
    ratings.forEach((avgRating) => {
      render(
        <SessionProvider session={mockSession}>
          <Book book={{ ...mockBook, avgRating }} />
        </SessionProvider>,
      )
      const stars = screen.getByTestId('stars')
      expect(stars).toHaveAttribute('data-rate', avgRating.toString())
      cleanup()
    })
  })

  it('opens modal when book card is clicked', () => {
    render(
      <SessionProvider session={mockSession}>
        <Book book={mockBook} />
      </SessionProvider>,
    )

    fireEvent.click(screen.getByText('Clean Code'))

    const modalBook = screen.getByTestId('modal-book-details')
    expect(modalBook).toBeInTheDocument()
    expect(
      screen.getByText(
        'Modal for Book ID: 04c3f36a-456b-46a4-a115-82e749f458a0',
      ),
    ).toBeInTheDocument()
  })
})
