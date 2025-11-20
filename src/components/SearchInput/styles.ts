import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: '100%',

  variants: {
    variant: {
      default: {
      },
      small: {
        width: 'auto',
        maxWidth: '320px',
      },
    },
  },
})

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray200',
  cursor: 'pointer',

  'span[aria-label="obrigatório"]': {
    color: '$red400',
  },

  '@lg': {
    fontSize: '$md',
  },
})

export const Input = styled('input', {
  '&[type="search"]': {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',

    '&::-webkit-search-decoration': {
      WebkitAppearance: 'none',
    },

    '&::-webkit-search-cancel-button': {
      WebkitAppearance: 'none',
    },
  },

  width: '100%',
  padding: '$3 $4',
  fontSize: '$sm',
  fontFamily: 'inherit',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  color: '$gray100',
  flex: 1,

  '&::placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
    color: '$gray500',
  },

  '@md': {
    padding: '$3 $5',
    fontSize: '$md',
  },
})

export const InputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$3 $4',
  height: 'auto',
  minHeight: '44px',
  border: '1px solid $gray500',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  transition: 'all 0.2s $ease-standard',

  '&:hover': {
    borderColor: '$gray400',
    backgroundColor: '$gray750',
  },

  '&:focus-within': {
    borderColor: '$purple100',
    boxShadow: '0 0 0 3px rgba(130, 87, 229, 0.1)',
    backgroundColor: '$gray800',
  },

  '&[data-error="true"]': {
    borderColor: '$red400',
    backgroundColor: 'rgba(255, 84, 89, 0.04)',

    '&:focus-within': {
      borderColor: '$red400',
      boxShadow: '0 0 0 3px rgba(255, 84, 89, 0.1)',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.6,
    cursor: 'not-allowed',
    backgroundColor: '$gray850',
  },

  '.search-icon': {
    color: '$gray400',
    flexShrink: 0,
    transition: 'color 0.2s',
  },

  '&:focus-within .search-icon': {
    color: '$purple100',
  },

  'div[data-variant="small"] &': {
    padding: '$2 $3',
    minHeight: '40px',
    fontSize: '$xs',
  },

  '@md': {
    padding: '$3 $5',
    minHeight: '48px',
  },

  '@lg': {
    minHeight: '52px',
  },
})

export const ErrorMessage = styled('span', {
  fontSize: '$xs',
  color: '$red400',
  fontWeight: '$medium',
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  marginTop: '$1',

  '@md': {
    fontSize: '$sm',
  },
})
