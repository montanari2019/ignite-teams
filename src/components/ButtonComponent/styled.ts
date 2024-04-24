import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

type PropsButton = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<PropsButton>`
  /* flex: 1; */
  margin-bottom: 16px;
  min-width: 56px;
  min-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const TitleButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
