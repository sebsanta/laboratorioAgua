import { StyleSheet, Dimensions } from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85)

export const styles = StyleSheet.create({

    content:{
        backgroundColor:"#D5D8DC",
        flex:1,
    },
    item: {
        width: Platform.select({ios: (screenWidth - 130), android:(screenWidth - 70)}),
        height: Platform.select({ios: (screenWidth - 250),android:(screenWidth - 120)}),
        backgroundColor: '#17202A',
        borderRadius: 10,
        paddingBottom: 20,
        paddingTop:20,
        shadowColor: "#fff",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 20,
      },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: '#fff',
        borderRadius: 10,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
      dotsContainer:{
          position:"absolute",
          bottom:-10,
          left:0,
          width:"100%",
          height:70,
          paddingBottom:0,
      },
      dot:{
          backgroundColor:"#fff"
      }
     
})