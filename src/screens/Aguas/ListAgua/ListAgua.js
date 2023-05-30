import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { Text, Image } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import { screen } from "../../../utils"
import { styles } from "./ListAgua.styles"

export function ListAgua(props) {

    const navigation = useNavigation();
    const { locAgua } = props;


    const goToLocacionesAgua = (locacionesAgua) => {
        navigation.navigate(screen.agua.addAguaContramuestra, {id: locacionesAgua.id});
        //cuando hace uso de la navegación le entrega el parámetro id para que con los props de navegacion
        //cuando salga de este componente y vaya a AddAguaContramuestra lleve consigo el id en los props
    }


    return (
    <View>
       <FlatList 
            data={locAgua}
            renderItem={(doc) => {
                const locacionesAgua = doc.item.data();
                const createReview = new Date(doc.item.data().createAt.seconds * 1000);
                //console.log(locacionesAgua)

                return(
                    <TouchableOpacity onPress={() => goToLocacionesAgua(locacionesAgua)}>
                        <View style={styles.locacionesAgua}>
                            <Image 
                                source={{uri: locacionesAgua.images[0]}} style={styles.image}
                            />
                            <View>
                                <Text style={styles.rotulo}>Rótulo: {locacionesAgua.rotulo}</Text>
                                <Text style={styles.info}>Región: {locacionesAgua.region}</Text>
                                <Text style={styles.info}>Ciudad: {locacionesAgua.ciudad}</Text>
                                <Text style={styles.info}>Comuna: {locacionesAgua.comuna}</Text>
                                <Text style={styles.info}>Dureza: {locacionesAgua.dureza}</Text>
                                <Text style={styles.info}>Decripción: {locacionesAgua.comentarios}</Text>
                                <Text style={styles.info}>Fecha:  {createReview.getDate()}/{createReview.getMonth() + 1}/
                                                                  {createReview.getFullYear()} - {createReview.getHours() < 10 ? "0" : ""}
                                                                  {createReview.getHours()}:{createReview.getMinutes() < 10 ? "0" : ""}
                                                                  {createReview.getMinutes()}</Text> 
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
       />
    </View>
  )
}