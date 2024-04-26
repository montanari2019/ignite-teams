import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styled";
import { useTheme } from "styled-components/native";


interface InputComponentProps extends TextInputProps{
    inputRef?: React.RefObject<TextInput>
}
export function InputComponent({ inputRef,...resto }:InputComponentProps){

    const { COLORS } = useTheme()
    return (
        <Container ref={inputRef} {...resto} placeholderTextColor={COLORS.GRAY_400}/>
    )
}