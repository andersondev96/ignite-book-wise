import { styled } from '@/stitches.config'
import Link from 'next/link'

export const SideBarContainer = styled('aside', {
  width: '232px',
  height: 'calc(100% - 40px)',
  margin: 20,
  background: "$gray700 url('/images/sidebar-background.png') no-repeat center",
  backgroundSize: 'cover',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingBottom: 24,

  '.logo': {
    width: 128,
    marginBottom: 64,
  },
})

export const LogInButton = styled(Link, {
  textDecoration: 'none',
  color: '$gray200',
  fontWeight: 700,
  fontSize: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
  },
})

export const SignOutButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',

  img: {
    width: '2rem',
    height: '2rem',
    objectFit: 'cover',
    borderRadius: '999px',
  },

  span: {
    fontSize: '$sm',
    color: '$gray200',
  },

  svg: {
    color: '#F75A68',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.8,
      transition: 'opacity 0.2s',
    },
  },
})
