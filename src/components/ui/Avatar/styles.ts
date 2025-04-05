import { styled } from '@stitches/react'

export const AvatarContainer = styled('div', {
  position: 'relative',

  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '50%',
    background: 'linear-gradient(to bottom, #7FD1CC, #9694F5)',
    zIndex: -1,
  },

  '& img': {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1,
  },

  variants: {
    size: {
      big: {
        width: '72px',
        height: '72px',
      },
      small: {
        width: '40px',
        height: '40px',
      },
    },
  },
})
