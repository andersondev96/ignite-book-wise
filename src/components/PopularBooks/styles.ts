import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const TitleSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    textDecoration: 'none',
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
  },
})

export const PopularBookCard = styled('div', {
  background: '$gray700',
  borderRadius: '8px',
  padding: '16px 20px',

  display: 'flex',
  alignItems: 'center',

  span: {
    color: '$gray100',
    fontSize: '$xs',
    fontWeight: 'bold',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: 'revert',
  },
})
