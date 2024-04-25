
import { Container, FilterStyleProps, TitleFilter } from "./styled";

import { TouchableOpacityProps } from "react-native";


interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string
}

export function Filter({ isActive = false, title, ...resto }:FilterProps) {
  return (
    <Container {...resto} isActive={isActive}>
        <TitleFilter>{title}</TitleFilter>
    </Container>
  );
}
