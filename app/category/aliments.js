import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [search, setSearch] = useState("");

    const categorias = [
        { id: '1', nome: 'Açougue', rota: 'agro' },
        { id: '2', nome: 'Açúcar e adoçante', rota: 'Alimentos' },
        { id: '3', nome: 'Alimentação infantil', rota: 'Artes' },
        { id: '4', nome: 'Alimentos natalinos', rota: 'Festa' },
        { id: '5', nome: 'Arroz', rota: 'AudioVideo' },
        { id: '6', nome: 'Azeite e óleo', rota: 'Automotivo' },
        { id: '7', nome: 'Bebidas alcoólicas', rota: 'Bebes' },
        { id: '8', nome: 'Bebidas não alcoólicas', rota: 'Beleza' },
        { id: '9', nome: 'Biscoitos e snacks', rota: 'BemEstarSexual' },
        { id: '10', nome: 'Bomboniere', rota: 'Brinquedos' },
        { id: '11', nome: 'Cafés e chás', rota: 'Cabelos' },
        { id: '12', nome: 'Cesta básica', rota: 'Calcados' },
        { id: '13', nome: 'Cesta de presente', rota: 'CamaMesaBanho' },
        { id: '14', nome: 'Conservas e enlatados', rota: 'Celulares' },
        { id: '15', nome: 'Doces e confeitaria', rota: 'Climatizacao' },
        { id: '16', nome: 'Farinha e farofa', rota: 'Informatica' },
        { id: '17', nome: 'Feijão', rota: 'Games' },
        { id: '18', nome: 'Frescos e congelados', rota: 'Construcao' },
        { id: '19', nome: 'Frios e laticínios', rota: 'Decoracao' },
        { id: '20', nome: 'Grãos e sementes', rota: 'Eletrodomesticos' },
        { id: '21', nome: 'Hortifruti', rota: 'Esporte' },
        { id: '22', nome: 'Leites e achocalatado', rota: 'GiftCard' },
        { id: '23', nome: 'Leites e achocolatado', rota: 'Instrumentos' },
        { id: '24', nome: 'Massas e macarrão', rota: 'Limpeza' },
        { id: '25', nome: 'Padaria e matinais', rota: 'Livros' },
        { id: '26', nome: 'Páscoa', rota: 'Malas' },
        { id: '27', nome: 'Sal e condimentos', rota: 'Moda' },
        { id: '28', nome: 'Sopas e cremes', rota: 'Moveis' },
        { id: '29', nome: 'Vinagres e molhos', rota: 'MusicaFilmes' },
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
