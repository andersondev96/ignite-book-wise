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

export const EmptyStateMessage = styled('span', {
  marginTop: '2rem',
  textAlign: 'center',
  color: '$gray200',
  display: 'block',
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
  marginBottom: '$4',
  border: '1px solid $gray700',

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
