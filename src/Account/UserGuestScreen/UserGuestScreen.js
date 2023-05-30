import React from 'react';
import { View, ScrollView} from 'react-native';
import { Text, Image, Button} from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { screen } from "../../utils";
import { styles } from "./UserGuestScreen.styles";


export function UserGuestScreen() {

  const navigation = useNavigation();

  const goToLoggin = () => {
    navigation.navigate(screen.account.login);
  }

  return (
  <ScrollView centerContent={true} style={styles.content}>
      <Image source={require("../../../assets/img/agua-suelo.jpeg")} style={styles.image} />
      <Text style={styles.title}>Consulta tu perfil de usuario...</Text>
      <Text style={styles.parrafo}>¿Has tomado alguna vez una muestra de agua, de tierra o de aire y has medido su pureza y calidad?
                                    En aquellos lugares donde tengas que tomar una muestra representativa, analiza y guarda los datos 
                                    en la aplicación y compártela con otros usuarios o colegas.
      </Text>
      <View style={styles.contents}>
        <Button 
            containerStyle={styles.container}
            buttonStyle={styles.boton} 
            title="Ver tu perfil" 
            onPress={goToLoggin}
        />
      </View>
  </ScrollView>
  );
}

//const styles = StyleSheet.create({})