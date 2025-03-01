import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '20px',

  width: '318px',
  height: '184px',

  background: '$gray700',
  borderRadius: '8px',

  padding: '16px 20px',

  img: {
    width: '108px',
    height: '152px',
    objectFit: 'cover',
  },

  cursor: 'pointer',
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
    fontSize: '$xs',
    fontWeight: 'bold',
    color: '$gray100',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
