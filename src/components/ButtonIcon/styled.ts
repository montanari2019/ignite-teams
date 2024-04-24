import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonIconStyleProps = "primary" | "secondary";

type PropsButton = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)`


  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;


  /* padding-top: px ; */
  /* background-color: ${({theme}) => theme.COLORS.GRAY_600}; */

`;


export const Icon = styled(MaterialIcons).attrs<PropsButton>(({theme, type}) => ({
  size: 24,
  color: type === "primary"? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``
