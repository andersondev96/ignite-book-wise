import { styled } from '@/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: '$gray800',
  
  '@lg': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: 0,
  },
})

export const Content = styled('div', {
  width: '100%',
  minHeight: '100vh',
  overflowX: 'hidden',
  
  padding: '$5',
  
  '@md': {
    padding: '$8',
  },
  
  '@lg': {
    padding: '$10',
    paddingLeft: '$8',
  },
})
