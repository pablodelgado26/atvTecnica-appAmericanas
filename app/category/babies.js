import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [search, setSearch] = useState("");

const categorias = [
    { id: '1', nome: 'Acessórios de passeio', rota: 'acessorios-de-passeio' },
    { id: '2', nome: 'Amamentação e acessórios', rota: 'amamentacao-e-acessorios' },
    { id: '3', nome: 'Andadores', rota: 'andadores' },
    { id: '4', nome: 'Babá eletrônica', rota: 'baba-eletronica' },
    { id: '5', nome: 'Banheira e acessórios', rota: 'banheira-e-acessorios' },
    { id: '6', nome: 'Berços e cercados', rota: 'bercos-e-cercados' },
    { id: '7', nome: 'Brinquedos e atividades', rota: 'brinquedos-e-atividades' },
    { id: '8', nome: 'Cadeiras de alimentação', rota: 'cadeiras-de-alimentacao' },
    { id: '9', nome: 'Cadeiras para auto', rota: 'cadeiras-para-auto' },
    { id: '10', nome: 'Carrinhos de bebê', rota: 'carrinhos-de-bebe' },
    { id: '11', nome: 'Chupetas, mordedores e acessórios', rota: 'chupetas-mordedores-e-acessorios' },
    { id: '12', nome: 'Cuidados com o bebê e pós banho', rota: 'cuidados-com-o-bebe-e-pos-banho' },
    { id: '13', nome: 'Enxoval do bebê e acessórios', rota: 'enxoval-do-bebe-e-acessorios' },
    { id: '14', nome: 'Fraldas e acessórios', rota: 'fraldas-e-acessorios' },
    { id: '15', nome: 'Higiene infantil', rota: 'higiene-infantil' },
    { id: '16', nome: 'Kit alimentação e acessórios', rota: 'kit-alimentacao-e-acessorios' },
    { id: '17', nome: 'Mamadeiras e acessórios', rota: 'mamadeiras-e-acessorios' },
    { id: '18', nome: 'Saúde pós-parto', rota: 'saude-pos-parto' },
    { id: '19', nome: 'Segurança', rota: 'seguranca' },
    { id: '20', nome: 'Troninho e assento redutor', rota: 'troninho-e-assento-redutor' },
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
