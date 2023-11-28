import React from "react";
import { Image, StyleSheet, View } from "react-native";

import logo from '../../../assets/logo.png';
import Texto from "../../components/Texto";
import Topo from "./components/Topo";




export default function Cesta() {
    return <>
        <Topo />

        <View style={estilos.Cesta}>
            <Texto style={estilos.nome}>Cesta de verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo} />
                <Texto style={estilos.nomeFazenda}>jennyn Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta completa com produtos selecionados cuidadosamente da fazenda direto para usa cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    Cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },  

    nome: {
        color: "#464646",
        lineHeight: 42,
        fontSize: 26,
        fontWeight: 'bold'
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    
    imagemFazenda: {
        height: 32,
        width: 32,
    },
    
    nomeFazenda: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserratRegular"
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },

    preco: {
        color: "#2A9F25",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})