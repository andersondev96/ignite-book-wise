import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  maxWidth: '564px',
  padding: '24px',
  borderRadius: '8px',
  background: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  '@media (max-width: 640px)': {
    padding: '16px',
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  img: {
    width: '40px',
    height: '40px',
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
  gap: '12px',

  '.error': {
    color: 'red',
    fontSize: '$xs',
    marginTop: '-8px',
  },

  '.success': {
    color: 'green',
    fontSize: '$xs',
    marginTop: '-8px',
  },
})

export const Footer = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '8px',

  'span.error, span.success': {
    marginRight: 'auto',
  },
})

export const Button = styled('button', {
  width: '40px',
  height: '40px',
  border: 0,
  borderRadius: '4px',
  background: '$gray600',
  transition: 'background 0.2s ease',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    background: '$gray500',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
