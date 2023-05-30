import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';
import { AguaStack } from "./AguaStack";
import { AireStack } from "./AireStack";
import { TierraStack } from "./TierraStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

import { screen } from "../utils"

import {LocacionesAgua} from "../screens/Aguas/LocacionesAgua/LocacionesAgua";

import {LocacionesAire} from "../screens/Aires/LocacionesAire";
import {LocacionesTierra} from "../screens/Tierras/LocacionesTierra";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../Account/AccountScreen";

//import {AddAguaScreen} from "../screens/Aguas/AddAguaScreen";



const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#33A5FF",
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarInactiveTintColor: "#646464",
                tabBarLabelPosition:"below-icon",
                tabBarIcon: ({ color ,size}) => screenOptionsTab(route, color, size),
            })}
        >
            <Tab.Screen name = {screen.agua.tab} component={AguaStack} options = {{title: "Agua"}}/>
            {/* <Tab.Screen name = {screen.agua.addAgua} component={AddAguaScreen} options = {{title: "Añadir Locación Agua"}}/> */}

            <Tab.Screen name = {screen.tierra.tab} component={TierraStack} options = {{title: "Tierra"}}/>

            <Tab.Screen name = {screen.aire.tab} component={AireStack} options = {{title: "Aire"}}/>
            {/* <Tab.Screen name = {screen.aire.tab} component={LocacionesAire} options = {{title: "Aire"}}/> */}

            <Tab.Screen name = {screen.search.tab} component={SearchStack} options = {{title: "Search"}}/>

            <Tab.Screen name = {screen.account.tab} component={AccountStack} options = {{title:"Account"}}/>
        </Tab.Navigator>
    )
}

function screenOptionsTab(route, color, size){
    let iconName;

    if(route.name === screen.agua.tab){
        iconName = "water-circle"
    }
    if(route.name === screen.tierra.tab){
        iconName = "wheel-barrow";
    }
    if(route.name === screen.aire.tab){
        iconName = "weather-fog"
    }
    if(route.name === screen.search.tab){
        iconName = "magnify-expand"
    }
    if(route.name === screen.account.tab){
        iconName = "account-key"
    }

    return (
        <Icon 
            type="material-community" 
            name={iconName}
            color = { color }
            size = { 35 } 
            
        />
    )
}
