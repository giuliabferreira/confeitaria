import React from 'react';
import { Image, StyleSheet, Text, Dimensions } from 'react-native';
import header from '../../../../assets/header.jpg';

const width = Dimensions.get('screen').width;

type Props = {
    titulo: string
}

export default function Topo({titulo, }: Props) {
    return<>

    <Image style={estilos.topo} source={header}/>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 378 / 768 * width,
    },
})