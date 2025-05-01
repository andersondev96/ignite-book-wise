import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  height: '100vh',
  padding: '2rem',
  overflow: 'hidden',

  '@md': {
    gridTemplateColumns: '1fr',
    padding: '1.5rem',
  },

  img: {
    width: '100%',
    height: 'auto',
    maxHeight: '90vh',
    objectFit: 'cover',
    borderRadius: '12px',

    '@md': {
      display: 'none',
    },
  },
})

export const LoginForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '440px',
  width: '100%',
  margin: '0 auto',

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
    marginBottom: '0.5rem',
  },

  span: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.5,
  },

  '@sm': {
    h1: { fontSize: '$xl' },
    span: { fontSize: '$sm' },
  },
})

export const AuthButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '2.5rem',

  button: {
    transition: 'all 0.2s ease-in-out',
  },
})
