import { styled } from '@/stitches.config'
import Link from 'next/link'

export const BookCardContainer = styled('div', {
  background: '$gray600',
  width: '608px',
  marginTop: '16px',
  borderRadius: '8px',
  padding: '20px 24px',
})
export const AuthorSection = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const AuthorInfo = styled(Link, {
  textDecoration: 'none',

  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  span: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$regular',
  },

  p: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
  },
})

export const Avatar = styled('div', {
  position: 'relative',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom, #7FD1CC, #9694F5)',
    zIndex: -1,
  },

  '& img': {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1,
  },
})

export const BookInfoSection = styled('section', {
  marginTop: '32px',
  display: 'flex',
  gap: '20px',

  img: {
    width: '108px',
    cursor: 'pointer',
  },
})

export const BookInfoContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$xs',
  },

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '$sm',
  },
})

export const Text = styled('p', {
  marginTop: '20px',
  color: '$gray300',
  fontSize: '$sm',

  span: {
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$purple100',
    cursor: 'pointer',
  },
})
