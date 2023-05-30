import React from 'react'
import { View } from 'react-native'
import { Text } from "react-native-elements"
import { Map } from "../../Shared"
import { styles } from "./Header.styles"



export function Header(props) {

    const {contramuestra} = props;
    console.log(contramuestra);

  return (
    <View style={styles.content}>
       <View style={styles.titleView}>
           <Text style={styles.texto4}>Información sobre muestra de agua</Text>
           <Text style={styles.texto}>Rótulo : {contramuestra.rotulo}</Text>
           <Text style={styles.texto2}>Número : {contramuestra.numero}</Text>
           <Text style={styles.texto2}>Apariencia : {contramuestra.apariencia}</Text>
           <Text style={styles.texto2}>Región : {contramuestra.region}</Text>
           <Text style={styles.texto2}>Ciudad : {contramuestra.ciudad}</Text>
           <Text style={styles.texto2}>Dirección : {contramuestra.direccion}</Text>
           <Text style={styles.texto2}>Volumen : {contramuestra.volumen} cc</Text>
           <Text style={styles.texto2}>Alcalinidad Ph : {contramuestra.alcalinidad}</Text>
           <Text style={styles.texto2}>Dureza Ppm : {contramuestra.dureza}</Text>
           <Text style={styles.texto2}>Comentarios : {contramuestra.comentarios}</Text>
       </View>
       <Text style={styles.texto3}>Mapa locación muestra de agua</Text>
       <View>
           <Map 
                location={contramuestra.location}
                name={contramuestra.rotulo}/>
       </View>
    </View>
  )
}