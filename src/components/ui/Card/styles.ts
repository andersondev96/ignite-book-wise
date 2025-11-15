import { styled } from '@/stitches.config'

export const BookCardContainer = styled('article', {
  width: '100%',
  borderRadius: '$md',
  padding: '$6',
  background: '$gray700',
  border: '2px solid transparent',
  transition: 'border-color 0.2s',
  
  '&:hover': {
    borderColor: '$gray600',
  },
})

export const AuthorSection = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '$8',
  gap: '$4',
})

export const AuthorInfo = styled('a', {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  flex: 1,
  minWidth: 0,
  transition: 'opacity 0.2s',

  '&:hover': {
    opacity: 0.8,
  },

  '&:focus': {
    outline: '2px solid $green100',
    outlineOffset: '2px',
    borderRadius: '$sm',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  minWidth: 0,

  span: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  time: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const StarsWrapper = styled('div', {
  flexShrink: 0,
})

export const CardContentWrapper = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const BookImageWrapper = styled('div', {
  flexShrink: 0,
  width: '108px',
  height: '152px',
  borderRadius: '$sm',
  overflow: 'hidden',
  cursor: 'pointer',
  
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.2s',
  },
  
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  
  '&:focus': {
    outline: '2px solid $green100',
    outlineOffset: '2px',
  },
})

export const BookInfoContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  flex: 1,
  minWidth: 0,
})

export const BookTitleSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  strong: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const BookDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  
  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
    margin: 0,
  },
})

export const ExpandButton = styled('button', {
  all: 'unset',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$purple100',
  cursor: 'pointer',
  alignSelf: 'flex-start',
  transition: 'color 0.2s',
  lineHeight: '$base',
  
  '&:hover': {
    color: '$purple200',
  },

  '&:focus': {
    outline: '2px solid $green100',
    outlineOffset: '2px',
    borderRadius: '$xs',
  },
})

export const DateText = styled('time', {
  color: '$gray400',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})
