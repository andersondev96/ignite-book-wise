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

  svg: {
    marginRight: '$3',
  },
})
