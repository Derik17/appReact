import {useState} from 'react'
import {View,Text,StyleSheet, SafeAreaView,TextInput, TouchableOpacity, ScrollView,FlatList,Image,Dimensions} from 'react-native'
import{Ionicons} from '@expo/vector-icons'

import {Logo}  from '../../components/logo'
import { Touchable } from 'react-native'

const {width} = Dimensions.get('window')
// function infinityCarrossel (scrollCarrossel) {
//     const lugarScrollCarrossel = scrollCarrossel.length
//     let scrollvalue = 0 , scrolled = 0 

//     setInterval function (){



//     }

// }


export function Home (){
    const [inputValue, setInputValue] = useState('')
    const [lugarCarrossel,setlugarCarrossel] = useState(0)
    // const [scrollCarrossel,setscrollCarrossel] = useState(listaImagem)

    const listaImagem =[
        {
            id:1,
            img:require('../../components/bannerEvents/banner1.png')
        },
        {
            id:2,
            img:require('../../components/bannerEvents/banner2.png')
        },
                
        {
            id:3,
            img:require('../../components/bannerEvents/banner3.png')
        },
        {
            id:4,
            img:require('../../components/bannerEvents/banner4.jpeg')
        },
    ]

    function busca (){
        console.log ('Voce digitou :')
        console.log (inputValue) 
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoStyle}>
                <Logo/>
                <Text style={styles.textoHome}>Mostrando Eventos em</Text>
                <Text style={styles.textoLocal}>Campos dos Goytacazes - RJ</Text>
            </View>    
            <View style={styles.searchbar}>
                <TouchableOpacity onPress={busca}>
                    <Ionicons name='search' size={28} color='black'/>
                </TouchableOpacity>
                <TextInput style={styles.textoInput}
                    placeholder='Qual Evento?' 
                    value = {inputValue} 
                    onChangeText={(text) => setInputValue(text)}>
                </TextInput>
            </View>
            <View style={styles.localflat}>
                <FlatList 
                    pagingEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event)=> {
                        setlugarCarrossel(Math.round(event.nativeEvent.contentOffset.x/width))
                    }}
                    scrollEventThrottle={16}
                    data={listaImagem}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => 
                    <View style={styles.localCards}>
                        <Image style={styles.flatImgStyle} source={item.img}/>  
                    </View>} 
                />
            </View>
            {
                listaImagem.length > 1 ?
                    <View style={styles.areaDots}>
                        {
                            listaImagem.map ((_,i) => (
                                <View
                                    style={[styles.styleDot , {backgroundColor: i == lugarCarrossel ? 'blue' : 'gray'}]}
                                />
                            ))
                        } 
                    </View>
                : null
            }        
            <Text style={styles.textoEventosRegiao}> Todos Eventos da Região </Text>

            <View style={styles.localflatVertical}>
                <FlatList 
                    data={listaImagem}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => 
                    <View style={styles.localCardsVertical}>
                        <Image style={styles.flatImgStyleVertical} source={item.img}/>
                    </View>} 
                />
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({

    container: {
        flex:1,
        width: '100%',
        hight: 'auto',
        backgroundColor: '#F3F9FF',
        paddingTop:50,
    },
    logoStyle: {
        paddingStart:14,
        paddingEnd: 14,
        
    },
    textoHome: {
        fontSize: 25,
        color: 'black',
        fontWeight: 900,
        marginTop:30,
    },

    textoLocal: {
        fontSize: 25,
        color:'#2485b1',
        
    },
    searchbar: {
        display:'flex',
        flexDirection:'row',
        width:'93%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:14,
        marginTop: 30,
        padding:14,
        paddingLeft: 40,
        backgroundColor: 'white',
        elevation:20,
        shadowColor:'black',
        borderRadius: 30,
        gap:10, 

    },

    textoInput: {
       fontWeight: 'bold',
       width: '100%',
    },

    /// FLAT LIST CONFIG

    localflat: {
        width: width,
        height:200,
        marginTop: 30,

    },
    localCards: {
        display: 'flex',
        width: width,
        height:'100%',
        borderRadius:20,

    },
    flatImgStyle: {
        width: '90%',
        height: '100%',
        borderRadius: 20,
        marginHorizontal: 20,
    }, 

    /// ESTILIZAÇÃO DOS PONTOS NO CARROSSEL

    areaDots : {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },

    styleDot: {
        width:7,
        height: 7,
        borderRadius: 4,
        marginHorizontal: 3,
    },

    /// TEXTO QUE DIVIDE CARROSSEL DA LISTA DE BANNERS

    textoEventosRegiao: {
        marginTop:20,
        fontSize: 25,
        fontWeight: 500,
        paddingStart:14,
        paddingEnd: 14,
        
    },

    /// FLAT LIST VETICAL CONFIG
    localflatVertical: {
        width: width,
        height: 230,
    },

    flatImgStyleVertical: {

        width: '95%',
        height: 200,
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
    }
})