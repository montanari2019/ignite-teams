import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENUM_COLLECTION } from "../storage.config";
import { AppError } from "../../utils/app.error";

export async function saveDataGroups(value: string) {
  try {
    const dataGroups = await getGroupAll();

    const groupAlreadyExists = dataGroups.includes(value);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome");
    }

    const storage = JSON.stringify([...dataGroups, value]);

    await AsyncStorage.setItem(ENUM_COLLECTION.GROUP_COLLECTION, storage);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getGroupAll() {
  try {
    const value = await AsyncStorage.getItem(ENUM_COLLECTION.GROUP_COLLECTION);

    const group = value ? JSON.parse(value) : [];

    return group;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function removeDataGroups(groupDeleteName: string) {
  try {
    const dataGroups:any[] = await getGroupAll();

    const groups = dataGroups.filter((group) => group !== groupDeleteName)

    await AsyncStorage.setItem(ENUM_COLLECTION.GROUP_COLLECTION, JSON.stringify(groups))

    await AsyncStorage.removeItem(`${ENUM_COLLECTION.PLAYERS_COLLECTION}-${groupDeleteName}`)

    
  } catch (error) {
    console.log(error);
    throw error;
  }
}
