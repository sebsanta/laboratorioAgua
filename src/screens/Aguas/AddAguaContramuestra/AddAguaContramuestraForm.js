import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { doc, onSnapshot, collection, query, where, orderBy, updateDoc, setDoc} from "firebase/firestore"
import { CarrouselCard } from "../../../Components/Shared"
import { Text , Input, Button } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik'
import { getAuth } from "firebase/auth"
import { v4 as uuid } from "uuid"
import { Toast } from "react-native-toast-message"
import { db } from "../../../utils"
import { styles } from "./AddAguaContramuestra.styles"
import { initialValues, validationSchema } from "./AddAguaContramuestra.data"



export function AddAguaContramuestraForm(props) {

    const {route, params, arrayImages, idContramuestra, contramuestraArray} = props;
    // console.log("idContramuestra");
    // console.log(idContramuestra);
    // console.log("contramuesraArray");
    // console.log(contramuestraArray);
    // console.log("route");
    // console.log(route);
    // console.log("params");
    // console.log(params);
    // console.log("arrayimages");
    // console.log(arrayImages);
    //console.log(route)
    const [contramuestras, setContramuestras] = useState(null);
    const navigation = useNavigation();
   // console.log("contramuestras")
   // console.log(contramuestras);
    //console.log("contramuestras/images")
    //console.log(route.params)
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange:false,
        onSubmit: async(formValue) => {
            console.log(formValue)
            try {
              const auth = getAuth();
              const idDoc = uuid();
              const newData = formValue;
                newData.id = idDoc;
                newData.idContramuestra = route.params.idContramuestra;
                newData.idUser = auth.currentUser.uid;
                newData.avatar = auth.currentUser.photoURL;
                newData.createAt = new Date();
                await setDoc(doc(db, "contramuestraAgua", idDoc),newData);

                navigation.goBack();

            } catch (error) {
                Toast.show({
                    type:"error",
                    position: "bottom",
                    text1: "Error al enviar la contramuestra"
                })
            }
        }
    });

    useEffect(() => {
        setContramuestras(null)
        onSnapshot(doc(db, "locacionesAgua", route.params.idContramuestra), (doc) => {
            setContramuestras(doc.data());
           // console.log("data");
           // console.log(doc.data())
        })
    }, [route.params.idContramuestra])
    //console.log(contramuestra.id);
    //console.log(contramuestra.images)
  
    
   


  return (


    <KeyboardAwareScrollView>
      {/* <CarrouselCard arrayImages={} />     */}
    <View style={styles.contents}>
        <View>
        <Input 
            placeholder='Ingrese el rótulo de muestra'
            onChangeText={(text) => formik.setFieldValue("rotulo", text)}
            errorMessage={formik.errors.rotulo}
      />
      <Input 
            placeholder='Ingrese el número de muestra'
            keyboardType="numeric"
            maxLength={5}
            onChangeText={(text) => formik.setFieldValue("numero", text)}
            errorMessage={formik.errors.numero}
      />
      <Input 
            placeholder='Ingrese el tipo de muestra'
            onChangeText={(text) => formik.setFieldValue("tipo", text)}
            errorMessage={formik.errors.tipo}
      />
     
      <Input 
             placeholder='Ingrese la apariencia de la muestra' 
             onChangeText={(text) => formik.setFieldValue("apariencia", text)}
             errorMessage={formik.errors.apariencia}
      />
      <Input 
              placeholder='Ingrese el volumen tomado [cc]'
              keyboardType="numeric"
              maxLength={5}
              onChangeText={(text) => formik.setFieldValue("volumen", text)}
              errorMessage={formik.errors.volumen}
      />
      <Input 
             placeholder='Ingrese alcalinidad de muestra [Ph]' 
             keyboardType="numeric"
             maxLength={1}
             onChangeText={(text) => formik.setFieldValue("alcalinidad", text)}
             errorMessage={formik.errors.alcalinidad}
      />
      <Input 
             placeholder='Ingrese dureza de muestra [Ppm]' 
             keyboardType="numeric"
             maxLength={4}
             onChangeText={(text) => formik.setFieldValue("dureza", text)}
             errorMessage={formik.errors.dureza}
      />
      <Input 
             placeholder='Ingrese comentarios de la muestra' 
             multiline={true} 
             inputContainerStyle={styles.textArea}
             onChangeText={(text) => formik.setFieldValue("comentarios", text)}
             errorMessage={formik.errors.comentarios}
      />
        </View>
        <Button 
            title="Enviar Contramuestra" 
            inputContainerStyle={styles.botonContramuestra}
            buttonStyle={styles.btn}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
        />
    </View>
    </KeyboardAwareScrollView>
    
  )
}