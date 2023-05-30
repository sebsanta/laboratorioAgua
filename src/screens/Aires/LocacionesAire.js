import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { useNavigation} from "@react-navigation/native"
import { screen } from "../../utils"





export  function LocacionesAire(props) {
  const { navigation } = props;

    const goToAddAire = () => {
        console.log("vamos a pagina de agregar locacion de muestra de aire");
        navigation.navigate(screen.aire.addAire);
    }

    return(
        <View>
            <Text>Screen de listado de locaciones de medición de agua</Text>
            <Button title="Crear locación Aire" onPress={goToAddAire}/>
        </View>
    );
}