import React from 'react';
import { Image, StyleSheet, Text, Dimensions } from 'react-native';

import rocambole from '../../../../assets/rocambole.jpg';
import carolina from '../../../../assets/carolina.jpg';

type Props = {
    nome: string,
    nomerocambole: string,
    nomecarolina: string,
    descricao: string,
    precorocambole: string,
    precocarolina: string
}

export default function Detalhe({nome}: Props) {
    return<>

    <View>

    <Text style={estilos.nome}>{nome}</Text>

    <Text style={estilos.descricao}>{descricao}</Text>

    </View>

    <View>

    <Image style={estilos.rocambole} source={rocambole}/>
    <Text style={estilos.nomerocambole}>{nomerocambole}</Text>
    <Text style={estilos.precorocambole}>{precorocambole}</Text>

    <Image style={estilos.carolina} source={carolina}/>
    <Text style={estilos.nomecarolina}>{nomecarolina}</Text>
    <Text style={estilos.precocarolina}>{precocarolina}</Text>

    </View>

    </>
}

const estilos = StyleSheet.create({

})