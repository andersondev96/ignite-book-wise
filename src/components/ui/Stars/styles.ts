import { styled } from '@/stitches.config'
import { Star } from '@phosphor-icons/react'

export const Container = styled('div', {
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
  padding: '2px 0',
  lineHeight: 0
})

export const StarContainer = styled('span', {
  position: 'relative',
  width: '20px',
  height: '20px',
  display: 'inline-block',
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  transition: 'transform 0.15s $ease-standard, filter 0.18s $ease-standard',

  '&:focus-visible': {
    outline: '2px solid $green100',
    borderRadius: '4px',
  },

  variants: {
    editable: {
      true: {
        transition: 'transform 0.15s $ease-standard',
        '&:hover': {
          transform: 'scale(1.13)',
          filter: 'brightness(1.07)',
        },
        cursor: 'pointer',
      },
      false: {
        cursor: 'default',
      }
    },
    isActive: {
      true: {
        filter: 'drop-shadow(0 1px 3px #8257E560)'
      }
    }
  },
})

export const StarBackground = styled(Star, {
  color: '$gray400',
  width: '100%',
  height: '100%',
})

export const StarForegroundWrapper = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  width: 0,
  display: 'flex',
  zIndex: 1,
})

export const StarForeground = styled(Star, {
  color: '$purple100',
  width: '100%',
  height: '100%',
  zIndex: 1,
})
