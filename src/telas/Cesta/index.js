import React from "react";
import { StyleSheet, View } from "react-native";


import Detalhes from "./components/Detalhes";
import Topo from "./components/Topo";




export default function Cesta({topo, detalhes}) {
    return <>
        <Topo {...topo}/>

        <View style={estilos.Cesta}>
            <Detalhes {...detalhes} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    Cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },  
})