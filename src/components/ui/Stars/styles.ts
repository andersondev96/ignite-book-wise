import { Star } from '@phosphor-icons/react'

import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
  padding: '4px 0',
})

export const StarContainer = styled('div', {
  position: 'relative',
  width: '20px',
  height: '20px',
  display: 'inline-block',
  transition: 'transform 0.2s ease',

  '&:hover': {
    transform: 'scale(1.15)',
  },

  '&:focus': {
    outline: '2px solid $green100',
    borderRadius: '4px',
  },
})

export const StarBackground = styled(Star, {
  color: '#7C7C8A',
  width: '100%',
  height: '100%',
})

export const StarForegroundWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  width: '0%',
  display: 'flex',
})

export const StarForeground = styled(Star, {
  color: '#8257E5',
  height: '100%',
  width: '100%',
})
