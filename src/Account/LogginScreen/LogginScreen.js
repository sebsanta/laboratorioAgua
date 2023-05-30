import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { LogginForm } from "../../Components/Auth"
import { screen } from "../../utils"
import { styles} from './LogginScreen.styles';


export function LogginScreen() {

  const navigation = useNavigation(); 

  const goToRegister = () => {
    navigation.navigate(screen.account.register);

  }

  return (
   <ScrollView>
     <Image source={require("../../../assets/img/gota-agua.png")} 
            style={styles.image} /> 
    <View style={styles.content}>
    <LogginForm />
       <Text style={styles.textRegister}>
       
         ¿Aún no tienes una cuenta? <Text style={styles.btnRegister} onPress={goToRegister}>
         Regístrate</Text>
       </Text>
    </View>
   </ScrollView>  
  )
}