import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    content:{
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection:"row",
        paddingVertical: 30,
        paddingStart:15,

        
    },
    avatar:{
        marginRight:10,
        backgroundColor:"#33A5FF",
        width: 150,
        height:150,
    },
    displayName:{
        fontWeight:"bold",
        paddingBottom:10,
    }
})