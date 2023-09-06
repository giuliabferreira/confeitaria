import React from "react";
import {  Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import topo from '../../../assets/header.jpg';
import logo from '../../../assets/logo.webp';

const width = Dimensions.get('screen').width;

export default function Confeitaria() {
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da Confeitaria</Text>
    <View>
        <Text style={estilos.nome}>Borcelle Confeitaria</Text>

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
        color: "white",
        textAlign: "center",
        fontSize: 23,
        lineHeight: 25,
        padding: 30,
        fontFamily: "Poppins600"
    },

    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 15
    },

    nome: {
        fontSize: 19,
        lineHeight: 40,
        color: "#464646",
        fontFamily: "Poppins600",
        textAlign: "center",
        padding: 10
    },

    descricao: {
        color: "black",
        fontFamily: "Poppins600",
        textAlign: "justify"
    },

    preco: {
        fontSize: 20,
        fontFamily: "Poppins600",
        color: "green",
        marginTop: 8
    }
    
})