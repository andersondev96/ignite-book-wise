import Link from 'next/link'

import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '4rem',
  padding: '2rem',
  flexWrap: 'nowrap',

  '@media(max-width: 1024px)': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
})

export const Main = styled('main', {
  width: '680px',
  minHeight: '600px',
})

export const EmptyStateMessage = styled('span', {
  marginTop: '2rem',
  textAlign: 'center',
  color: '$gray400',
  fontSize: '$sm',
  display: 'block',

  strong: {
    color: '$gray100',
  },
})

export const BackButton = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '2.5rem',
  color: '$purple100',
  fontWeight: '$bold',
  fontSize: '$sm',

  '&:hover': {
    textDecoration: 'underline',
  },
})
