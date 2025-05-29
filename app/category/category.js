import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
    const [search, setSearch] = useState("");

    const categorias = [
        { id: '1', nome: 'Agro, indústria e comércio' },
        { id: '2', nome: 'Alimentos e bebidas' },
        { id: '3', nome: 'Artes e Artesanato' },
        { id: '4', nome: 'Artigos de festa' },
        { id: '5', nome: 'Áudio e vídeo' },
        { id: '6', nome: 'Automotivo' },
        { id: '7', nome: 'Bebês e higiene infantil' },
        { id: '8', nome: 'Beleza e perfumaria' },
        { id: '9', nome: 'Bem estar sexual' },
        { id: '10', nome: 'Brinquedos' },
        { id: '11', nome: 'Cabelos' },
        { id: '12', nome: 'Calçados' },
        { id: '13', nome: 'Cama, mesa e banho' },
        { id: '14', nome: 'Celulares e smartphones' },
        { id: '15', nome: 'Climatização' },
        { id: '16', nome: 'Computadores e Informática' },
        { id: '17', nome: 'Consoles e Games' },
        { id: '18', nome: 'Construção e ferramentas' },
        { id: '19', nome: 'Decoração' },
        { id: '20', nome: 'Eletrodomésticos' },
        { id: '21', nome: 'Esporte e lazer' },
        { id: '22', nome: 'Gift card' },
        { id: '23', nome: 'Instrumentos musicais' },
        { id: '24', nome: 'Limpeza' },
        { id: '25', nome: 'Livros' },
        { id: '26', nome: 'Malas, mochilas e acessórios' },
        { id: '27', nome: 'Moda' },
        { id: '28', nome: 'Móveis' },
        { id: '29', nome: 'Música, filmes e séries' },
        { id: '30', nome: 'Papelaria' },
        { id: '31', nome: 'Pet shop' },
        { id: '32', nome: 'Relógios e joias' },
        { id: '33', nome: 'Saúde e bem estar' },
        { id: '34', nome: 'Seguros' },
        { id: '35', nome: 'Serviços' },
        { id: '36', nome: 'Suplementos e vitaminas' },
        { id: '37', nome: 'Tables' },
        { id: '38', nome: 'Telefonia' },
        { id: '39', nome: 'Utilidades domésticas' },
        { id: '40', nome: 'Vale presente' },
    ];

    const categoriasFiltradas = categorias.filter(categoria =>
        categoria.nome.toLowerCase().includes(search.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => alert(`Categoria: ${item.nome}`)}
        >
            <Text style={styles.text}>{item.nome}</Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerBusca}>
                <View style={styles.searchBar}>
                    <EvilIcons name="search" size={24} paddingBottom={5} color="black" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Busque aqui seu produto"
                        value={search}
                        onChangeText={setSearch}
                        returnKeyType="search"
                    />
                </View>
            </View>

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
    containerBusca: {
        backgroundColor: '#ff0f35',
        paddingTop: 40,
        paddingBottom: 15,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 24,
        paddingHorizontal: 14,
        paddingVertical: 4,
        marginRight: 16,
        marginLeft: 16,
        gap: 8,
    },
    searchIcon: {
        fontSize: 18,
        color: '#888',
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        color: '#888',
        fontSize: 16,
        padding: 0,
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
