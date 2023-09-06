import React from "react";
import {  Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import topo from '../../../assets/header.jpg';
import logo from '../../../assets/logo.webp';

const width = Dimensions.get('screen').width;

export default function Confeitaria() {
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes do Carrinho</Text>
    <View>
        <Text style={estilos.nome}>Carrinho de Compras</Text>

        <View>
            <Image source={logo}/>
        <Text style={estilos.nomeFazenda}>Borcelle Confeitaria</Text>
        </View>

        <Text style={estilos.descricao}>Nesta cesta está cheio de doces da nossa carinhosa confeitaria!</Text>

            <Text style={estilos.preco}>R$90,00</Text>
    </View>
    </>

}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },

    titulo: {
        width: "100%",
        position: "absolute",
        color: "blue",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 25,
        padding: 15,
        fontFamily: "Poppins400"
    },

    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 15
    },

    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "Poppins600"
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },

    imagemFazenda: {
        width: 32,
        height: 32
    },

    nomeFazenda: {
        fontSize: 16,
        fontFamily: "Poppins600",
        lineHeight: 26,
        marginLeft: 12
    },

    descricao: {
        color: "#A3A3A3",
        fontFamily: "Poppins300"
    },

    preco: {
        fontSize: 26,
        fontFamily: "Poppins300",
        color: "#2A9F85",
        marginTop: 8
    }
    
})