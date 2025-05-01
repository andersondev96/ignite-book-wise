import { styled } from '@stitches/react'
import Link from 'next/link'

export const NavigationContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
export const NavItemContainer = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  fontSize: '$md',
  padding: '12px 16px',
  borderRadius: '6px',
  color: '$gray300',
  position: 'relative',
  transition: 'background 0.3s ease, color 0.3s ease',

  svg: {
    width: '20px',
    height: '20px',
    color: 'inherit',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',

        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '4px',
          height: '60%',
          background: 'linear-gradient(to bottom, #7FD1CC, #9694F5)',
          borderRadius: '999px',
        },
      },
    },
  },
})
