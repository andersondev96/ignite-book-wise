import { styled } from '@/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '564px',
  height: '178px',
  padding: '24px',
  borderRadius: '8px',
  background: '$gray700',

  p: {
    fontSize: '$sm',
    color: '$gray300',
    marginTop: '20px',
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const User = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  img: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '999px',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',

  strong: {
    fontSize: '$xs',
    fontWeight: 'bold',
    color: '$gray100',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
