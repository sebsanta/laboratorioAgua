import React from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native-elements'
import { styles  } from './ImageAgua.styles'


export function ImageAgua(props) {

  const { formik } = props;

  const primaryImage = formik.values.images[0];



  return (
    <View style={styles.content}> 
       <Image 
            source={primaryImage ? {uri: primaryImage} : require("../../../../../assets/img/not-found.png")}
            style={styles.image}
       />
    </View>
  )
}