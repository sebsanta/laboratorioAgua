import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MapForm } from '../../../MapForm'
import { Input } from "react-native-elements"
import { styles } from './InfoFormAgua.styles'

export function InfoFormAgua(props) {

    const {formik} = props;
    const[showMap, setShowMap] = useState(false)

    const onOpenCloseMap = () => {
        setShowMap((prevState) => !(prevState))
    }

  return (
      <>

    <KeyboardAwareScrollView>
    <View style={styles.content}>  
    
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
             placeholder='Ingrese la región' 
             onChangeText={(text) => formik.setFieldValue("region", text)}
             errorMessage={formik.errors.region}
      />
      <Input 
             placeholder='Ingrese la ciudad' 
             onChangeText={(text) => formik.setFieldValue("ciudad", text)}
             errorMessage={formik.errors.ciudad}
      />
            <Input 
             placeholder='Ingrese la comuna' 
             onChangeText={(text) => formik.setFieldValue("comuna", text)}
             errorMessage={formik.errors.comuna}
      />
      <Input 
             placeholder='Ingrese dirección aproximada'
             rightIcon={{
                 type: "material-community",
                 name: "map-marker-radius",
                 color: getColorIconMap(formik),
                 onPress: onOpenCloseMap,
             }}
             onChangeText={(text) => formik.setFieldValue("direccion", text)}
             errorMessage={formik.errors.direccion}
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
    </KeyboardAwareScrollView>
    <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
    
  )
}

const getColorIconMap = (formik) => {
    if(formik.errors.location) return "#CC320B";
    if(formik.values.location) return "#33A5FF";

    return "#000000"

}