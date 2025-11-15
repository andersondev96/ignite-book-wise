// src/styles/pages/home.ts
import { styled } from '@/stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  
  '@lg': {
    // ✅ Grid de 2 colunas (Avaliações + Livros Populares)
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 324px',
    gap: '$16',
    alignItems: 'start',
  },
})

export const MainContent = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  width: '100%',
  minWidth: 0,
})

export const Sidebar = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  width: '100%',
  
  '@lg': {
    // ✅ Sticky à direita
    position: 'sticky',
    top: '$10',
    alignSelf: 'flex-start',
    maxHeight: 'calc(100vh - $10 * 2)',
    overflowY: 'auto',
    overflowX: 'hidden',
    
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    
    '&::-webkit-scrollbar-thumb': {
      background: '$gray600',
      borderRadius: '$full',
      
      '&:hover': {
        background: '$gray500',
      },
    },
    
    // Firefox
    scrollbarWidth: 'thin',
    scrollbarColor: '$gray600 transparent',
  }
})

export const SkipLink = styled('a', {
  position: 'absolute',
  top: '-100px',
  left: '$4',
  background: '$purple100',
  color: '$white',
  padding: '$3 $5',
  textDecoration: 'none',
  borderRadius: '$md',
  fontSize: '$md',
  fontWeight: '$bold',
  zIndex: 9999,
  transition: 'top 0.2s ease',
  
  '&:focus': {
    top: '$4',
    outline: '3px solid $green100',
    outlineOffset: '2px',
  },
})
