import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  a: {
    textDecoration: 'none',

    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    color: '$purple100',
    fontWeight: '$bold',
    fontSize: '$sm',
  },
})
