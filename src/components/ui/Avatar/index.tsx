import { AvatarContainer } from './styles'

interface AvatarProps {
  image_name: string
  image_url: string
  size?: 'big' | 'small'
}

export const Avatar = ({
  image_name,
  image_url,
  size = 'big',
}: AvatarProps) => {
  return (
    <AvatarContainer size={size}>
      <img src={image_url} alt={image_name} />
    </AvatarContainer>
  )
}
