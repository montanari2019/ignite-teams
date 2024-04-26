import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENUM_COLLECTION } from "../storage.config";
import { AppError } from "../../utils/app.error";
import { PlayerStorageDto } from "./@types";

export async function saveDataPlayersGroups(namePlayer: PlayerStorageDto, group:string) {
  try {


    const storagePlayers = await getPlayersByGroups(group)

    const playersAlreadyExists = storagePlayers.filter((e) => e.name === namePlayer.name)


    if(playersAlreadyExists.length > 0){
        throw new AppError("Essa pessoa ja está adicionada nessa turma")
    }

    const storage = JSON.stringify([...storagePlayers, namePlayer])
    
    await AsyncStorage.setItem(`${ENUM_COLLECTION.PLAYERS_COLLECTION}-${group}`, storage)


  } catch (error) {
    console.log(error);
    throw error;
  }
}



export async function getPlayersByGroups(group: string) {
  try {

    const storage = await AsyncStorage.getItem(`${ENUM_COLLECTION.PLAYERS_COLLECTION}-${group}`)

    const players:PlayerStorageDto[] = storage ? JSON.parse(storage) : []
  
    return players
    
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function getPlayersByGroupAndTeam(group:string, team:string) {
    try{

      const storage = await getPlayersByGroups(group)

      const players  = storage.filter((e) => e.team === team)


      return players


    }catch(error){
      throw error
    }
} 