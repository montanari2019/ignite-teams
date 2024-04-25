import { TextInput } from "react-native";
import styled from "styled-components/native";



export const Container = styled(TextInput)`
    /* flex: 1; */
    height: 56px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;
    padding: 16px;

    
    

`