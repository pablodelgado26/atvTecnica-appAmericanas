import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [search, setSearch] = useState("");

    const categorias = [
        { id: '1', nome: 'Acessórios de home theater e soundbar', rota: 'acessorios-home-theater-soundbar' },
        { id: '2', nome: 'Acessórios para áudio', rota: 'acessorios-para-audio' },
        { id: '3', nome: 'Acessórios para drones', rota: 'acessorios-para-drones' },
        { id: '4', nome: 'Acessórios para fotografia e vídeo', rota: 'acessorios-fotografia-video' },
        { id: '5', nome: 'Acessórios para projetor', rota: 'acessorios-para-projetor' },
        { id: '6', nome: 'Acessórios para TV', rota: 'acessorios-para-tv' },
        { id: '7', nome: 'Agulhas e acessórios para vitrola', rota: 'agulhas-acessorios-vitrola' },
        { id: '8', nome: 'Assistente pessoal', rota: 'assistente-pessoal' },
        { id: '9', nome: 'Caixa de som', rota: 'caixa-de-som' },
        { id: '10', nome: 'Câmera de ação', rota: 'camera-de-acao' },
        { id: '11', nome: 'Câmera digital', rota: 'camera-digital' },
        { id: '12', nome: 'Câmera instantânea', rota: 'camera-instantanea' },
        { id: '13', nome: 'Câmera profissional', rota: 'camera-profissional' },
        { id: '14', nome: 'Cartão de memória', rota: 'cartao-de-memoria' },
        { id: '15', nome: 'Dispositivo de streaming', rota: 'dispositivo-de-streaming' },
        { id: '16', nome: 'Drones', rota: 'drones' },
        { id: '17', nome: 'DVD e Blu-ray player', rota: 'dvd-blu-ray-player' },
        { id: '18', nome: 'Filmadoras digitais', rota: 'filmadoras-digitais' },
        { id: '19', nome: 'Filme para câmera instantânea', rota: 'filme-para-camera-instantanea' },
        { id: '20', nome: 'Fone de ouvido', rota: 'fone-de-ouvido' },
        { id: '21', nome: 'Home theater e soundbar', rota: 'home-theater-soundbar' },
        { id: '22', nome: 'Impressoras fotográficas', rota: 'impressoras-fotograficas' },
        { id: '23', nome: 'Micro system', rota: 'micro-system' },
        { id: '24', nome: 'Mini system', rota: 'mini-system' },
        { id: '25', nome: 'Papel fotográfico', rota: 'papel-fotografico' },
        { id: '26', nome: 'Porta retrato digital', rota: 'porta-retrato-digital' },
        { id: '27', nome: 'Projetor', rota: 'projetor' },
        { id: '28', nome: 'Rádio', rota: 'radio' },
        { id: '29', nome: 'Receiver', rota: 'receiver' },
        { id: '30', nome: 'Reprodutores portáteis', rota: 'reprodutores-portateis' },
        { id: '31', nome: 'TV', rota: 'tv' },
        { id: '32', nome: 'Vitrola', rota: 'vitrola' },
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
