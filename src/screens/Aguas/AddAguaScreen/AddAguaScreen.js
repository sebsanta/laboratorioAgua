import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { InfoFormAgua } from "./InfoFormAgua"
import { UploadImagesForm } from "./UploadImagesForm"
import { ImageAgua } from './ImageAgua'
import { v4 as uuid } from "uuid"
import { db } from "../../../utils"
import { useNavigation } from "@react-navigation/native"
import { doc, setDoc } from 'firebase/firestore'
import { Button } from "react-native-elements";
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './AddAguaScreen.data'
import { styles } from "./AddAguaScreen.styles"

export function AddAguaScreen() {

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange:false,
    onSubmit: async (formValue) => {
     // console.log(formValue)
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createAt = new Date();

        await setDoc(doc(db, "locacionesAgua", newData.id), newData)
        
        navigation.goBack();

      } catch (error) {
        console.log(error)
      }

    }
  })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <ImageAgua formik={formik}/>

        <InfoFormAgua formik={formik}/>

        <UploadImagesForm formik={formik}/>

        <Button title="Crear locación agua" 
                buttonStyle={styles.addAgua} 
                onPress={formik.handleSubmit}
                loading={formik.isSubmitting}
        />
     
    </ScrollView>
  )
}