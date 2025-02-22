import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '564px',
  height: '328px',
  padding: '24px',
  borderRadius: '8px',
  background: '$gray700',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',

  img: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '999px',
    border: '1px solid #7FD1CC',
  },

  span: {
    fontSize: '$xs',
    fontWeight: 700,
    color: '$gray100',
  },
})

export const Form = styled('form', {
  marginTop: '24px',
})

export const Footer = styled('div', {
  marginTop: '12px',

  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
})

export const Button = styled('button', {
  width: '40px',
  height: '40px',

  outline: 0,
  boxShadow: 0,
  border: 0,

  borderRadius: '4px',
  background: '$gray600',

  '&:hover': {
    background: '$gray500',
  },
})
