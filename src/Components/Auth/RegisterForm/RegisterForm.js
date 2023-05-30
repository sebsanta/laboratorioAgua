import React, { useState } from 'react';
import { View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input, Icon, Button } from 'react-native-elements';
import { useFormik } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"
import  Toast from "react-native-toast-message";
import { screen } from "../../../utils"
import { initialValues, validationSchema } from './RegisterForm.data'
import { styles } from './RegisterForm.styles';


export function RegisterForm() {

     const[showPassword, setShowPassword] = useState(false);
     const[showRepeatPassword, setShowRepeatPassword] = useState(false);
     const navigation = useNavigation();


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        onSubmit: async (formValue) => {
           // console.log("formulario enviado")
           // console.log(formValue)
           try {
            const auth = getAuth();
            await createUserWithEmailAndPassword(
                auth, 
                formValue.email, 
                formValue.password
            );
                navigation.navigate(screen.account.account);
           } catch (error) {
               Toast.show({
                   type: "error",
                   position: "bottom",
                   text1: "Error al registrar usuario"
               })
               //console.log(error)
           }
        }
    })

    const showHiddenPassword = () => setShowPassword((prevState) => !prevState)
    const showHiddenRepeatPassword = () => setShowRepeatPassword((prevState) => !prevState)


  return (
    <View 
        style={styles.content}>
        
        <Input placeholder='Correo Electrónico' 
               containerStyle={styles.input} 
               rightIcon={<Icon 
                               type="material-community" 
                               name="at" 
                               iconStyle={styles.icon} 
                          />} 
                onChangeText={(text) => formik.setFieldValue("email",text)}
                errorMessage={formik.errors.email}

        />
        <Input placeholder='Contraseña' 
               containerStyle={styles.input} 
               secureTextEntry={showPassword ? false:true}
               rightIcon={<Icon 
                               type="material-community" 
                               name={showPassword ? "eye-outline":"eye-off-outline"}
                               iconStyle={styles.icon} 
                               onPress={showHiddenPassword}
                           />} 
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}
        />
        <Input placeholder='Repetir Contraseña' 
               containerStyle={styles.input} 
               secureTextEntry={showRepeatPassword ? false:true}
               rightIcon={<Icon 
                               type="material-community" 
                               name={showRepeatPassword ? "eye-outline":"eye-off-outline"}
                               iconStyle={styles.icon} 
                               onPress={showHiddenRepeatPassword}
                           />} 
                onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
                errorMessage={formik.errors.repeatPassword}
        />
        <Button title="Registrarse" 
                containerStyle={styles.bntContainer} 
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
        />
    </View>
  )
}