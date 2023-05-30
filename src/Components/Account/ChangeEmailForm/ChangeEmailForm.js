import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button, Text } from "react-native-elements";
import Toast from "react-native-toast-message";
import { useFormik } from "formik";
import { getAuth, 
        updateEmail, 
        EmailAuthProvider, 
        reauthenticateWithCredential } from "firebase/auth";
import { styles } from "./ChangeEmailForm.styles"
import { initialValues, validationSchema } from '../ChangeEmailForm/ChangeEmailForm.data';

export function ChangeEmailForm(props) {

  const { onClose, onReload } = props;

  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = () => setShowPassword((prevState) => !prevState)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange:false,
    onSubmit: async(formValue) => {
      try {
        const currentUser = getAuth().currentUser;
              
        const credentials = EmailAuthProvider.credential(
              currentUser.email,   //correo actual del usuario
              formValue.password   //password actual del usuario
        );
        reauthenticateWithCredential(currentUser, credentials);
          await updateEmail(currentUser, formValue.email)
          onReload();
          onClose();
      } catch (error) {
        console.log(error)
        Toast.show({
          type:"error",
          position: "top",
          text1: "Error al cambiar el Email"
      })
      }
    }
  })

  return (
    <View style={styles.content}>
        <Text style={styles.titulo}>Formulario para cambio de Email</Text>
        <Input 
               placeholder="Ingrese el nuevo correo " 
               containerStyle={styles.input} 
               onChangeText={(text)=> formik.setFieldValue("email", text)}
               errorMessage={formik.errors.email}
        />
        <Input 
               placeholder='Password'
               containerStyle={styles.input}
               secureTextEntry={showPassword ? false : true}
               rightIcon={{
                type:"material-community",
                name: showPassword ? "eye-outline": "eye-off-outline",
                color: "#c2c2c2",
                onPress: onShowPassword
              }}
              onChangeText={(text) => formik.setFieldValue("password", text) }
              errorMessage={formik.errors.password}
        />
        <Button 
                title="Cambiar Email"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}

        />
    </View>
  )
}