import { ButtonComponent } from "../../components/ButtonComponent";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { InputComponent } from "../../components/InputComponet";
import { Container,  } from "./styled";

import { FontAwesome5 } from "@expo/vector-icons";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

  

        <Highlight
          title="Nome da turma"
          subtitle="adicione a galera e sepre os times"
        />

        <ButtonIcon />

            {/* <InputComponent placeholder="Nome da turma"/> */}

        {/* <ButtonComponent title="Criar"/> */}
     
    </Container>
  );
}
