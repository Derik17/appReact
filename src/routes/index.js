import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import {Home} from '../pages/home'
import {Favoritos} from '../pages/favoritos'


const Tab = createBottomTabNavigator();


export function Routes (){
    return(
        <Tab.Navigator
            screenOptions={{headerShown: false,
            tabBarHideOnKeyboard: true ,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name="HomeTab"
             component={Home}
             options={{
                tabBarIcon : ({color,size,focused}) => {
                    if (focused) {
                        return <Ionicons name="home" color='#000' size={size} />
                    }

                    return <Ionicons name="home-outline" color={color} size={size} />
                }
             
             }} />
            <Tab.Screen name="Favoritos" 
            component={Favoritos}
            options={{
                tabBarIcon : ({color, size,focused}) => {
                    //if (focused) {
                    return <Ionicons name={focused ? 'heart' : 'heart-outline'} color='#FF4141' size={size} />
                   // }

                    //return <Ionicons name='heart-outline' color={color} size={size} />

                }
            }}/>
        </Tab.Navigator>
    )
}



