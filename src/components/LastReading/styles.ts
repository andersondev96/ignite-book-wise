import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '$gray800',
  borderRadius: '$lg',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$md',
    fontWeight: '$bold',
    color: '$gray100',
  },

  a: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '$purple100',
    fontWeight: '$bold',
    fontSize: '$sm',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$purple200',
    },
  },
})

export const LoaderWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px',
})
