import React, { useState } from 'react';
import { View } from 'react-native';
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { useNavigation  } from "@react-navigation/native";
import { screen } from "../../../utils";
import { loginValues, validationLogin } from '../RegisterForm/RegisterForm.data';
import { Input, Icon, Button } from "react-native-elements";
import { styles } from './LogginForm.styles';


export function LogginForm() {

const[showPassword, setShowPassword] = useState(false);
const navigation = useNavigation();

const showHiddenPassword = () => setShowPassword((prevState) => !prevState)


const formik = useFormik({
    initialValues: loginValues(),
    validationSchema: validationLogin(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
       try {
            const auth = getAuth();
            await signInWithEmailAndPassword(
                auth,
                formValue.email,
                formValue.password
            );
            navigation.navigate(screen.account.account)
       } catch (error) {
           Toast.show({
            type:"error",
            position: "bottom",
            text1: "Usuario o contraseña incorrecto."
           })
       }
    }
});

  return (
    <View style={styles.content}>
        <Input 
                placeholder = "Correo Electrónico" 
                constainerStyle={styles.input}
                rightIcon={<Icon 
                            type="material-community" 
                            name="at" 
                            iconStyle={styles.icon}/>}
                onChangeText={(text) => formik.setFieldValue("email", text)}
                errorMessage={formik.errors.email}
                />
        <Input 
                placeholder = "Password" 
                constainerStyle={styles.input} 
                secureTextEntry={showPassword ? false:true}
                rightIcon={<Icon 
                                type="material-community" 
                                name={showPassword ? "eye-outline":"eye-off-outline"}
                                iconStyle={styles.icon} 
                                onPress={showHiddenPassword}/>}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
                />
        <Button title="Iniciar Sesión" 
                containerStyle={styles.boton} 
                buttonStyle={styles.btn} 
                onPress={formik.handleSubmit}
                loading={formik.isSubmit}/>
    </View>
  )
}