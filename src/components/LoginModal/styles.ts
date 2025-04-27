import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '@/stitches.config'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  width: '516px',
  height: '334px',
  maxHeight: '100vh',
  borderRadius: '4px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '56px 72px',

  backgroundColor: '$gray800',
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray200',
})

export const LoginContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$gray200',
  },
})

export const AuthButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '40px',
})
