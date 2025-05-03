import { styled } from '@/stitches.config'

export const Container = styled('div', {
  marginTop: '2rem',
  width: '100%',
  maxWidth: '640px',

  span: {
    color: '$gray400',
    fontSize: '$sm',
    display: 'block',
    marginBottom: '0.5rem',
  },
})

export const BookCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  padding: '1.5rem',
  borderRadius: '12px',
  background: '$gray700',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },

  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: 1.6,
  },

  '@media(max-width: 768px)': {
    padding: '1rem',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  gap: '1.5rem',

  img: {
    width: '98px',
    height: '134px',
    borderRadius: '6px',
    objectFit: 'cover',
    flexShrink: 0,
  },

  '@media(max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',

    img: {
      width: '80px',
      height: '110px',
    },
  },
})

export const DetailsBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TitleAndActorBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  strong: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: 1.3,
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
