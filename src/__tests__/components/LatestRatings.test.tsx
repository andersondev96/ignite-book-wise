import { randomUUID } from 'node:crypto'

import { render, screen, waitFor } from '@testing-library/react'
import { Session } from 'next-auth'
import { SessionProvider, useSession } from 'next-auth/react'
import { expect, vi, Mock } from 'vitest'

import { LatestRatings } from '@/src/components/LatestRatings'
import { api } from '@/src/lib/axios'

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    prefetch: vi.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}))

// Mock da API
vi.mock('@/src/lib/axios', () => ({
  api: {
    get: vi.fn(),
  },
}))

// Mock da sessão
vi.mock('next-auth/react', async () => {
  const actual = await vi.importActual('next-auth/react')
  return {
    ...actual,
    useSession: vi.fn(),
  }
})

const userId = randomUUID()

const mockSession: Session = {
  user: {
    id: userId,
    name: 'Test User',
    email: 'test@example.com',
    avatar_url: 'https://example.com/avatar.png',
  },
  expires: '2099-12-31T23:59:59.999Z',
}

const mockRating = {
  id: randomUUID(),
  rate: 5,
  description: 'Muito bom!',
  created_at: new Date(),
  book_id: randomUUID(),
  user_id: userId,
  book: {
    id: 'book-id',
    author: 'Test Author',
    name: 'Test Book',
    summary: 'This is a test book description.',
    cover_url: 'https://example.com/cover.png',
    total_pages: 300,
    created_at: new Date(),
  },
  user: {
    id: randomUUID(),
    name: 'Example User',
    email: 'example@email.com',
    avatar_url: 'https://example.com/avatar.png',
    created_at: new Date(),
  },
}

describe('<LatestRatings />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renderiza o loader enquanto está carregando', () => {
    ;(useSession as any).mockReturnValue({ data: null, status: 'loading' })

    render(
      <SessionProvider session={null}>
        <LatestRatings />
      </SessionProvider>,
    )

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('não renderiza nada se o usuário não estiver logado', async () => {
    ;(useSession as any).mockReturnValue({
      data: null,
      status: 'authenticated',
    })

    render(
      <SessionProvider session={null}>
        <LatestRatings />
      </SessionProvider>,
    )

    await waitFor(() => {
      expect(
        screen.queryByTestId(/sua última leitura/i),
      ).not.toBeInTheDocument()
    })
  })

  it('renderiza card com as últimas avaliações', async () => {
    ;(useSession as any).mockReturnValue({
      data: mockSession,
      status: 'authenticated',
    })
    ;(api.get as Mock).mockImplementation(async (url: string) => {
      if (url.includes('/ratings/latest')) {
        return { data: [mockRating] }
      }
      throw new Error('Unexpected API call')
    })

    render(
      <SessionProvider session={mockSession}>
        <LatestRatings />
      </SessionProvider>,
    )

    await waitFor(() => {
      expect(screen.getByText(/Avaliações mais recentes/i)).toBeInTheDocument()

      expect(screen.getByText(/Test Book/i)).toBeInTheDocument()
    })
  })

  it('não renderiza a última leitura se houver erro na API', async () => {
    ;(useSession as any).mockReturnValue({
      data: mockSession,
      status: 'authenticated',
    })
    ;(api.get as Mock).mockImplementation(async (url: string) => {
      if (url.includes('/ratings/latest')) {
        throw new Error('Erro ao buscar dados')
      }
      return {}
    })

    render(
      <SessionProvider session={mockSession}>
        <LatestRatings />
      </SessionProvider>,
    )

    await waitFor(() => {
      expect(screen.queryByText(/sua última leitura/i)).not.toBeInTheDocument()
    })
  })
})
