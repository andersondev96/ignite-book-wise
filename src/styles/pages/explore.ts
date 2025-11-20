// src/styles/pages/explore.ts
import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginBottom: '$6',

  '@lg': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$6',
  },
})

export const ListBooks = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$4',
  width: '100%',
  overflowX: 'hidden',

  '@media (min-width: 480px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '$5',
  },

  '@media (min-width: 640px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '$5',
  },

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '$6',
  },

  '@media (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '$6',
  },

  '@media (min-width: 1280px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '$6',
  },

  '@media (min-width: 1536px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '$8',
  },

  '@media (min-width: 1920px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '$8',
  },
})

export const LoadingWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  gap: '$4',
})

export const EmptyStateMessage = styled('div', {
  textAlign: 'center',
  color: '$gray200',
  fontSize: '$md',
  padding: '$6',

  '@media (min-width: 768px)': {
    fontSize: '$lg',
  },

  strong: {
    color: '$purple100',
    fontWeight: '$semibold',
  },
})

export const InlineLoadingIndicator = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$3 $4',
  backgroundColor: '$gray800',
  borderRadius: '$md',
  fontSize: '$sm',
  color: '$gray300',
  border: '1px solid $gray700',
  width: '100%',

  '@media (min-width: 768px)': {
    width: 'fit-content',
  },

  span: {
    fontWeight: '$medium',
  },

  animation: 'fadeIn 0.3s ease',

  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
})
