import React from 'react';
import {Button, Text,View,StyleSheet} from 'react-native';

 function Home(props)
{
    const{navigation} = props; 
    return(
        <View  style={styles.nav}> 
            <Text style={styles.titu}>DPS-104 G06L</Text>
            <Text style={styles.etiqueta2}>Desafío 2</Text>
            <Text style={styles.etiqueta}></Text>
            <Text style={styles.etiqueta}>Denilson Emmanuel Chavez Cruz</Text>
            <Text style={styles.etiqueta}>CC161302 Github: DeccXD</Text>
            <Text style={styles.etiqueta}>Liliana Gisella Lopez Cáceres</Text>
            <Text style={styles.etiqueta}>LC170104 Github: LiltLopez</Text>

            <View style={styles.ver}>
        </View>
        </View>
    );
}

    const styles = StyleSheet.create({
        titu:{
            textAlign: 'center',
            paddingTop: 25,
            color: 'white',
            fontSize: '50',
            fontFamily: 'AmericanTypewriter-Bold',
            textShadowColor: 'blue',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 5
        },
    nav:
    {
        backgroundColor:'#7E87FF',
        paddingBottom: 5,
        alignContent:'center',
        paddingBottom: 700,
   
    },
    etiqueta2:
    {
        fontFamily:'ChalkboardSE-Bold',
        textShadowColor: 'purple',
        textShadowOffset: {width: -5, height: 0.5},
        textShadowRadius: 5,
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 45,
        color:'white'
    },
    etiqueta:
    {
        fontFamily:'ChalkboardSE-Bold',
        textShadowColor: 'black',
        textShadowOffset: {width: -5, height: 0.5},
        textShadowRadius: 5,
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 25,
        color:'white'
    },
    ver:{
        backgroundColor: 'grey'
    }
});

export default Home;