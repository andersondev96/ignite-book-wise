import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const TitleSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',

  span: {
    fontSize: '$lg',
    fontWeight: '$bold',
    color: '$gray100',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
  },

  '&:hover': {
    textDecoration: 'underline',
  },
})

export const PopularBooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'auto',
  gap: '16px',
  paddingBottom: '8px',

  '&::-webkit-scrollbar': {
    height: '6px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '8px',
  },
})

export const PopularBookCard = styled('div', {
  background: '$gray700',
  borderRadius: '10px',
  padding: '16px',
  minWidth: '250px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '16px',
  flexShrink: 0,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',

  transition: 'transform 0.2s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
  },
})

export const ImageWrapper = styled('div', {
  cursor: 'pointer',
  img: {
    width: '64px',
    height: '94px',
    objectFit: 'cover',
    borderRadius: '6px',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      opacity: '0.85',
    },
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TitleBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '8px',

  span: {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: 'bold',
    lineHeight: '1.4',
  },

  p: {
    color: '$gray400',
    fontSize: '$xs',
  },
})
