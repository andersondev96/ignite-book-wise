import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  maxWidth: 564,
  padding: 24,
  borderRadius: 8,
  background: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  '@media (max-width: 640px)': {
    padding: 16,
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  marginBottom: 8,
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  img: {
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '999px',
    border: '2px solid #7FD1CC',
  },

  span: {
    fontSize: '$sm',
    fontWeight: 700,
    color: '$gray100',
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  '.error': {
    color: '#F75A68',
    fontSize: '$xs',
    marginTop: -4,
  },

  '.success': {
    color: '#00B37E',
    fontSize: '$xs',
    marginTop: -4,
  },

  '.info': {
    color: '$gray300',
    fontSize: '$xs',
    marginTop: -4,
  },
})

export const Footer = styled('div', {
  marginTop: 8,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 8,
  flexWrap: 'wrap',

  'span.error, span.success': {
    marginRight: 'auto',
  },
})

export const Button = styled('button', {
  width: 40,
  height: 40,
  border: 0,
  borderRadius: 4,
  background: '$gray600',
  transition: 'background 0.2s ease, transform 0.1s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover:not(:disabled)': {
    background: '$gray500',
    transform: 'translateY(-1px)',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
