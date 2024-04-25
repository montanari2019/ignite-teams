import { FlatList } from "react-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { InputComponent } from "../../components/InputComponet";
import { Container, Forms, HeaderList, NumberOfPlayers } from "./styled";

import { useState } from "react";
import { PlayCard } from "../../components/PlayCard";
import { ListEmpty } from "../../components/ListEmpty";

export function Players() {
  const [team, setTeam] = useState("TIME A");
  const [playes, setPlayes] = useState(['ikaro', 'dani', 'maike', 'joao', 'mike', 'pedro', 'maria','afredo', 'pedrinho', 'carla'])
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e sepre os times"
      />

      <Forms>
        <InputComponent
          style={{ flex: 1 }}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" />
      </Forms>

      <HeaderList>
        <FlatList
        // style={{width: '50%', }}
          data={["TIME A", "TIME B", "TIME C", ]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team ? true : false}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{playes.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={playes}
        keyExtractor={(item) => item}
        renderItem={({item})=> (
          <PlayCard name={item} key={item} onRemove={() => {}}/> 
        )}
        ListEmptyComponent={()=> (
          <ListEmpty message="Não há pessoas nesse time"/>
        ) }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          playes.length === 0 && {flex: 1}
        ]}
      
      />

      <ButtonComponent type="secondary" onPress={() => {}} title="Remover Turma"/>

      {/* <InputComponent placeholder="Nome da turma"/> */}

      {/* <ButtonComponent title="Criar"/> */}
    </Container>
  );
}
