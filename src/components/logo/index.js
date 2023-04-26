import {View,Text,StyleSheet,Image} from "react-native"


export function Logo () {
    return (
        <View>
            <Image 
            source={require('./uticketLogo.png')}
            style={styles.logo}
            />
        </View>
    )
}




const styles=StyleSheet.create ({

    logo: {
        width:150,
        height:40,
    },

    // img: {
    //     width:'100%',

    // }





})