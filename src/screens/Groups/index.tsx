import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Container, Title } from "./styled";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { GroupCard } from "../../components/GroupCard";
import { useState } from "react";
import { ListEmpty } from "../../components/ListEmpty";
import { ButtonComponent } from "../../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const groupsDefault = [
  {
    id: Math.random().toString(),
    title: "Turma do pedal, que é isso ?"
  },
  {
    id: Math.random().toString(),
    title: "Equipe de Desenvolvimento Web"
  },
  {
    id: Math.random().toString(),
    title: "Clube de Leitura"
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Estudos de Matemática"
  },
  {
    id: Math.random().toString(),
    title: "Clube de Música"
  },
  {
    id: Math.random().toString(),
    title: "Time de Futebol"
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Yoga"
  },
  {
    id: Math.random().toString(),
    title: "Companhia de Teatro Amador"
  },
  {
    id: Math.random().toString(),
    title: "Clube de Fotografia"
  },
  {
    id: Math.random().toString(),
    title: "Equipe de eSports"
  },
  {
    id: Math.random().toString(),
    title: "Clube de Culinária"
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Estudos de História"
  },
  {
    id: Math.random().toString(),
    title: "Sociedade de Astronomia"
  },
  {
    id: Math.random().toString(),
    title: "Equipe de Corrida"
  },
  {
    id: Math.random().toString(),
    title: "Clube de Artesanato"
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Meditação"
  },
  {
    id: Math.random().toString(),
    title: "Banda de Rock Amadora"
  },
  {
    id: Math.random().toString(),
    title: "Time de Basquete"
  },
  {
    id: Math.random().toString(),
    title: "Clube de Viagens"
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Estudos de Línguas Estrangeiras"
  }
];

type GroupCardListProps = typeof groupsDefault

export function Group() {
  const [groups, setGroups] = useState<GroupCardListProps>([])

  const navigation =  useNavigation() as any

  function handleRoute(){
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turmas" />

      <FlatList
      
        data={groups}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GroupCard title={item.title} />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={()=> (
          <ListEmpty message="Que tal cadastrar novos itens ?"/>
        ) }
      
      />

      <ButtonComponent title="Criar nova turma" onPress={handleRoute}/>

      {/* <GroupCard  title="Galera do futebol" /> */}
      {/* <Title>Groups</Title> */}
    </Container>
  );
}
