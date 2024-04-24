
import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, TitleButton } from "./styled";


interface ButtonComponentProps extends TouchableOpacityProps{
    title:string,
    type?: ButtonTypeStyleProps
}

export function ButtonComponent({ title, type, ...resto } :ButtonComponentProps){
     return(
         <Container type={type ? type : "primary"} >

            <TitleButton>{title}</TitleButton>
             
         </Container>
     )
}