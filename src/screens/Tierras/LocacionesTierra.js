import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { useNavigation} from "@react-navigation/native"
import { screen } from "../../utils"


export  function LocacionesTierra(props) {
  const { navigation } = props;

  const goToAddTierra = () => {
      console.log("vamos a pagina de agregar locacion de muestra de aire");
      navigation.navigate(screen.tierra.addTierra);
  }

  return(
      <View>
          <Text>Screen de listado de locaciones de medición de Tierra</Text>
          <Button title="Crear locación Tierra" onPress={goToAddTierra}/>
      </View>
  );
}