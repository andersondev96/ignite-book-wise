import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  padding: '8px 0',
})

export const InfoWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',

  svg: {
    width: '24px',
    height: '24px',
    color: '$green100',
  },
})

export const ItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 1.4,

  strong: {
    fontSize: '$sm',
    fontWeight: 600,
    color: '$gray100',
  },

  span: {
    fontSize: '$xs',
    color: '$gray400',
  },
})
