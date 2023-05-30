import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LocacionesAire} from "../screens/Aires/LocacionesAire";
import {AddAireScreen} from "../screens/Aires/AddAireScreen";
import { screen } from "../utils";


const Stack = createNativeStackNavigator();

export function AireStack(){
    return(
        <Stack.Navigator>
           
            <Stack.Screen name={screen.aire.aires} component={LocacionesAire} options={{title: "Tomas de muestra de Aire"}} /> 
            <Stack.Screen name={screen.aire.addAire} component={AddAireScreen} options={{title: "Agregar locación de análisis de aire"}} />
        </Stack.Navigator>
    )
}

