import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Container, Title } from "./styled";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { GroupCard } from "../../components/GroupCard";
import { useCallback, useEffect, useState } from "react";
import { ListEmpty } from "../../components/ListEmpty";
import { ButtonComponent } from "../../components/ButtonComponent";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getGroupAll } from "../../storage/group/groupCreate";

const groupsDefault = [
  {
    id: Math.random().toString(),
    title: "Turma do pedal, que é isso ?",
  },
  {
    id: Math.random().toString(),
    title: "Equipe de Desenvolvimento Web",
  },
  {
    id: Math.random().toString(),
    title: "Clube de Leitura",
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Estudos de Matemática",
  },
  {
    id: Math.random().toString(),
    title: "Clube de Música",
  },
  {
    id: Math.random().toString(),
    title: "Time de Futebol",
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Yoga",
  },
  {
    id: Math.random().toString(),
    title: "Companhia de Teatro Amador",
  },
  {
    id: Math.random().toString(),
    title: "Clube de Fotografia",
  },
  {
    id: Math.random().toString(),
    title: "Equipe de eSports",
  },
  {
    id: Math.random().toString(),
    title: "Clube de Culinária",
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Estudos de História",
  },
  {
    id: Math.random().toString(),
    title: "Sociedade de Astronomia",
  },
  {
    id: Math.random().toString(),
    title: "Equipe de Corrida",
  },
  {
    id: Math.random().toString(),
    title: "Clube de Artesanato",
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Meditação",
  },
  {
    id: Math.random().toString(),
    title: "Banda de Rock Amadora",
  },
  {
    id: Math.random().toString(),
    title: "Time de Basquete",
  },
  {
    id: Math.random().toString(),
    title: "Clube de Viagens",
  },
  {
    id: Math.random().toString(),
    title: "Grupo de Estudos de Línguas Estrangeiras",
  },
];

type GroupCardListProps = typeof groupsDefault;

export function Group() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleRoute() {
    navigation.navigate("new");
  }

  async function GetGrupos() {
    try {
      const groupsRequest = await getGroupAll();
      setGroups(groupsRequest);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(nameGroup: string) {
    navigation.navigate("players", { group: nameGroup });
  }

  useFocusEffect(
    useCallback(() => {
      GetGrupos();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turmas" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar novos itens ?" />
        )}
      />

      <ButtonComponent title="Criar nova turma" onPress={handleRoute} />

      {/* <GroupCard  title="Galera do futebol" /> */}
      {/* <Title>Groups</Title> */}
    </Container>
  );
}
