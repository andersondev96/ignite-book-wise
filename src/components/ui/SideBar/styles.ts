import Link from 'next/link'
import { styled } from '@/stitches.config'

export const SideBarContainer = styled('aside', {
  position: 'fixed',
  top: '20px',
  left: '20px',
  width: '232px',
  height: 'calc(100vh - 40px)',
  background: "$gray700 url('/images/sidebar-background.png') no-repeat center",
  backgroundSize: 'cover',
  borderRadius: '12px',
  padding: '40px 24px 24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  zIndex: 10,
  transition: 'transform 0.3s ease',
  transform: 'translateX(-110%)',

  '.logo': {
    width: '128px',
    marginBottom: '64px',
  },

  variants: {
    open: {
      true: {
        transform: 'translateX(0)',
      },
    },
  },


  '@lg': {
    position: 'static',
    transform: 'translateX(0)',
    top: 'auto',
    left: 'auto',
    width: '232px',
    height: 'auto',
    minHeight: 'calc(100vh - 40px)',
    margin: '20px',
  },

  '> .close-button': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '8px',

    '@lg': {
      display: 'none',
    },
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '48px',
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
  },
})

export const LogInButton = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  color: '$gray200',
  fontWeight: '$bold',
  fontSize: '$md',
  transition: 'color 0.2s',

  svg: {
    color: '$green100',
    transition: 'transform 0.2s',
  },

  '&:hover': {
    color: '$gray100',

    svg: {
      transform: 'scale(1.1)',
    },
  },
})

export const SignOutButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'default',

  img: {
    width: '2rem',
    height: '2rem',
    objectFit: 'cover',
    borderRadius: '999px',
    border: '2px solid $gray100',
    transition: 'filter 0.2s ease',

    '&:hover': {
      filter: 'brightness(1.1)',
    },
  },

  span: {
    fontSize: '$sm',
    color: '$gray200',
    transition: 'color 0.2s',
  },

  svg: {
    color: '#F75A68',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',

    '&:hover': {
      opacity: 0.8,
    },
  },
})

export const MobileHeader = styled('div', {
  position: 'fixed',
  top: '1rem',
  left: '1rem',
  zIndex: 100,

  '@lg': {
    display: 'none',
  },
})

export const MobileMenuButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  color: '$gray100',
  padding: '0.25rem',
  borderRadius: '4px',

  '&:hover': {
    opacity: 0.7,
  },
})

export const MobileOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.4)',
  zIndex: 9,

  '@lg': {
    display: 'none',
  },
})
