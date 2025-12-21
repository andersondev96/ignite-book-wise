import { ReactNode, memo } from "react";
import { Container, IconWrapper, ItemInfo, Title, Description } from "./styles";

interface ItemInfoProfileProps {
  icon: ReactNode;
  title: string | number;
  description: string;
  className?: string;
}

export const ItemInfoProfile = memo(
  ({ icon, title, description, className }: ItemInfoProfileProps) => (
    <Container className={className}>
      <IconWrapper>{icon}</IconWrapper>
      <ItemInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ItemInfo>
    </Container>
  )
);

ItemInfoProfile.displayName = "ItemInfoProfile";
