import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


//Aquí llamamos a las screens
import Homescreen from "./screens/Homescreen";
import Calculadora from "./screens/Calculadora";
import Conversor from "./screens/Conversor";
import Tienda from "./screens/Tienda";


const Tab = createBottomTabNavigator();

const MenuTabs = () => {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarStyle: {
                height: 95,
                position: 'absolute',
                bottom: 17,
                left: 12,
                right: 12,
                borderRadius: 20,
                backgroundColor: '#00A8A7',
                            
            },
            tabBarActiveTintColor: '#00FFFE',
            tabBarInactiveTintColor: 'black',
            tabBarLabelStyle:{
                fontSize: 11,
                fontFamily: 'GillSans-Bold'
            },
        }}>
            <Tab.Screen name="Home" component={Homescreen}
            options={{
                tabBarLabel: 'INICIO',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="home" size={35} color={color} />  
                ),
            }} />
            <Tab.Screen name="Calculadora" component={Calculadora}
            options={{
                tabBarLabel: 'CALCULADORA',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="calculator" size={35} color={color} />  
                ),
            }} />
            <Tab.Screen name="Conversor" component={Conversor} 
            options={{
                tabBarLabel: 'CONVERSOR',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="earth" size={35} color={color} />  
                ),
            }} />
            <Tab.Screen name="Tienda" component={Tienda} 
            options={{
                tabBarLabel: 'TIENDA',
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="shoppingcart" size={40} color={color} />  
                ),
            }} />
        </Tab.Navigator>
    );
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <MenuTabs />
        </NavigationContainer>
    );
}