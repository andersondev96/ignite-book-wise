import { styled } from '@/stitches.config'

export const TagsWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const Container = styled('div', {
  display: 'flex',
  gap: '$4',
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollBehavior: 'smooth',

  padding: '$3 $4',

  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  userSelect: 'none',
  cursor: 'grab',

  '&.dragging': {
    cursor: 'grabbing',
    scrollBehavior: 'auto',
  },

  '&:focus-visible': {
    outline: '2px solid $purple100',
    outlineOffset: '2px',
  },

  '@sm': {
    gap: '$3',
    padding: '$2 $3',
  },

  '@md': {
    gap: '$4',
    padding: '$3 $4',
  },

  '@lg': {
    gap: '$5',
    padding: '$4 $5',
  },
})

export const ScrollButton = styled('button', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',

  width: '40px',
  height: '40px',
  padding: 0,

  backgroundColor: '$purple100',
  border: 'none',
  borderRadius: '$full',
  cursor: 'pointer',

  color: '$white',
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.2s $ease-standard',
  zIndex: 10,

  boxShadow: '0 4px 12px rgba(130, 87, 229, 0.3)',

  '&:hover': {
    backgroundColor: '$purple200',
    boxShadow: '0 6px 16px rgba(130, 87, 229, 0.4)',
    transform: 'translateY(-50%) scale(1.1)',
  },

  '&:active': {
    transform: 'translateY(-50%) scale(0.95)',
  },

  '&:focus-visible': {
    outline: '2px solid $purple100',
    outlineOffset: '2px',
  },

  variants: {
    direction: {
      left: {
        left: '$2',
      },
      right: {
        right: '$2',
      },
    },
  },

  '@sm': {
    width: '36px',
    height: '36px',

    '& svg': {
      fontSize: '18px',
    },
  },

  '@md': {
    width: '40px',
    height: '40px',

    '& svg': {
      fontSize: '20px',
    },
  },

  '@lg': {
    width: '44px',
    height: '44px',

    '& svg': {
      fontSize: '24px',
    },
  },
})

export const LoadingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  padding: '$4',
  width: '100%',
  minHeight: '48px',
  backgroundColor: '$gray800',
  borderRadius: '$md',
  fontSize: '$sm',
  color: '$gray400',

  '.loading-skeleton': {
    display: 'flex',
    gap: '$3',
    alignItems: 'center',
    width: '100%',
  },

  '.skeleton-item': {
    height: '36px',
    minWidth: '80px',
    backgroundColor: '$gray700',
    borderRadius: '$full',
    animation: 'pulse 1.5s ease-in-out infinite',

    '@keyframes pulse': {
      '0%, 100%': {
        opacity: 0.6,
      },
      '50%': {
        opacity: 1,
      },
    },
  },

  '.error-message': {
    color: '$red400',
    fontWeight: '$medium',
  },

  '.sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  },

  '@sm': {
    padding: '$3',
    minHeight: '40px',
  },

  '@md': {
    padding: '$4',
    minHeight: '44px',
  },
})
