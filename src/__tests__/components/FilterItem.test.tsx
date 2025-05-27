import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'

import { FilterItem } from '@/src/components/FilterItem'

describe('<FilterItem />', () => {
  // Teste de snapshot
  it('renders with default styles when not active', () => {
    const { container } = render(
      <FilterItem title="suspense" active={false} onClick={() => {}} />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders with active styles when active', () => {
    const { container } = render(
      <FilterItem title="suspense" active onClick={() => {}} />,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders filter title', () => {
    const handleClick = vi.fn()

    render(<FilterItem title="suspense" active onClick={handleClick} />)

    expect(screen.getByText('suspense')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()

    render(<FilterItem title="suspense" active={false} onClick={handleClick} />)

    const element = screen.getByText('suspense').parentElement!
    element.click()

    expect(handleClick).toHaveBeenCalled()
  })
})
