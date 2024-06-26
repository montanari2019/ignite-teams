import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewGroup } from "../screens/NewGroup";
import { Players } from "../screens/Players";
import { Group } from "../screens/Groups";


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="groups" component={Group}/>
            <Screen name="new" component={NewGroup}/>
            <Screen name="players" component={Players}/>
        </Navigator>
    )
}