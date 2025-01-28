import { styled } from '@/stitches.config'

export const BookCardContainer = styled('div', {
  background: '$gray600',
  width: '608px',
  marginTop: '16px',
  borderRadius: '8px',
  padding: '20px 24px',
})
export const AuthorSection = styled('section', {
  display: 'flex',
  alignContent: 'center',
  gap: '16px',

  img: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '999px',
    border: '1px solid $gray400',
  },

  span: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$regular',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})
export const BookInfoSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  img: {
    width: '108px',
  },
})

export const BookInfoContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '32px',

  strong: {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$xs',
  },

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '$sm',
  },
})

export const Text = styled('p', {
  marginTop: '20px',
  color: '$gray300',
  fontSize: '$sm',
})
