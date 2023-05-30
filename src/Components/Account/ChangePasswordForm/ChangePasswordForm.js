import React, { useState } from 'react'
import { View } from 'react-native'
import Toast from "react-native-toast-message";
import { Input, Button, Text } from "react-native-elements";
import { useFormik } from 'formik';
import { getAuth, updatePassword, EmailAuthProvider, reauthenticateWithCredential} from 'firebase/auth'
import { initialValues, validationSchema } from "./ChangePasswordForm.data";
import { styles } from "./ChangePasswordForm.styles"



export function ChangePasswordForm(props) {

  const { onClose } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const onShowPassword = () => setShowPassword((prevState) => !prevState);
  const onShowNewPassword = () => setShowNewPassword((prevState) => !prevState);
  const onShowRepeatPassword = () => setShowRepeatPassword((prevState) => !prevState);


  const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false, 
      onSubmit: async(formValue) => {
          try {
              const currentUser = getAuth().currentUser;

              const credentials = EmailAuthProvider.credential(
                  currentUser.email,
                  formValue.password
              );

              reauthenticateWithCredential(currentUser, credentials);

              await updatePassword(currentUser, formValue.newPassword);

              onClose();
          } catch (error) {
            Toast.show({
                type:"error",
                position: "bottom",
                text1: "Error al cambiar la password."
            })
          }
      }
  })


  return (
    <View style={styles.content}>
      <Text style={styles.titulo}>Formulario de cambio de Password</Text>
      <Input 
            placeholder="Ingrese password actual"
            containerStyle={styles.input}
            secureTextEntry={showPassword ? false: true}
            rightIcon={{
                type: "material-community",
                name: showPassword ? "eye-outline" : "eye-off-outline",
                color:"#c2c2c2",
                onPress: (onShowPassword)
            }}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            errorMessage={formik.errors.password}
        />
        <Input 
            placeholder="Ingrese nueva password"
            containerStyle={styles.input}
            secureTextEntry={showNewPassword ? false: true}
            rightIcon={{
                type: "material-community",
                name: showNewPassword ? "eye-outline" : "eye-off-outline",
                color:"#c2c2c2",
                onPress: (onShowNewPassword)
            }}
            onChangeText={(text) => formik.setFieldValue("newPassword", text)}
            errorMessage={formik.errors.newPassword}
        />
        <Input 
            placeholder="Repita la nueva password"
            containerStyle={styles.input}
            secureTextEntry={showRepeatPassword ? false: true}
            rightIcon={{
                type: "material-community",
                name: showRepeatPassword ? "eye-outline" : "eye-off-outline",
                color:"#c2c2c2",
                onPress: (onShowRepeatPassword)
            }}
            onChangeText={(text) => formik.setFieldValue("confirmNewPassword", text)}
            errorMessage={formik.errors.confirmNewPassword}
        />
        <Button 
                title="Cambiar Password"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
        />
    </View>
  )
}