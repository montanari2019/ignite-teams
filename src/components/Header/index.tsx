import { BackButton, Container, Logo } from "./styled";
import { AntDesign } from "@expo/vector-icons";
import logoImg from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

interface HeaderButtonProps {
  showBackButton?: boolean;
}
export function Header({ showBackButton }: HeaderButtonProps) {


  const navigation = useNavigation() as any

  function handleGoBack(){
    navigation.navigate('groups')
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <AntDesign name="caretleft" size={24} color="white" />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
