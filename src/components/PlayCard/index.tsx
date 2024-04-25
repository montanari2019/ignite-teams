import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name } from "./styled";

interface PlayCardProps {
  name: string;
  onRemove: () =>void
}

export function PlayCard({ name, onRemove }: PlayCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove}/>
    </Container>
  );
}
