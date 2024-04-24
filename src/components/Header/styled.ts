import styled from "styled-components/native";




export const Container = styled.View`
   width: 100%;
   margin-top: 18%;
  
   flex-direction: row;
   align-items: center;
   justify-content: center;
    
`

export const BackButton = styled.TouchableOpacity`
    flex:  1;
`
export const Logo = styled.Image`

    width: 46px;
    height: 55px;
`

// export const LoadIndicator = styled.ActivityIndicator.attrs(({theme})=> ({
//     color: theme.COLORS.GREEN_500
// }))``