import { styled } from '@stitches/react'

export const AvatarContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '50%',
    border: '4px solid transparent',
    background: 'linear-gradient(to bottom, #7FD1CC, #9694F5)',
    zIndex: -1,
  },

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1,
    borderRadius: '50%',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },

  '&:hover': {
    '& img': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
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

  '@media (max-width: 480px)': {
    '&': {
      width: '56px',
      height: '56px',
    },
  },
})
