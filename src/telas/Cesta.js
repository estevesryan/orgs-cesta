import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import Texto from "../components/Texto";

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width;


export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.Cesta}>
            <Text style={estilos.nome}>Cesta de verduras</Text>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo} />
                <Text style={estilos.nomeFazenda}>jennyn Jack Farm</Text>
            </View>
            <Texto style={estilos.descricao}>Uma cesta completa com produtos selecionados cuidadosamente da fazenda direto para usa cozinha</Texto>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },

    titulo: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding:  16
    },

    Cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },  

    nome: {
        color: "#464646",
        lineHeight: 42,
        fontSize: 26,
        fontFamily: "MontserratBold"
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