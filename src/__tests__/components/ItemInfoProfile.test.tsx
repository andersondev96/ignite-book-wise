import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'

import { ItemInfoProfile } from '@/src/components/ItemInfoProfile'

describe('<ItemInfoProfile />', () => {
  // Teste de snapshot
  it('matches snapshot', () => {
    const IconMock = () => <span data-testid="item-icon">Icon</span>

    const { container } = render(
      <ItemInfoProfile
        icon={<IconMock />}
        title="200"
        description="Páginas Lidas"
      />,
    )

    expect(container).toMatchSnapshot()
  })

  it('renders item with icon, title and description', () => {
    const IconMock = () => <span data-testid="item-icon">Icon</span>

    render(
      <ItemInfoProfile
        icon={<IconMock />}
        title="200"
        description="Páginas Lidas"
      />,
    )

    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('Páginas Lidas')).toBeInTheDocument()
    expect(screen.getByTestId('item-icon')).toBeInTheDocument()
  })
})
