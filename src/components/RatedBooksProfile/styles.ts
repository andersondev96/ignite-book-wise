import { styled } from '@/stitches.config'

export const Container = styled('div', {
  marginTop: '32px',

  span: {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const BookCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  width: '624px',
  height: '100%',
  padding: '24px',
  borderRadius: '8px',
  background: '$gray700',

  p: {
    color: '$gray300',
    fontSize: '$sm',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',

    strong: {
      color: '$gray100',
      fontSize: '$sm',
      fontWeight: '$bold',
    },

    span: {
      color: '$gray400',
      fontSize: '$sm',
    },
  },
})
