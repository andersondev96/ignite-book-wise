import { styled } from '@/stitches.config'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  padding: '24px 20px',
  width: '372px',
  height: '72px',

  border: 'none',
  borderRadius: '8px',

  backgroundColor: '$gray600',

  img: {
    width: 32,
  },

  svg: {
    color: '$purple100',
  },

  span: {
    color: '$gray200',
    fontSize: '$lg',
    fontWeight: 'bold',
  },

  '&:hover': {
    opacity: 0.8,
    transition: 'opacity 0.2s',
  },
})
