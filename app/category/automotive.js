import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [search, setSearch] = useState("");

const categorias = [
    { id: '1', nome: 'Acessórios automotivos', rota: 'acessorios-automotivos' },
    { id: '2', nome: 'Acessórios para capacetes', rota: 'acessorios-para-capacetes' },
    { id: '3', nome: 'Acessórios para moto', rota: 'acessorios-para-moto' },
    { id: '4', nome: 'Aerófolio', rota: 'aerofolio' },
    { id: '5', nome: 'Alarme e segurança', rota: 'alarme-e-seguranca' },
    { id: '6', nome: 'Amortecedores e acessórios', rota: 'amortecedores-e-acessorios' },
    { id: '7', nome: 'Ar condicionado e ventilação', rota: 'ar-condicionado-e-ventilacao' },
    { id: '8', nome: 'Assoalho de carro', rota: 'assoalho-de-carro' },
    { id: '9', nome: 'Banco e apoios para carro', rota: 'banco-e-apoios-para-carro' },
    { id: '10', nome: 'Borracha automotiva', rota: 'borracha-automotiva' },
    { id: '11', nome: 'Buzina de carro', rota: 'buzina-de-carro' },
    { id: '12', nome: 'Câmeras e sensores', rota: 'cameras-e-sensores' },
    { id: '13', nome: 'Capas', rota: 'capas' },
    { id: '14', nome: 'Direção e peças', rota: 'direcao-e-pecas' },
    { id: '15', nome: 'Eixo e rolamentos', rota: 'eixo-e-rolamentos' },
    { id: '16', nome: 'Elétrica automotiva', rota: 'eletrica-automotiva' },
    { id: '17', nome: 'Elétrica para motos', rota: 'eletrica-para-motos' },
    { id: '18', nome: 'Embreagem e câmbio', rota: 'embreagem-e-cambio' },
    { id: '19', nome: 'Escapamento', rota: 'escapamento' },
    { id: '20', nome: 'Faixas e adesivos automotivos', rota: 'faixas-e-adesivos-automotivos' },
    { id: '21', nome: 'Ferramentas e reparos para veículos', rota: 'ferramentas-e-reparos-para-veiculos' },
    { id: '22', nome: 'Filtros e acessórios', rota: 'filtros-e-acessorios' },
    { id: '23', nome: 'Freio e peças', rota: 'freio-e-pecas' },
    { id: '24', nome: 'Ignição e peças', rota: 'ignicao-e-pecas' },
    { id: '25', nome: 'Iluminação automotiva', rota: 'iluminacao-automotiva' },
    { id: '26', nome: 'Injeção eletrônica', rota: 'injecao-eletronica' },
    { id: '27', nome: 'Letreiros de carro', rota: 'letreiros-de-carro' },
    { id: '28', nome: 'Limpador de para-brisa', rota: 'limpador-de-para-brisa' },
    { id: '29', nome: 'Limpeza e estética automotiva', rota: 'limpeza-e-estetica-automotiva' },
    { id: '30', nome: 'Manopla de câmbio', rota: 'manopla-de-cambio' },
    { id: '31', nome: 'Moto', rota: 'moto' },
    { id: '32', nome: 'Motor e peças', rota: 'motor-e-pecas' },
    { id: '33', nome: 'Painéis e peças', rota: 'paineis-e-pecas' },
    { id: '34', nome: 'Para-choque e peças relacionadas', rota: 'para-choque-e-pecas-relacionadas' },
    { id: '35', nome: 'Peças e acessórios', rota: 'pecas-e-acessorios' },
    { id: '36', nome: 'Peças mecânicas para moto', rota: 'pecas-mecanicas-para-moto' },
    { id: '37', nome: 'Pneus e acessórios', rota: 'pneus-e-acessorios' },
    { id: '38', nome: 'Pneus e peças para moto', rota: 'pneus-e-pecas-para-moto' },
    { id: '39', nome: 'Porta-luvas, moedas e copos', rota: 'porta-luvas-moedas-copos' },
    { id: '40', nome: 'Protetor de cárter', rota: 'protetor-de-carter' },
    { id: '41', nome: 'Protetor solar automotivo', rota: 'protetor-solar-automotivo' },
    { id: '42', nome: 'Retrovisores e peças', rota: 'retrovisores-e-pecas' },
    { id: '43', nome: 'Segurança e acessórios', rota: 'seguranca-e-acessorios' },
    { id: '44', nome: 'Som automotivo', rota: 'som-automotivo' },
    { id: '45', nome: 'Spoiler de carro', rota: 'spoiler-de-carro' },
    { id: '46', nome: 'Suspensão e peças', rota: 'suspensao-e-pecas' },
    { id: '47', nome: 'Tanque de combustível', rota: 'tanque-de-combustivel' },
    { id: '48', nome: 'Tapetes', rota: 'tapetes' },
    { id: '49', nome: 'Volante', rota: 'volante' },
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
