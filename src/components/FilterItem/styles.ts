import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '36px',
  padding: '0 20px',
  borderRadius: '999px',
  border: '1px solid $purple100',
  backgroundColor: 'transparent',

  fontSize: '$md',
  fontWeight: 500,
  color: '$purple100',
  whiteSpace: 'nowrap',

  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.2s ease',

  '&:hover': {
    background: '$purple200',
    color: '$white',
  },

  '&:focus': {
    outline: '2px solid $purple200',
    outlineOffset: '2px',
  },

  variants: {
    active: {
      true: {
        background: '$purple200',
        border: 'none',
        color: '$white',
      },
    },
  },
})
