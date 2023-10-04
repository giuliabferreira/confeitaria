import React from "react";
import {  Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import topo from '../../../assets/header.jpg';
import rocambole from "../../../assets/rocambole.jpg";
import carolina from "../../../assets/carolina.png";

const width = Dimensions.get('screen').width;

export default function Confeitaria() {
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes da Confeitaria</Text>
    <View>
        <Text style={estilos.nome}>Borcelle Confeitaria</Text>

        <Text style={estilos.descricao}>Os doces mais queridos da nossa carinhosa confeitaria!</Text>
    </View>
    <View>
        <Image source={rocambole} style={estilos.rocambole}/>
    <Text style={estilos.nomerocambole}>Rocambole de Brigadeiro</Text>
    <Text style={estilos.precorocambole}>R$18,00</Text>

    <Image source={carolina} style={estilos.carolina}/>
    <Text style={estilos.nomecarolina}>Carolina com Doce de Leite</Text>
    <Text style={estilos.precocarolina}>R$1,90</Text>
    </View>

    </>

}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 378 / 768 * width,
    },

    rocambole: {
        width: "100%",
        height: 130 / 768 * width,
        
    },

    carolina: {
        width: "100%",
        height: 130 / 768 * width,
        
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
        fontSize: 30,
        lineHeight: 60,
        color: "#464646",
        fontFamily: "Poppins600",
        textAlign: "center",
        padding: 10
    },

    nomerocambole: {
        fontSize: 20,
        lineHeight: 60,
        color: "#464646",
        fontFamily: "Poppins600",
        textAlign: "center",
        padding: 10
    },

    nomecarolina: {
        fontSize: 20,
        lineHeight: 60,
        color: "#464646",
        fontFamily: "Poppins600",
        textAlign: "center",
        padding: 10
    },

    descricao: {
        fontSize: 15,
        color: "#464646",
        fontFamily: "Poppins400",
        textAlign: "center",
        padding: 12
    },

    precorocambole: {
        fontSize: 13,
        fontFamily: "Poppins600",
        color: "red",
        textAlign: "right",
        padding: 15
    },

    precocarolina: {
        fontSize: 13,
        fontFamily: "Poppins600",
        color: "red",
        textAlign: "right",
        padding: 15
    },
    
})