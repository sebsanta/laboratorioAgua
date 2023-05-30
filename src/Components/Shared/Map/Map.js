import { querystring } from '@firebase/util';
import React from 'react'
import { View, Text, Platform } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import openMap from "react-native-open-maps"
import { styles } from "./Map.styles"

export function Map(props) {

    const {location, name} = props;

    const openAppMap = () => {
        if(Platform.OS === "ios"){
            openMap({
                latitude: location.latitude,
                longitude: location.longitude,
                zoom:19,
                query: name,
            });
        }else{
            openMap({
                zoom:19,
                query: `${location.latitude},${location.longitude}`,
            })
        }
        
    };

  return (
    <MapView 
            initialRegion={location} 
            style={styles.content}
            onPress={openAppMap}
    >
      <Marker coordinate={location}/>
    </MapView>
  )
}