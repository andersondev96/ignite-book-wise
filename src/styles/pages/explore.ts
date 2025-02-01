import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const ListBooks = styled('div', {
  marginTop: '48px',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '20px',
})
