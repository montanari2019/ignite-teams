import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 5% ;
  /* padding-top: px ; */
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  /* align-items: center; */
  /* justify-content: center; */
  
`;


export const Title = styled.Text`
    font-size: 32px;
    color: #fff;

`
