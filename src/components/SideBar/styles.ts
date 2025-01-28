import { styled } from '@/stitches.config'
import Link from 'next/link'

export const SideBarContainer = styled('aside', {
  width: '232px',
  height: 'calc(100% - 40px)',
  margin: 20,
  background: "$gray700 url('/images/sidebar-background.png') no-repeat center",
  backgroundSize: 'cover',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingBottom: 24,

  '.logo': {
    width: 128,
    marginBottom: 64,
  },
})

export const LogInButton = styled(Link, {
  textDecoration: 'none',
  color: '$gray200',
  fontWeight: 700,
  fontSize: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
  },
})
