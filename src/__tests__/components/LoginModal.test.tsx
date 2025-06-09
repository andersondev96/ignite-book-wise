import * as Dialog from '@radix-ui/react-dialog'
import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { signIn } from 'next-auth/react'
import { expect } from 'vitest'

import { LoginModal } from '@/src/components/LoginModal'

vi.mock('next-auth/react', () => ({
  signIn: vi.fn(),
}))

vi.mock('@phosphor-icons/react', () => ({
  X: () => <div>X</div>,
}))

vi.mock('../ButtonAuth', () => ({
  ButtonAuth: ({ title, onClick }: any) => (
    <button onClick={onClick}>{title}</button>
  ),
}))

describe('<LoginModal />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  function renderModalOpen() {
    return render(
      <Dialog.Root open>
        <LoginModal />
      </Dialog.Root>,
    )
  }

  it('deve exibir o título e os botões de login', () => {
    renderModalOpen()

    expect(screen.getByText('Entrar com Google')).toBeInTheDocument()
    expect(screen.getByText('Entrar com Github')).toBeInTheDocument()
  })

  it('deve chamar o signIn ao clicar em um botão de login', async () => {
    renderModalOpen()

    const googleButton = screen.getByText('Entrar com Google')
    fireEvent.click(googleButton)

    expect(signIn).toHaveBeenCalledWith('google', { callbackUrl: '/' })
  })
})
