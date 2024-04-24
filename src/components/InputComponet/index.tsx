import { TextInputProps } from "react-native";
import { Container } from "./styled";
import { useTheme } from "styled-components/native";



export function InputComponent({ ...resto }:TextInputProps){

    const { COLORS } = useTheme()
    return (
        <Container {...resto} placeholderTextColor={COLORS.GRAY_400}/>
    )
}