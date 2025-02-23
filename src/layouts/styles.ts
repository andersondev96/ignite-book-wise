import { styled } from '@/stitches.config'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  minHeight: '100vh',
})

export const Content = styled('div', {
  flex: 1,
  paddingLeft: '300px',
  paddingTop: '72px',
  paddingRight: '16px',
  overflowX: 'hidden',
  minHeight: '100vh',
})
