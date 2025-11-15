import { AvatarContainer } from './styles'

type AvatarSize = 'big' | 'small' | 'sm' | 'lg'

type AvatarProps = {
  src?: string | null
  alt: string
  size?: AvatarSize
}

const mapSize = (size: AvatarSize): 'big' | 'small' => {
  switch (size) {
    case 'sm':
    case 'small':
      return 'small'
    case 'lg':
    case 'big':
    default:
      return 'big'
  }
}

export const Avatar = ({ src, alt, size = 'big' }: AvatarProps) => {
  const mappedSize = mapSize(size)
  const imageUrl = src || '/images/default-avatar.png'

  return (
    <AvatarContainer size={mappedSize}>
      <img src={imageUrl} alt={alt} loading="lazy" />
    </AvatarContainer>
  )
}
