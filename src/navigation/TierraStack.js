import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddTierraScreen } from "../screens/Tierras/AddTierraScreen";
import { LocacionesTierra } from "../screens/Tierras/LocacionesTierra";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function TierraStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen  name={screen.tierra.tierras} component={LocacionesTierra} options={{title:"Tomas de muestra de Tierras"}}  />
            <Stack.Screen  name={screen.tierra.addTierra} component={AddTierraScreen} options={{title:"Agregar locación de análisis de tierra"}}  />
        </Stack.Navigator>
    )
}