import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, Button } from "react-native-elements"
import { query, collection, where, onSnapshot } from "firebase/firestore"
import { size } from "lodash"
import { useNavigation } from "@react-navigation/native"
import { screen } from "../../../utils"
import { db } from "../../../utils"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { styles } from './BtnContramuestra.styles'


export function BtnContramuestra(props) {

    const { idContramuestra, contramuestraArray } = props;
    const [hasLogged, setHasLogged] = useState(false);
    const [hasReview, setHasReview] = useState(false);
    const navigation = useNavigation();
    const auth = getAuth();
   // console.log(idContramuestra)

   useEffect(() => {
     onAuthStateChanged(auth, (user) => {
        setHasLogged(user ? true : false)
     })
   }, []);

   useEffect(() => {
      if(hasLogged){
          const q = query(
              collection(db, "contramuestraAgua"), 
              where("idContramuestra", "==" ,idContramuestra ),
              where("idUser", "==", auth.currentUser.uid)
          );
          onSnapshot(q, (snapshot) => {
              if(size(snapshot.docs) > 2) setHasReview(true);
              console.log(snapshot.docs)
          });
      }
   }, [hasLogged]);
   
   
   const goToLoggin = () => {
    navigation.navigate(screen.account.tab, {
        screen: screen.account.login,
    });
    }

    const goToAddContramuestra = () => {
        console.log(idContramuestra);
        console.log(contramuestraArray);
        navigation.navigate(screen.agua.addAguaContramuestraForm, {
            idContramuestra,
            contramuestraArray,
        })
    }

    if(hasLogged && hasReview){
        return(
        <View style={styles.content}>
            <Text style={styles.textoContramuestra}>Esta muestra de agua ya tiene una contramuestra asignada</Text>
        </View>
        )
    }

  return (
    <View style={styles.content}>
        {hasLogged ? (
              <Button 
                    title="Agregar una contramuestra"
                    containerStyle={styles.button}
                    icon={{type : "material-community",
                           name: "square-edit-outline",
                           color: "#fff"}}
                    buttonStyle={styles.button}
                    onPress={goToAddContramuestra}
              />
        ):(
            <Text 
                style={styles.texto} 
                onPress={goToLoggin}>Para Agregar una contramuestra debe loguearse, { " " }
                    <Text 
                        style={styles.texto2}>pulsa AQUÍ para iniciar sesión</Text>
            </Text>
        )
        }
    </View>
  )
}