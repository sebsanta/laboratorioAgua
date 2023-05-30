import React, { useRef, useState } from 'react'
import { View, Text , ScrollView, Dimensions, TouchableOpacity, Platform } from 'react-native'
import { Image  } from "react-native-elements"
import   ParallaxImage  from "react-native-snap-carousel"
import  Carousel, { Pagination }  from "react-native-snap-carousel"
import { size } from "lodash"
import { styles } from './Carrousel.styles';
import { scrollInterpolators, animatedStyles } from "../../../utils/animations"


export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85)


export function CarrouselCard (props) {
    console.log(props)

    const isCarousel = React.useRef(null)

    const { arrayImages, width, height, hideDots } = props;
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const renderItem =  ({ item }) => (
        <View style={styles.item}>
            <Image 
                    source={{ uri: item }} 
                    style={styles.image}
                    containerStyle={styles.imageContainer}
            />
     </View>
    );

    const pagination = () => {
        return (
            <Pagination 
                dotsLength={size(arrayImages)}
                activeDotIndex={activeDotIndex}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                containerStyle={styles.dotsContainer}
                dotStyle={styles.dot}
            />
        )
    }

  return (
    <View style={styles.content}>
      <Carousel
            data={arrayImages}
            renderItem={renderItem}
            layoutCardOffset={20}
            layout="tinder"
            ref={isCarousel}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={20}
            useScrollView={true}
            onSnapToItem={(index) => setActiveDotIndex(index)}
      />
      {!hideDots && pagination()}
    </View>

  )
}

