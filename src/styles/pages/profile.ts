import { styled } from '@/stitches.config'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'flex',
  gap: '64px',
})

export const Main = styled('div', {
  width: '624px',
  marginBottom: '64px',
})

export const BackButton = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '40px',
})
