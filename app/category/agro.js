import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [search, setSearch] = useState("");

    const categorias = [
        { id: '1', nome: 'Agronegócio', rota: 'agro' },
        { id: '2', nome: 'Automação comercial', rota: 'Alimentos' },
        { id: '3', nome: 'Automação industrial', rota: 'Artes' },
        { id: '4', nome: 'Clínica estética', rota: 'Festa' },
        { id: '5', nome: 'Comércio gastronômico', rota: 'AudioVideo' },
        { id: '6', nome: 'Comércio varejista', rota: 'Automotivo' },
        { id: '7', nome: 'Consultório odontológico', rota: 'Bebes' },
        { id: '8', nome: 'Equipamentos de segurança e sinalização', rota: 'Beleza' },
        { id: '9', nome: 'Equipamentos para construção', rota: 'BemEstarSexual' },
        { id: '10', nome: 'Equipamentos para tatuagem', rota: 'Brinquedos' },
        { id: '11', nome: 'Eventos', rota: 'Cabelos' },
        { id: '12', nome: 'Indústria alimentícia', rota: 'Calcados' },
        { id: '13', nome: 'Indústria gráfica', rota: 'CamaMesaBanho' },
        { id: '14', nome: 'Indústria química', rota: 'Celulares' },
        { id: '15', nome: 'Indústria têxtil', rota: 'Climatizacao' },
        { id: '16', nome: 'Laboratório', rota: 'Informatica' },
        { id: '17', nome: 'Limpeza, coleta e reciclagem', rota: 'Games' },
        { id: '18', nome: 'Mecânica', rota: 'Construcao' },
        { id: '19', nome: 'Proteção pessoal', rota: 'Decoracao' },
        { id: '20', nome: 'Salão de beleza e barbearia', rota: 'Eletrodomesticos' },
        { id: '21', nome: 'Uniforme para empresa', rota: 'Esporte' },
        { id: '22', nome: 'Veterinária', rota: 'GiftCard' },
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
