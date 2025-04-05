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
  gap: '40px',
  width: '680px',
  maxHeight: '100vh',
  borderRadius: '4px',
  position: 'fixed',
  right: 0,
  top: 0,
  transform: 'translateY(-50%)',
  padding: '64px 48px',

  backgroundColor: '$gray800',
  overflowY: 'auto',

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

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',

  width: '564px',
  height: '414px',
  padding: '24px 32px',
  borderRadius: '10px',
  background: '$gray700',
})

export const BookData = styled('div', {
  display: 'flex',
  gap: '32px',

  img: {
    width: '171px',
    height: '242px',
    objectFit: 'contain',
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
  gap: '8px',

  strong: {
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$gray100',
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

export const Category = styled('div', {
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
  gap: '16px',
})

export const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },

  strong: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$purple100',

    cursor: 'pointer',

    '&:hover': {
      opacity: '0.8',
      transition: 'all 0.2s',
    },
  },
})
