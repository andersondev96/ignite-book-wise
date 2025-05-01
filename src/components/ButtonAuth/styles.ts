import { styled } from '@/stitches.config'

export const Container = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  padding: '1.25rem 1.5rem',
  width: '100%',
  maxWidth: '372px',
  height: '72px',

  backgroundColor: '$gray600',
  borderRadius: '8px',
  cursor: 'pointer',

  transition: 'background 0.2s, opacity 0.2s, transform 0.2s',

  '&:hover': {
    opacity: 0.9,
    transform: 'translateY(-1px)',
  },

  '&:focus': {
    outline: '2px solid $purple200',
    outlineOffset: '2px',
  },

  span: {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$gray100',
    lineHeight: 1.4,
  },
})

export const IconWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',

  img: {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    objectFit: 'cover',
  },

  svg: {
    width: '100%',
    height: '100%',
    color: '$purple100',
  },
})
