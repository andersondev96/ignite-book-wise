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

export const PopularsBooks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const PopularBookCard = styled('div', {
  background: '$gray700',
  borderRadius: '8px',
  padding: '16px 20px',

  display: 'flex',
  gap: '20px',

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

  img: {
    width: '64px',
    height: '94px',
    objectFit: 'cover',
    borderRadius: '4px',

    cursor: 'pointer',
  },
})

export const TitleBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '34px',
})
