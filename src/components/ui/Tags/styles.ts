import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  overflowX: 'auto',
  display: 'flex',
  gap: '0.75rem',
  padding: '0.5rem 1rem',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
  userSelect: 'none',
  cursor: 'grab',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '&.dragging': {
    cursor: 'grabbing',
  },

  '@media (max-width: 768px)': {
    gap: '0.5rem',
    padding: '0.5rem',
  },
})
