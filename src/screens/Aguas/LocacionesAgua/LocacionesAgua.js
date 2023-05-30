import React, { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { ListAgua } from "../ListAgua"
import { useNavigation} from "@react-navigation/native";
import { LoadingModal } from "../../../Components/Shared"
import { screen, db } from "../../../utils";
import { styles } from "./LocacionesAgua.styles";



export function LocacionesAgua(props) {

    const { navigation } = props;
    const [ currentUser, setCurrentUser ] = useState(null);
    const [ locAgua, setLocAgua ] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
    }, []);

    useEffect(() => {
       const q = query(
           collection(db, "locacionesAgua"),
           orderBy("createAt", "desc")
       );
       onSnapshot(q, (snapshot) => {
           setLocAgua(snapshot.docs);
       });
    }, []);

    const goToAddAgua = () => {
        console.log("vamos a pagina de agregar locacion de muestra de agua");
        navigation.navigate(screen.agua.tab, {screen: screen.agua.addAgua });
    }

    return(
        <View style={styles.content}>
            {
                !locAgua ? (<LoadingModal show text ="Cargando..." />) :
                (<ListAgua locAgua={locAgua}/>)
            }
            {currentUser && (
                <Icon 
                    reverse
                    type="material-community"
                    name="plus-box-multiple"
                    color="#CC320B"
                    containerStyle={styles.btnContainer}
                    onPress={goToAddAgua}
                />
            )}
        </View>
    );
}