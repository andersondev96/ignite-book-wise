import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '32px',

  '@media(max-width: 768px)': {
    padding: '24px 16px',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  '@media(max-width: 768px)': {
    minHeight: 'auto',
  },
})

export const ListBooks = styled('div', {
  marginTop: '40px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '24px',

  '@media(max-width: 768px)': {
    gridTemplate: '1fr 1fr',
    gap: '16px',
  },

  '@media(max-width: 480px)': {
    gridTemplateColumns: '1fr',
  },
})

export const LoadingWrapper = styled('div', {
  marginTop: '64px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
})
