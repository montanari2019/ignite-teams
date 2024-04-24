import { BackButton, Container, Logo } from "./styled";
import { AntDesign } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";

interface HeaderButtonProps {
  showBackButton?: boolean;
}
export function Header({ showBackButton }: HeaderButtonProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <AntDesign name="caretleft" size={24} color="white" />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
