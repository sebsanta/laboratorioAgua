//pagina del avatar
import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../Components";
import { InfoUser, AccountOptions } from "../../Components/Account"
import { styles } from "./UserLoggedScreen.styles"


export  function UserLoggedScreen() {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [ reload, setReload ] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);


  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  }

  return (
    <View style={styles.content}>
      <InfoUser 
          setLoading={setLoading} 
          setLoadingText={setLoadingText}
          />
      <AccountOptions onReload={onReload}/>
      <Button 
          title="Cerrar sesión" 
          buttonStyle={styles.btnStyles} 
          titleStyle={styles.btnStylesCerrar}
          onPress={logout}
          />

          <LoadingModal show={loading} text={loadingText}/>
    </View>
  ) 
}