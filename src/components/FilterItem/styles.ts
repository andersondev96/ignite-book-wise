import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  maxWidth: '100vw',
  height: '34px',

  marginTop: '54px',

  // background: '$purple200',
  border: '1px solid $purple100',
  borderRadius: '999px',

  padding: '4px 16px',

  span: {
    fontSize: '$md',
    color: '$purple100',
    // color: '$gray100',
  },

  cursor: 'pointer',

  '&:hover': {
    background: '$purple200',
    transition: 'all 0.2s',
  },

  variants: {
    active: {
      true: {
        background: '$purple200',
        border: 'none',

        span: {
          color: '$white',
        },
      },
    },
  },
})
