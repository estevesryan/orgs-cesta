import React from "react";

import Texto from "../../../components/Texto";
import { StyleSheet, View, Image } from "react-native";
import cesta from "../../../mocks/Cesta";

export default function Detalhes({nome, logo, nomeFazenda, descricao, preco}) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
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
