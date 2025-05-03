import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '320px',
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  borderLeft: '1px solid $gray700',
  borderRadius: '12px',

  '@media(max-width: 1024px)': {
    borderLeft: 'none',
    borderTop: '1px solid $gray700',
    width: '100%',
    marginTop: '2rem',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '1.25rem',

  strong: {
    fontSize: '$lg',
    color: '$gray100',
    fontWeight: 'bold',
    marginTop: '2rem',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const Divisor = styled('div', {
  borderRadius: '999px',
  width: '32px',
  height: '4px',
  background: '#7FD1CC',
})

export const BooksInfo = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
  paddingLeft: '3rem',
})
