import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [search, setSearch] = useState("");

 const categorias = [
    { id: '1', nome: 'Acessórios para festa', rota: 'aderecos-para-festa' },
    { id: '2', nome: 'Baleiro', rota: 'baleiro' },
    { id: '3', nome: 'Balões de festa', rota: 'baloes-de-festa' },
    { id: '4', nome: 'Cachepots para festa', rota: 'cachepots-para-festa' },
    { id: '5', nome: 'Convite para festas e eventos', rota: 'convite-para-festas' },
    { id: '6', nome: 'Descartáveis para festa', rota: 'descartaveis-para-festa' },
    { id: '7', nome: 'Display para festa', rota: 'display-para-festa' },
    { id: '8', nome: 'Enfeites para festa', rota: 'enfeites-para-festa' },
    { id: '9', nome: 'Fantasia e acessórios', rota: 'fantasia-e-acessorios' },
    { id: '10', nome: 'Iluminação e efeitos', rota: 'iluminacao-e-efeitos' },
    { id: '11', nome: 'Lança confete', rota: 'lanca-confete' },
    { id: '12', nome: 'Lembrancinhas de festa', rota: 'lembrancinhas-de-festa' },
    { id: '13', nome: 'Maquiagem artística', rota: 'maquiagem-artistica' },
    { id: '14', nome: 'Móveis para festa', rota: 'moveis-para-festa' },
    { id: '15', nome: 'Natal', rota: 'natal' },
    { id: '16', nome: 'Painel de festa', rota: 'painel-de-festa' },
    { id: '17', nome: 'Pulseira de identificação', rota: 'pulseira-de-identificacao' },
    { id: '18', nome: 'Saco para pipoca', rota: 'saco-para-pipoca' },
    { id: '19', nome: 'Sacos e bicos para confeitar', rota: 'sacos-e-bicos-para-confeitar' },
    { id: '20', nome: 'Suqueira', rota: 'suqueira' },
    { id: '21', nome: 'Toalha de festa', rota: 'toalha-de-festa' },
    { id: '22', nome: 'Vela de aniversário', rota: 'vela-de-aniversario' },
];


    const categoriasFiltradas = categorias.filter(categoria =>
        categoria.nome.toLowerCase().includes(search.toLowerCase())
    );

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.rota, { categoria: item })}
        >
            <Text style={styles.text}>{item.nome}</Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>

            <FlatList
                data={categoriasFiltradas}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#22222',
        flex: 1,
    },

    item: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        top: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    },
    separator: {
        height: 1,
        marginHorizontal: 20,
        marginTop: 5,
    },
});
