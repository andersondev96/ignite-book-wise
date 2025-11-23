import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '$5',
  width: '100%',
  maxWidth: '320px',
  minWidth: '240px',

  height: '184px',
  background: '$gray700',
  borderRadius: '$md',
  padding: '$4 $5',
  boxSizing: 'border-box',

  alignItems: 'center',

  transition: 'box-shadow 0.2s, transform 0.2s',
  cursor: 'pointer',
  boxShadow: '0 1px 4px 0 rgba(30, 30, 43, 0.02)',

  '&:hover, &:focus': {
    boxShadow: '0 0 0 2px $purple200',
    transform: 'translateY(-2px) scale(1.02)',
    outline: 'none',
  },

  '&:active': {
    opacity: 0.96,
    transform: 'scale(0.99)',
  },

  '@sm': {
    padding: '$3 $4',
    minWidth: '180px',
    height: '164px',
  },
})

export const BookImage = styled('img', {
  width: '108px',
  height: '152px',
  minWidth: '90px',
  minHeight: '120px',
  objectFit: 'cover',
  borderRadius: '$xs',
  boxShadow: '0 1px 4px 0 rgba(40, 40, 60, 0.05)',
  background: '$gray600',

  '@sm': {
    width: '80px',
    height: '110px',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
})

export const BookName = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  strong: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    lineHeight: '1.4',
    maxWidth: '160px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
    marginTop: '2px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    maxWidth: '160px',
  },
})
