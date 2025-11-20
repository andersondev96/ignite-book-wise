import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  minHeight: '36px',
  height: 'auto',
  padding: '0 $4',

  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray200',
  whiteSpace: 'nowrap',

  borderRadius: '$full',
  border: '1px solid $gray600',
  backgroundColor: 'transparent',

  cursor: 'pointer',
  userSelect: 'none',
  transition: 'all 0.2s $ease-standard',

  '&:hover': {
    borderColor: '$purple100',
    backgroundColor: 'rgba(130, 87, 229, 0.08)',
    color: '$purple100',
  },

  '&:focus-visible': {
    outline: '2px solid $purple100',
    outlineOffset: '2px',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '@sm': {
    minHeight: '32px',
    padding: '0 $3',
    fontSize: '$xs',
  },

  '@md': {
    minHeight: '36px',
    padding: '0 $4',
    fontSize: '$sm',
  },

  '@lg': {
    minHeight: '40px',
    padding: '0 $5',
    fontSize: '$md',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: '$purple100',
        borderColor: '$purple100',
        color: '$white',

        '&:hover': {
          backgroundColor: '$purple100',
          borderColor: '$purple100',
        },
      },
      false: {
        '&:hover': {
          borderColor: '$purple100',
          backgroundColor: 'rgba(130, 87, 229, 0.08)',
          color: '$purple100',
        },
      },
    },
  },

  '[data-dragging="true"] &': {
    pointerEvents: 'none',
    opacity: 0.7,
  },
})
