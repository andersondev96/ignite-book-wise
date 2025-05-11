import Link from 'next/link'

import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  Maxwidth: '564px',
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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    webkitLineClamp: 4,
    webkitBoxOrient: 'vertical',
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
})

export const User = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  transition: 'opacity 0.2s ease',

  '&:hover': {
    opacity: 0.85,
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
