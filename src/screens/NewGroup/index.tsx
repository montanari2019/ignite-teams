import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { InputComponent } from "../../components/InputComponet";
import { Container, Content } from "./styled";

import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

export function NewGroup() {

  const [groupName, setGroupName] = useState('')

  const navigation = useNavigation() as any

  function handleRouterGroup(){
    navigation.navigate('players', {group: groupName})
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <FontAwesome5 name="users" size={56} color="#00875F" />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

            <InputComponent placeholder="Nome da turma" onChangeText={(e) => setGroupName(e)}/>

        <ButtonComponent title="Criar" onPress={handleRouterGroup}/>
      </Content>
    </Container>
  );
}
