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
  backdropFilter: 'blur(3px)',
  animation: `${overlayShow} 300ms ease-in-out forwards`,
  zIndex: 999,
  '&[data-state="closed"]': {
    animation: `${overlayHide} 300ms ease-in-out forwards`,
  },
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '680px',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  borderRadius: '0 0 0 12px',
  background: '$gray800',
  padding: '48px 40px',
  boxShadow: '-8px 0 24px rgba(0,0,0,0.3)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  overflowY: 'auto',
  overflowX: 'hidden',
  zIndex: 1000,

  animation: `${contentShow} 300ms ease-in-out forwards`,
  '&[data-state="closed"]': {
    animation: `${contentHide} 300ms ease-in-out forwards`,
  },

  '@media (max-width: 768px)': {
    width: '100vw',
    padding: '32px 8px',
    borderRadius: 0,
  },
})


export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$gray200',
  zIndex: 1100,
  lineHeight: 0,
  transition: 'color 0.15s',
  '&:hover, &:focus-visible': {
    color: '$purple100',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  backgroundColor: '$gray700',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',

  '@media (max-width: 480px)': {
    padding: '1.4rem',
  }
})

export const BookData = styled('div', {
  display: 'flex',
  gap: '2rem',
  alignItems: 'flex-start',

  img: {
    width: 171,
    height: 242,
    borderRadius: 6,
    objectFit: 'cover',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
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
    fontWeight: 700,
    color: '$gray100',
    lineHeight: 1.4,
  },

  span: {
    fontSize: '$md',
    color: '$gray300',
  },
})

export const RatingBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const About = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 56,

  '@media (max-width: 480px)': {
    flexDirection: 'column',
    gap: 24,
  },
})

export const CatSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

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
  gap: 16,

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
  justifyContent: 'space-between',
  alignItems: 'center',

  span: {
    fontSize: '$lg',
    fontWeight: 600,
    color: '$gray100',
  },

  strong: {
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$purple100',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
