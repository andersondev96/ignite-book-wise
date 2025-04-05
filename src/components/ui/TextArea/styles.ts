import { styled } from '@/stitches.config'

export const Container = styled('div', {
  position: 'relative',
  width: '516px',

  textarea: {
    width: '100%',
    height: '164px',
    borderRadius: '4px',
    background: '$gray800',
    border: '1px solid $gray500',
    resize: 'none',
    padding: '14px 20px',

    fontSize: '14px',
    color: '$gray400',
  },
})

export const Counter = styled('span', {
  position: 'absolute',
  bottom: '8px',
  right: '8px',
  fontSize: '$xs',
  color: '#7C7C8A',
})
