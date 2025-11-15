import { styled } from '@/stitches.config'

export const LatestRatingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  width: '100%',
})

export const LastRatingSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',
})

export const SectionTitle = styled('h2', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray100',
  marginBottom: '$4',
})

export const RatingsGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',
})

export const LoaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',
  minHeight: '300px',
  
  '.sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  }
})

export const ErrorMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  padding: '$8',
  minHeight: '300px',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  border: '1px solid $red500',
  
  p: {
    fontSize: '$md',
    color: '$gray100',
    textAlign: 'center',
    maxWidth: '400px',
  },
  
  button: {
    padding: '$3 $6',
    backgroundColor: '$purple100',
    color: '$white',
    border: 'none',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    
    '&:hover': {
      backgroundColor: '$purple200',
    },
    
    '&:focus': {
      outline: '2px solid $green100',
      outlineOffset: '2px',
    },
  }
})

export const EmptyState = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$8',
  minHeight: '300px',
  backgroundColor: '$gray700',
  borderRadius: '$md',
  
  p: {
    fontSize: '$md',
    color: '$gray400',
    textAlign: 'center',
  }
})
