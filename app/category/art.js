import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [search, setSearch] = useState("");

    const categorias = [
        { id: '1', nome: 'Agulha', rota: 'agulha' },
        { id: '2', nome: 'Argila', rota: 'argila' },
        { id: '3', nome: 'Barbante', rota: 'barbante' },
        { id: '4', nome: 'Bijuterias e acessórios', rota: 'bijuterias' },
        { id: '5', nome: 'Biscuit', rota: 'biscuit' },
        { id: '6', nome: 'Bordado e viés', rota: 'bordado' },
        { id: '7', nome: 'Botão e zíper', rota: 'botaoziper' },
        { id: '8', nome: 'Crochê e tricô', rota: 'crochetrico' },
        { id: '9', nome: 'Desenho', rota: 'desenho' },
        { id: '10', nome: 'Escultura e estátua', rota: 'escultura' },
        { id: '11', nome: 'Esmalte cerâmico', rota: 'esmalte' },
        { id: '12', nome: 'Ferramenta de corte', rota: 'ferramentacorte' },
        { id: '13', nome: 'Ferramenta de relevo', rota: 'ferramentarelevo' },
        { id: '14', nome: 'Ferramenta de sublimação', rota: 'ferramentasublimacao' },
        { id: '15', nome: 'Fitas e laços', rota: 'fitas' },
        { id: '16', nome: 'Fotografia', rota: 'fotografia' },
        { id: '17', nome: 'Gabarito de corte', rota: 'gabaritocorte' },
        { id: '18', nome: 'Gabarito de marcação', rota: 'gabaritomarcacao' },
        { id: '19', nome: 'Gravura', rota: 'gravura' },
        { id: '20', nome: 'Kit costura', rota: 'kitcostura' },
        { id: '21', nome: 'Kit provençal', rota: 'kitprovencal' },
        { id: '22', nome: 'Lãs e linhas', rota: 'laslinhas' },
        { id: '23', nome: 'Lembrancinha personalizada', rota: 'lembrancinha' },
        { id: '24', nome: 'Madeira MDF', rota: 'mdf' },
        { id: '25', nome: 'Materiais de pintura', rota: 'materiaispintura' },
        { id: '26', nome: 'Materiais têxteis', rota: 'materiaistexteis' },
        { id: '27', nome: 'Objetos artesanais', rota: 'objetosartesanais' },
        { id: '28', nome: 'Patchwork e tecido', rota: 'patchwork' },
        { id: '29', nome: 'Pintura', rota: 'pintura' },
        { id: '30', nome: 'Resinas e gomas', rota: 'resinas' },
        { id: '31', nome: 'Revistas e cursos', rota: 'revistas' },
        { id: '32', nome: 'Scrap e decoupage', rota: 'scrap' },
        { id: '33', nome: 'Stencil', rota: 'stencil' },
        { id: '34', nome: 'Tecidos', rota: 'tecidos' },
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
