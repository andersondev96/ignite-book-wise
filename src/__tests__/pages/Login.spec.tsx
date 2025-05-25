import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'

import Login from '../../pages/login/index.page'

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}))

describe('Página de Login', () => {
  it('Página de login está renderizando', () => {
    render(<Login />)

    expect(screen.getByText('Boas vindas!')).toBeInTheDocument()
    expect(screen.getByText(/Faça seu login/i)).toBeInTheDocument()
  })
})
