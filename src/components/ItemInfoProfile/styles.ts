import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  svg: {
    color: '$green100',
  },
})

export const ItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$xs',
    fontWeight: 'bold',
    color: '$gray200',
  },

  span: {
    fontSize: '$sm',
    color: '$gray300',
  },
})
