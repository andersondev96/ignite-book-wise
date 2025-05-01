import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  width: '100%',
  maxWidth: '320px',
  height: '184px',

  background: '$gray700',

  borderRadius: '8px',
  padding: '1rem 1.25rem',

  transition: 'box-shadow 0.2s, transform 0.2s',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: '0 0 0 2px $purple200',
    transform: 'translateY(-2px)',
  },

  '&:focus': {
    outline: '2px solid $purple200',
    outlineOffset: '2px',
  },
})

export const BookImage = styled('img', {
  width: '108px',
  height: '152px',
  objectFit: 'cover',
  borderRadius: '4px',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookName = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$gray100',
    lineHeight: '1.4',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
    marginTop: '4px',
  },
})
