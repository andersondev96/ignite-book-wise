import { styled } from '@/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const contentShow = keyframes({
  '0%': { transform: 'translateX(100%)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
})

const contentHide = keyframes({
  '0%': { transform: 'translateX(0)', opacity: 1 },
  '100%': { transform: 'translateX(100%)', opacity: 0 },
})

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  animation: `${overlayShow} 300ms ease-in-out forwards`,
  '&[data-state="closed"]': {
    animation: `${overlayHide} 300ms ease-in-out forwards`,
  },
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  width: '680px',
  height: '100%',
  borderRadius: '4px',
  position: 'fixed',
  right: 0,
  top: 0,
  padding: '64px 48px',

  backgroundColor: '$gray800',

  animation: `${contentShow} 300ms ease-in-out forwards`,

  '&[data-state="open"]': {
    outline: 'none',
  },

  '&[data-state="closed"]': {
    animation: `${contentHide} 300ms ease-in-out forwards`,
  },
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

export const BookInfo = styled('div', {})

export const Divisor = styled('div', {})

export const RattingsSection = styled('div', {})
