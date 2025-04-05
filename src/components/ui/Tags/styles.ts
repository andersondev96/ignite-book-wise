import { styled } from '@/stitches.config'

export const Container = styled('div', {
  width: '100%',
  overflowX: 'auto',
  display: 'flex',
  gap: '12px',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
