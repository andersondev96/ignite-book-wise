import { styled } from '@stitches/react'

export const HomeContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '4rem',
  height: '100%',
  padding: '2rem 1rem',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',

  '@media (max-width: 960px)': {
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
})
