import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  height: '48px',
  padding: '20px 14px',

  border: '1px solid $gray500',
  borderRadius: '4px',

  svg: {
    marginLeft: '20px',
    color: '$gray500',
  },
})

export const Input = styled('input', {
  width: '100%',
  border: 0,
  boxShadow: 0,
  outline: 0,

  background: 'transparent',

  color: '$gray400',
  fontSize: '$md',
})
