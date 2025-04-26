import { AvatarContainer } from './styles'

type AvatarProps = {
  imageName: string
  imageUrl: string
  size?: 'big' | 'small'
}

export const Avatar = ({ imageName, imageUrl, size = 'big' }: AvatarProps) => (
  <AvatarContainer size={size}>
    <img src={imageUrl} alt={imageName} loading="lazy" />
  </AvatarContainer>
)
