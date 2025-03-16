import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  paddingLeft: '99px',

  borderLeft: '1px solid $gray700',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '40px',

  img: {
    width: '72px',
    height: '72px',
    borderRadius: '999px',
    objectFit: 'cover',
  },

  strong: {
    fontSize: '$md',
    color: '$gray100',
    fontWeight: 'bold',
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
  marginTop: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
})
