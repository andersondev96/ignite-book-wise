import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'grid',
  height: '100%',
  gridTemplateColumns: '1fr 822px',
  gap: 64,
  overflow: 'hidden',
  padding: 20,

  img: {
    width: '598px',
    height: '912px',
  },
})

export const LoginForm = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '245px',

  h1: {
    color: '$gray100',
    fontSize: '$lg',
    fontWeight: '$bold',

    marginBottom: '2px',
  },

  span: {
    color: '$gray200',
    fontSize: '$md',
  },
})

export const AuthButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: '40px',
})
