import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocacionesAgua } from "../screens/Aguas/LocacionesAgua";
import { AddAguaScreen } from "../screens/Aguas/AddAguaScreen";
import { AddAguaContramuestra } from "../screens/Aguas/AddAguaContramuestra";
import { AddAguaContramuestraForm } from "../screens/Aguas/AddAguaContramuestra/AddAguaContramuestraForm";
import { screen } from "../utils";


const Stack = createNativeStackNavigator();

export function AguaStack(){
    return(
        <Stack.Navigator>
             
            <Stack.Screen name={screen.agua.aguas} component = {LocacionesAgua} options={{title: "Tomas de muestra de Agua"}}/> 
            <Stack.Screen name={screen.agua.addAgua} component = {AddAguaScreen} options={{title: "Agregar locación de análisis de agua"}}/>  
            <Stack.Screen name={screen.agua.addAguaContramuestra} component ={AddAguaContramuestra} options={{title: "Agregar contramuestra"}} />
            <Stack.Screen name={screen.agua.addAguaContramuestraForm} component = {AddAguaContramuestraForm} options={{title: "Formulario contramuestra"}} />

        </Stack.Navigator>
    )
}