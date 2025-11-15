import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const TitleSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',

  h2: {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray200',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    textDecoration: 'none',
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$purple200',
    },

    '&:focus': {
      outline: '2px solid $green100',
      outlineOffset: '2px',
      borderRadius: '$sm',
    },
  },
})

export const PopularBooksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const PopularBookCard = styled('div', {
  background: '$gray700',
  borderRadius: '$sm',
  padding: '$4 $5',
  display: 'flex',
  gap: '$5',
  cursor: 'pointer',
  transition: 'background 0.2s',
  border: '2px solid transparent',

  '&:hover': {
    background: '$gray600',
  },

  '&:focus': {
    outline: 'none',
    borderColor: '$green100',
  },
})

export const ImageWrapper = styled('div', {
  flexShrink: 0,
  borderRadius: '$xs',
  overflow: 'hidden',
  width: '64px',
  height: '94px',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  minWidth: 0,
  gap: '$5',
})

export const TitleBook = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  span: {
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$gray100',
    lineHeight: '$short',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },

  p: {
    fontSize: '$xs',
    color: '$gray400',
    lineHeight: '$base',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})

export const LoaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',
  minHeight: '200px',
  padding: '$6',

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
})

export const ErrorMessage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  padding: '$6',
  minHeight: '200px',
  backgroundColor: '$gray700',
  borderRadius: '$md',

  p: {
    fontSize: '$sm',
    color: '$gray200',
    textAlign: 'center',
  },

  button: {
    padding: '$2 $4',
    backgroundColor: '$purple100',
    color: '$white',
    border: 'none',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',

    '&:hover': {
      backgroundColor: '$purple200',
    },

    '&:focus': {
      outline: '2px solid $green100',
      outlineOffset: '2px',
    },
  },
})
