import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";



export default function Tienda() {
const [producto, setProducto] = useState('0');
const [cantidad, setCantidad] =useState('');
const [precio, setPrecio] = useState ('');
const [total, setTotal] = useState ('');
const [totalcompra, setTotalcompra] = useState('');
const [resultado, setResultado] = useState ('');
const [descuento, setDescuento] = useState('');
const [totalcondescuento, setTotalcondescuento] = useState('');


const desc = () => {
if (cantidad >= 15){
    setTotal((parseFloat(cantidad) * parseFloat(precio)*25)/100)
}
 else if(cantidad >= 50 ) {
    setTotal((parseFloat(cantidad) * parseFloat(precio)*13)/100)
} else if(cantidad >= 80 ) {
    setTotal((parseFloat(cantidad) * parseFloat(precio)*25)/100)
}


    setTotalcompra (parseFloat(cantidad)* parseFloat(precio)),
    setTotalcondescuento(parseFloat(totalcompra)-parseFloat(total))
}

    return (
        <View>
            <Text
            style={{
                fontSize:30,
                textAlign: "center",
                marginTop: "1%",
                backgroundColor:'#7E87FF',
            paddingTop: 25,
            color: 'white',
            fontSize: '36',
            fontFamily: 'AmericanTypewriter-Bold',
            textShadowColor: 'blue',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 5
            }}
            >Bienvenido a tu Tienda</Text>
            <View style={styles.vista}>
            <Text style={styles.text}>Nombre del producto: </Text>
            <TextInput placeholder="Producto:" style={styles.input} 
            onChangeText={(val) => setProducto(val)}/>
            <Text style={styles.text}>Cantidad del producto: </Text>
            <TextInput placeholder="Cantidad:" style={styles.inputnum}
            onChangeText={setCantidad} value={cantidad}/>
            <Text style={styles.text}>Precio unitario del producto: </Text>
            <TextInput placeholder="Precio unitario:" style={styles.inputnum}
            onChangeText={setPrecio} value={precio}/>
            </View>
            <TouchableOpacity style={styles.boton} onPress={desc}>
                <Text style={styles.btext}>Facturar</Text>
            </TouchableOpacity>
            <View style={styles.factura}>
            <Text style={styles.facturaTextT}>Factura</Text>
            <Text style={styles.facturaText}>Producto solicitado:</Text><Text style={styles.resu}>{producto}</Text>
            <Text style={styles.facturaText}>Cantidad encargada:</Text><Text style={styles.resu}> n°{cantidad}</Text>
            <Text style={styles.facturaText}>Precio unitario:</Text><Text style={styles.resu}>${precio}</Text>
            <Text style={styles.facturaText}>Total de compra sin descuento:</Text><Text style={styles.resu}>${totalcompra} </Text>
            <Text style={styles.facturaText}>Total del descuento:</Text><Text style={styles.resu}>${total}</Text>
            <Text style={styles.facturaText}>Total con descuento aplicado</Text><Text style={styles.resu}>${totalcondescuento}</Text>
            </View>
        </View>
        );  
    }
const styles = StyleSheet.create({
    vista:{
        
        backgroundColor: '#451071',
        paddingBottom: 400,
    },
    text: {
        color: 'white',
        fontSize: 25,
        marginLeft: 20,
        marginTop: 35,
        
    },
    input: {
        backgroundColor: '#E6E6FA',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 8,
        margin: 10,
        width: 300,
        marginLeft: 20,
        borderRadius: 10,
    },
    inputnum:{
        backgroundColor: '#E6E6FA',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 8,
        margin: 10,
        width: 200,
        marginLeft: 20,
        borderRadius: 10,
    },
   boton: {
        backgroundColor: '#0991B1',
        borderWidth: 6,
        borderColor: '#03667D',
        with: 200,
        height: 75,
        marginLeft: 270,
        marginRight: 45,
        marginTop: -420,
        borderRadius: 20,
        
    },
    btext:{
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        paddingTop: 20,
    },
    factura:{
        backgroundColor: '#FFFAF1',
        marginRight: '37%',
        marginLeft: 10,
        marginTop: -60,
        height: 220,
        borderRadius: 5,
    },
    facturaTextT: {
        textAlign: 'center',
        fontFamily:'Georgia',
        fontSize: 16,
        paddingBottom: -5,
    },
    facturaText: {
        textAlign: 'left',
        paddingLeft: 10,
        fontFamily:'Georgia',
        fontSize: 14,
        paddingBottom: -5,
    },
    resu: {
        textAlign: 'right',  
        paddingRight: 5, 
        fontFamily:'Georgia',
        fontSize: 14, 
    }
});
