import { styled } from '@/stitches.config'

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: 516,
})

export const StyledTextarea = styled('textarea', {
  width: '100%',
  minHeight: 164,
  borderRadius: 8,
  background: '$gray800',
  border: '1px solid $gray600',
  padding: '16px 20px',
  resize: 'none',

  fontSize: 14,
  lineHeight: 1.6,
  color: '$gray100',
  fontFamily: 'inherit',

  transition: 'border 0.2s, box-shadow 0.2s',

  '&:focus': {
    outline: 'none',
    borderColor: '$purple200',
    boxShadow: '0 0 0 2px $purple200',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})

export const Counter = styled('span', {
  position: 'absolute',
  bottom: 10,
  right: 14,
  fontSize: 12,
  color: '$gray400',
  pointerEvents: 'none',
})
