import { styled } from '@/stitches.config'

export const BookCardContainer = styled('div', {
  width: '100%',
  maxWidth: '608px',
  marginTop: '16px',
  borderRadius: '8px',
  padding: '24px 32px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

  variants: {
    type: {
      latest: {
        background: '$gray600',
      },
      popular: {
        background: '$gray700',
      },
    },
  },

  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  },
})
export const AuthorSection = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
})

export const AuthorInfo = styled('a', {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  span: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$bold',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})

export const CardContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  variants: {
    type: {
      latest: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      popular: {
        flexDirection: 'column',
      },
    },
  },
})

export const BookInfoSection = styled('section', {
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-start',

  img: {
    width: '120px',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    transform: 'transform 0.2s ease',

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

  variants: {
    type: {
      latest: {
        marginTop: '8px',
      },
      popular: {
        marginTop: '16px',
      },
    },
  },
})

export const BookInfoContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,

  strong: {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$lg',
    marginBottom: '8px',
  },

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '$sm',
    marginBottom: '12px',
  },
})

export const Text = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  marginTop: '12px',

  span: {
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$purple100',
    cursor: 'pointer',
  },
})

export const StarsWrapper = styled('div', {
  marginLeft: 'auto',
})

export const DateText = styled('p', {
  color: '$gray400',
  fontSize: '$sm',
  fontWeight: '$regular',
  marginBottom: '8px',
})
