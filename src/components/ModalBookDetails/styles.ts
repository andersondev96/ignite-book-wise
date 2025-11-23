import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'

import { styled } from '@/stitches.config'

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
  gap: '2.5rem',
  width: '680px',
  maxWidth: '100%',
  height: '100vh',
  borderRadius: '0 0 0 12px',
  position: 'fixed',
  right: 0,
  top: 0,
  padding: '64px 48px',
  backgroundColor: '$gray800',
  overflowY: 'auto',
  animation: `${contentShow} 300ms ease-in-out forwards`,
  transform: 'translateY(-50%)',

  '&[data-state="open"]': {
    outline: 'none',
  },

  '&[data-state="closed"]': {
    animation: `${contentHide} 300ms ease-in-out forwards`,
  },

  '@media (max-width: 768px)': {
    width: '100%',
    padding: '48px 24px',
    borderRadius: 0,
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

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  backgroundColor: '$gray700',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
})

export const BookData = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',

  img: {
    width: '171px',
    height: '242px',
    borderRadius: '6px',
    objectFit: 'cover',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  },

  '@media (max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const BookDataDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TitleAndActorBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  strong: {
    fontSize: '$xl',
    fontWeight: '700',
    color: '$gray100',
    lineHeight: '1.4',
  },

  span: {
    fontSize: '$md',
    color: '$gray300',
  },
})

export const RatingBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const About = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '56px',
})

export const CatSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '$sm',
      color: '$gray300',
    },

    strong: {
      fontSize: '$xs',
      fontWeight: 'bold',
      color: '$gray200',
    },
  },

  svg: {
    color: '$green100',
  },
})

export const Pages = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  div: {
    display: 'flex',
    flexDirection: 'column',

    span: {
      fontSize: '$sm',
      color: '$gray300',
    },

    strong: {
      fontSize: '$xs',
      fontWeight: 'bold',
      color: '$gray200',
    },
  },

  svg: {
    color: '$green100',
  },
})
export const RatingsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  paddingTop: '1rem',
})

export const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$lg',
    fontWeight: '600',
    color: '$gray100',
  },

  strong: {
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$purple100',
    cursor: 'pointer',

    '&:hover': {
      TextDecoder: 'underline',
    },
  },
})
