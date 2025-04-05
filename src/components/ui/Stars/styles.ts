import { styled } from '@/stitches.config'
import { Star } from '@phosphor-icons/react'

export const Container = styled('div', {
  display: 'flex',
  gap: '4px',
})

export const StarContainer = styled('div', {
  position: 'relative',
  width: '16px',
  height: '16px',
  display: 'inline-block',
})

export const StarBackground = styled(Star, {
  color: '#7C7C8A',
})

export const StarForeground = styled(Star, {
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
  color: '#8257E5',
  transition: 'width 0.2s ease',
})
