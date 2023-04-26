import {View, Text, StyleSheet,Image} from 'react-native'



const bannerList = [
    {
        id:1,
        img:require('./banner1.png')
    },
    {
        id:2,
        img:require('./banner2.png')
    },
            
    {
        id:3,
        img:require('./banner3.png')
    }

]
  
        




export function BannersCardsList() {
    return (
        <View>
            <Image source={require('./banner1.png')}
            style={styles.bannerStyle}/>
        </View>
    )   
}

export function BannersCardsCarrossel (){
    return(
        <View>
            <Image source={require('./banner2.png')}
            style={styles.bannerStyle}/>
        </View>
    )
}


const styles = StyleSheet.create ({
    bannerStyle : {
        width: '100%',
        height: '100%',
        borderRadius:10,
    },
})