import React, { useState, useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import { doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore"
import { Carrousel } from "../../../Components/Shared"
import { Header } from "../../../Components/AguaVista/Header"
import { BtnContramuestra } from "../../../Components/AguaVista/BtnContramuestra"
import { Loading, Map } from "../../../Components/Shared"
import { db } from "../../../utils"
import { styles } from "./AddAguaContramuestra.styles"


export function AddAguaContramuestra(props) {

    const { route } = props;
   // console.log(route);
    const [contramuestra, setContramuestra] = useState(null);


    useEffect(() => {
        setContramuestra(null)
        onSnapshot(doc(db, "locacionesAgua", route.params.id), (doc) => {
            setContramuestra(doc.data());
            console.log(doc.data())
        })
    }, [route.params.id])
    

if(!contramuestra) return <Loading show text="Cargando imágenes..."/>;

   return (
     <ScrollView style={styles.content}>
       <Carrousel arrayImages={contramuestra.images} />
       <Header contramuestra={contramuestra}/>
       <BtnContramuestra idContramuestra={contramuestra.id} contramuestraArray={contramuestra.images}/>
     </ScrollView>
   )
}