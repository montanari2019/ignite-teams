import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';


export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 16px;
  margin-bottom: 12px;
`;

export const TitleCard = styled.Text`
  width: 80%;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
