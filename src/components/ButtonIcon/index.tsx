import {  TouchableOpacityProps } from "react-native";
import { ButtonIconStyleProps, Container, Icon } from "./styled";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIconProps extends  TouchableOpacityProps{
   type?:ButtonIconStyleProps,
   icon: keyof typeof MaterialIcons.glyphMap

}

export function ButtonIcon({ type = 'primary',  icon , ...resto}:ButtonIconProps) {


  return (
    <Container {...resto} >

      <Icon 
        name={icon}
        type={type}
      />
     
    </Container>
  );
}
