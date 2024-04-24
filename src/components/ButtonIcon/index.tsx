import { TouchableOpacity } from "react-native";
import { Container, Icon } from "./styled";

interface ButtonIconProps extends  TouchableOpacity{
  
}

export function ButtonIcon({...resto}:ButtonIconProps) {


  return (
    <Container {...resto}>

      <Icon 
        name="home"
        type="secondary"
      />
     
    </Container>
  );
}
