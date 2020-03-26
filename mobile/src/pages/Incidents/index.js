import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import style from './styles';
import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={[1, 2, 3, 4, 5]} 
                style={style.incidentList}
                keyExtractor={incident => String(incident)}
                renderItem={() => (
                    <View style={style.incident}>
                        <Text style={style.incidentProperty}>ONG:</Text>
                        <Text style={style.incidentValue}>Nome da ong</Text>

                        <Text style={style.incidentProperty}>CASO:</Text>
                        <Text style={style.incidentValue}>Cadelinha atropelada</Text>

                        <Text style={style.incidentProperty}>VALOR:</Text>
                        <Text style={style.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity style={style.detailsButton} onPress={() => { }}>
                            <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                )}
             />

        </View>
    );
}