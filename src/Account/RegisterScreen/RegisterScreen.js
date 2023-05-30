import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RegisterForm } from '../../Components/Auth';
import { styles } from './RegisterScreen.styles';


export  function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
        <Image source={require("../../../assets/img/gota-agua.png")} 
               style={styles.image} 
        />
      <View style={styles.content}>
          <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}