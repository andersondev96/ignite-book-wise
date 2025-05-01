import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '2.5rem',
  color: '$gray100',

  h1: {
    fontSize: '$2xl',
    fontWeight: '700',
    lineHeight: '1.2',
  },

  svg: {
    flexShrink: 0,
    width: '2rem',
    height: '2rem',
    color: '$green100',
  },

  '@media (max-width: 768px)': {
    h1: {
      fontSize: '$lg',
    },
    marginBottom: '1.5rem',
  },
})
