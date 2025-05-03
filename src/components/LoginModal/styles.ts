import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '@/stitches.config'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  zIndex: 999,
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '480px',
  borderRadius: '$lg',
  padding: '3rem 2.5rem',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,

  '@media (max-width: 480px)': {
    padding: '2rem 1.5rem',
    maxWidth: '90%',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  background: 'transparent',
  border: 'none',
  color: '$gray400',
  cursor: 'pointer',
  lineHeight: 0,
})

export const LoginContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
})

export const Title = styled('h2', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray100',
  textAlign: 'center',
})

export const AuthButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',
})
