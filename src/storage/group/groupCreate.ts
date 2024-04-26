import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENUM_COLLECTION } from "../storage.config";
import { AppError } from "../../utils/app.error";

export async function saveDataGroups(value: string) {
  try {
    const dataGroups = await getGroupAll();

    const groupAlreadyExists = dataGroups.includes(value);

    if(groupAlreadyExists){
        throw new AppError("Já existe um grupo cadastrado com esse nome")
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

      return value ? JSON.parse(value) : [];
    
  } catch (error) {
    console.log(error);
    throw error;
  }
}
