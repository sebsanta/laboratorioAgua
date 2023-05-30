import React, { useState ,useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-elements";
import * as Location from 'expo-location'
import MapView from 'react-native-maps'
import { Modal } from "../../Components/Shared"
import Toast from "react-native-toast-message"
import { styles } from './MapForm.styles'
import { map } from '@firebase/util'


export function MapForm(props) {

    const {show, close, formik} = props;

    const[location, setLocation] = useState({
        latitude: 0.001,
        longitude:0.001,
        latitudeDelta:0.001,
        longitudeDelta:0.001,
    });

    useEffect(() => {
        (async() => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== "granted"){
                Toast.show({
                    type:"info",
                    position: "bottom",
                    text1:"Debes ir a ajustes y activar la locaclización para la App"
                });
                return;
            }
           const locationTemp = await Location.getCurrentPositionAsync({});
           
            setLocation({
                latitude: locationTemp.coords.latitude,
                longitude:locationTemp.coords.longitude,
                latitudeDelta:0.001,
                longitudeDelta:0.001,
            })


        })()
    }, [])

    const saveLocation = () => {
        formik.setFieldValue("location",location);
        close();
    }
    

  return (
    <Modal show={show} close={close}>
     
          <MapView 
                initialRegion={location} 
                showsUserLocation={true} 
                style={styles.mapStyle}
               // onRegionChange={(locationTemp) => setLocation(locationTemp)} // poder mover la dirección del punto referenciado
          >
              <MapView.Marker 
                draggable
                coordinate={location}
              />
          </MapView>
        <View style={styles.mapActions}>
            <Button 
                  title="Guardar" 
                  containerStyle={styles.btnMapContainerSave} 
                  buttonStyle={styles.btnMapSave}
                  onPress={saveLocation}
            />
            <Button 
                  title="Cancelar"
                  containerStyle={styles.btnMapContainerCancel} 
                  buttonStyle={styles.btnMapCancel} 
                  onPress={close}
            />
        </View>
    </Modal>
  )
}