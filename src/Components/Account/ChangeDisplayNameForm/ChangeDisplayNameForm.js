import React from 'react';
import { View } from 'react-native';
import Toast from "react-native-toast-message";
import { Input, Button, Text } from "react-native-elements";
import { useFormik } from 'formik';
import { getAuth, updateProfile } from "firebase/auth";
import { initialValues, validationSchema } from './ChangeDisplayNameForm.data';
import { styles } from "./ChangeDisplayNameForm.styles";


export  function ChangeDisplayNameForm(props) {

    const { onClose, onReload } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const {displayName} = formValue;
                const currentUser = getAuth().currentUser
                await updateProfile(currentUser, {displayName});
            onReload(); // se actualiza la información desde userloggedSreen 
            onClose(); //metodo para cerrar el modal haciendo destructuring desde accountOptions
            } catch (error) {
                Toast.show({
                    type:"error",
                    position: "top",
                    text1: "Error al cambiar el nombre."
                })
            }

        }
    });


  return (
    <View style={styles.content}>
        <Text style={styles.titulo}>Formulario para cambio de nombre</Text>
        <Input placeholder='Ingrese el nuevo nombre' 
               rightIcon={{
                            type: "material-community",
                            name: "account-circle-outline",
                            color: "#c2c2c2"
               }}
          onChangeText={(text) => formik.setFieldValue("displayName", text)}
          errorMessage={formik.errors.displayName}
        />
        <Button title="Cambiar Nombre" 
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
        />
    </View>
  )
}