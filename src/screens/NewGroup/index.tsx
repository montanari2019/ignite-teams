import { ButtonComponent } from "../../components/ButtonComponent";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { InputComponent } from "../../components/InputComponet";
import { Container, Content } from "./styled";

import { FontAwesome5 } from "@expo/vector-icons";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <FontAwesome5 name="users" size={56} color="#00875F" />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

            <InputComponent placeholder="Nome da turma"/>

        <ButtonComponent title="Criar"/>
      </Content>
    </Container>
  );
}
