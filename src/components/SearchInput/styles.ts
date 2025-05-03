import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  height: '48px',
  padding: '0 1rem',
  border: '1px solid $gray500',
  borderRadius: '8px',
  backgroundColor: '$gray800',
  transition: 'border 0.2s, box-shadow 0.2s',

  '&:focus-within': {
    borderColor: '$green100',
    boxShadow: '0 0 0 2px $colors$green100',
  },

  svg: {
    marginLeft: '0.75rem',
    color: '$gray400',
    flexShrink: 0,
  },
})

export const Input = styled('input', {
  flex: 1,
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: '$gray100',
  fontSize: '$md',

  '::placeholder': {
    color: '$gray400',
  },
})
