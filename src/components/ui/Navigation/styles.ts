import { styled } from '@stitches/react'
import Link from 'next/link'

export const NavigationContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$7',
})
export const NavItemContainer = styled(Link, {
  textDecoration: 'none',
  color: '$gray400',
  fontSize: '$md',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  paddingLeft: '1rem',

  svg: {
    marginRight: '$3',
    size: '1.25rem',
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
          width: '4px',
          height: '24px',
          background: 'linear-gradient(to bottom, #7FD1CC, #9694F5)',
          borderRadius: '2px',
        },
      },
    },
  },
})
