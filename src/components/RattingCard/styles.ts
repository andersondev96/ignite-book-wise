import { styled } from '@/stitches.config'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '564px',
  padding: '24px',
  borderRadius: '8px',
  background: '$gray700',
  transition: 'background 0.2s ease',

  '&:hover': {
    background: '$gray600',
  },

  p: {
    fontSize: '$sm',
    color: '$gray300',
    marginTop: '20px',
    lineHeight: '1.6',
  },

  variants: {
    isOwner: {
      true: {
        background: '$gray600',
      },
    },
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
})

export const StarsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const Content = styled('div', {
  flex: 1,
})

export const Text = styled('p', {
  fontSize: '$sm',
  color: '$gray300',
  lineHeight: '1.6',
  margin: 0,

  '@md': {
    fontSize: '$md',
  }
})

export const User = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'opacity 0.2s ease',

  '&:hover': {
    opacity: 0.9,
  },

  img: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '999px',
    border: '2px solid $gray600',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',

  strong: {
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$gray100',
  },

  span: {
    fontSize: '$xs',
    color: '$gray400',
  },
})
