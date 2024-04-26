import { Alert, FlatList, TextInput } from "react-native";
import { ButtonComponent } from "../../components/ButtonComponent";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { InputComponent } from "../../components/InputComponet";
import { Container, Forms, HeaderList, NumberOfPlayers } from "./styled";

import { useEffect, useRef, useState } from "react";
import { PlayCard } from "../../components/PlayCard";
import { ListEmpty } from "../../components/ListEmpty";
import { useRoute } from "@react-navigation/native";
import { AppError } from "../../utils/app.error";
import { getPlayersByGroupAndTeam, saveDataPlayersGroups } from "../../storage/player/playerCreate";
import { PlayerStorageDto } from "../../storage/player/@types";


type RouteParams = {
  group : string
}

export function Players() {
  const [team, setTeam] = useState("TIME A");
  const [player, setPlayer] = useState("");


  const newPlayerNameInputRef = useRef<TextInput>(null)

  const [playes, setPlayes] = useState<PlayerStorageDto[]>([]);

  const route = useRoute()
  const {group} = route.params as RouteParams

  async function handleAddPlayer(){
      if(player.trim().length === 0){
        return Alert.alert("Novo player", "Informe o nome da pessoa para adicionar")
      }


      const newPlayer = {
        name: player,
        team: team,
      }


      try{

        await saveDataPlayersGroups(newPlayer, group)
        newPlayerNameInputRef.current?.blur()
        setPlayer("")
        fetchPlayersByTeam()

        // const players
        
      }catch(error) {
        if(error instanceof AppError){
          Alert.alert("Novo player", error.message)
        }else{
          Alert.alert("Novo player", "Não foi possível adicionar")

        }
      }
  }


  async function fetchPlayersByTeam() {
      try{

        const playersByTeam = await getPlayersByGroupAndTeam(group, team)
        setPlayes(playersByTeam)

      }catch(error) {
        if(error instanceof AppError){
          Alert.alert("Pessoas", error.message)
        }else{
          Alert.alert("Pessoas", "Não foi possível carregar as pessoas")

        }
      }
  }


  useEffect(()=>{
    fetchPlayersByTeam()
  },[team, ])




  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={group}
        subtitle="adicione a galera e sepre os times"
      />

      <Forms>
        <InputComponent
          style={{ flex: 1 }}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={player}
          inputRef={newPlayerNameInputRef}
          onChangeText={(e)=> setPlayer(e)}
          returnKeyType="done"
          onSubmitEditing={handleAddPlayer}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Forms>

      <HeaderList>
        <FlatList
          data={["TIME A", "TIME B", "TIME C"]}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayCard name={item.name} key={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          playes.length === 0 && { flex: 1 },
        ]}
      />

      <ButtonComponent
        type="secondary"
        onPress={() => {}}
        title="Remover Turma"
      />
    </Container>
  );
}
