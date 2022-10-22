import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Tienda from "./Tienda";


const Factura = () => {

const [resumen, setResumen] = useState([]);
const [mostrarfactura, SetMostrarfactura] = useState(false);
    return (
        <View>
            <Text
            style={{
                fontSize:30,
                textAlign: "center",
                marginTop: "20%"
            }}
            >Factura:</Text>
        </View>
        );  
    }

    export default Factura;