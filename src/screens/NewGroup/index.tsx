import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { InputComponent } from "../../components/InputComponet";
import { Container, Content } from "./styled";

import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { saveDataGroups } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/app.error";
import { Alert } from "react-native";

export function NewGroup() {
  const [groupName, setGroupName] = useState("");

  const navigation = useNavigation();

  async function handleRouterGroup() {
    try {
      await saveDataGroups(groupName);
      setGroupName("");
      navigation.navigate("players", { group: groupName });
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert("Novo grupo", error.message)
      }else {
        Alert.alert("Novo grupo","Não foi possível criar um novo grupo")
        console.log(error);

      }

    }
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

        <InputComponent
          placeholder="Nome da turma"
          value={groupName}
          onChangeText={(e) => setGroupName(e)}
        />

        <ButtonComponent
          disabled={groupName.trim().length === 0}
          style={groupName.trim().length === 0 && { opacity: 0.5 }}
          title="Criar"
          onPress={handleRouterGroup}
        />
      </Content>
    </Container>
  );
}
