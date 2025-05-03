import Link from 'next/link'

import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '4rem',
  padding: '2rem',
  flexWrap: 'nowrap',

  '@media(max-width: 1024px)': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
})

export const Main = styled('main', {
  flex: 1,
  maxWidth: '680px',
  width: '100%',

  '> span': {
    color: '$gray400',
    fontSize: '$sm',

    strong: {
      color: '$gray100',
    },
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
