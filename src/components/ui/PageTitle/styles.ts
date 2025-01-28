import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$lg',
  fontWeight: '700',
  color: '$gray100',
  marginBottom: '40px',

  svg: {
    marginRight: '12px',
    fontSize: '32px',
    color: '$green100',
  },
})
