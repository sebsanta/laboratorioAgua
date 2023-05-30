import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../Account/AccountScreen";
import {LogginScreen} from "../Account/LogginScreen/LogginScreen";
import { RegisterScreen } from "../Account/RegisterScreen/RegisterScreen";
import { screen } from "../utils";


const Stack = createNativeStackNavigator();

export function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.account.account} component={AccountScreen} options={{title:"Cuenta"}} />
            <Stack.Screen name={screen.account.login} component={LogginScreen} options={{title: "Información de la cuenta"}} />
            <Stack.Screen name={screen.account.register} component={RegisterScreen} options={{title: "Registrate en la App"}} />
        </Stack.Navigator>
    )
}