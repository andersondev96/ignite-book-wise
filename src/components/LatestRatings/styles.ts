import { styled } from '@/stitches.config'

export const LatestRatingsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const LastRatingSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
})

export const SectionTitle = styled('h2', {
  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray100',
  marginBottom: '0.5rem',
})

export const LoaderWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '300px',
})
