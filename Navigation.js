import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home                         from './screens/Home';
import  colon                        from './screens/colon';
import  pesomexicano                 from './screens/pesomexicano';
import  libra                        from './screens/libra';
import  franco                       from './screens/franco';
import  euros                        from './screens/euros';



import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import colores from './utils/colors';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
    <Tab.Navigator initialRouteName='Home' 
                   screenOptions={{
                       tabBarActiveTintColor: colores.ENFASIS_COLOR,
                       tabBarStyle:
                            {
                                backgroundColor: colores.BG_COLOR,
                                height:80,
                            },
                        tabBarIcon:
                            {
                                size:45
                            },
                        headerTitleStyle:{ // titulo de la pantalla
                                //color: colores.PRIMARY_COLOR,  // 
                                color: colores.ENFASIS_COLOR,
                                fontSize: 34,
                                marginLeft: 15
                            },
                        headerStyle:
                        {
                            backgroundColor: colores.BG_COLOR,
                        },
                        tabBarShowLabel: false,
                        
                       }} > 
        <Tab.Screen name="Home"             
                    component={Home} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon:
                        ({color,size})=>(
                        <Icon name='home' color={color} size={45} />
                        ),
                    }}
        />
        <Tab.Screen name="colon"             
                    component={colon} 
                    options={{
                        tabBarLabel: 'colon',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='plus' color={color} size={45} />
                        ),
                    }}
                    />
        <Tab.Screen name="euros"            
                    component={euros} 
                    options={{
                        tabBarLabel: 'euros',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='minus' color={color} size={45} />
                        ),
                    }}
        />
        <Tab.Screen name="franco"   
                    component={franco}
                     options={{
                        tabBarLabel: 'franco',
                        tabBarIcon:
                        ({color,size})=>(
                        <Icon name='window-close' color={color} size={45} />
                        ),
                    }}/>
        <Tab.Screen name="libra"         
                    component={libra}
                    options={{
                        tabBarLabel: 'libra',
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='libra' color={color} size={45} />
                        ),
                    }} />
        <Tab.Screen name="franco"        
                    component={    franco     }
                    options={{
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='alert-rhombus' color={color} size={45} />
                        ),
                    }} />
        <Tab.Screen name="peso mexicno"        
                    component={    pesomexicano     }
                    options={{
                        tabBarIcon:
                        ({color,size})=>(
                            <Icon name='square-root-box' color={color} size={45} />
                        ),
                    }} />
    </Tab.Navigator>        
        );
}