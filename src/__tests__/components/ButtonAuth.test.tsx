import { fireEvent, render, screen } from '@testing-library/react'
import { expect } from 'vitest'

import { ButtonAuth } from '@/src/components/ButtonAuth'

describe('<ButtonAuth />', () => {
  // Teste de snapshot
  it('matches snapshot', () => {
    const { container } = render(
      <ButtonAuth
        imageUrl="/images/icons/logo_google.svg"
        title="Entrar com o Google"
      />,
    )

    expect(container).toMatchSnapshot()
  })

  it('renders button title and image when imageUrl is provided', () => {
    render(
      <ButtonAuth
        imageUrl="/images/icons/logo_google.svg"
        title="Entrar com o Google"
      />,
    )

    expect(screen.getByText('Entrar com o Google')).toBeInTheDocument()
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/images/icons/logo_google.svg')
    expect(img).toHaveAttribute('alt', 'title')
  })

  it('renders icon when provided, instead of image', () => {
    const IconMock = () => <span data-testid="custom-icon">Icon</span>

    render(<ButtonAuth icon={<IconMock />} title="Entrar com X" />)

    expect(screen.getByText('Entrar com X')).toBeInTheDocument()
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()

    render(<ButtonAuth title="Clique aqui" onClick={handleClick} />)

    fireEvent.click(screen.getByText('Clique aqui'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
