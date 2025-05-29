import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Image, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    
    // Array com as imagens do carrossel
    const carouselImages = [
        { id: '1', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Feef78a39-8030-4306-a0f9-8588d8b7a53a___63aba633b26c6ad22f38c2d10ab73555.png&w=1440&q=75' },
        { id: '2', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F7891142e-5ae1-4bff-9f45-68df37e16695___89f6771e02bd270ab9c6f1f8549d17f1.png&w=1440&q=75' },
        { id: '3', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F733d26ca-b670-438d-a70f-1d985a6f7a22___28d73c85cedb824f8d7a9c03dd3ba80b.png&w=1440&q=75' },
        { id: '4', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F6063b901-c1b1-49e9-9aa8-aa45e3919ec4___79e4d1f22295ed789b434490512e1187.png&w=1440&q=75' },
        { id: '5', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F2c5c1c03-1ae5-4c58-a8ea-5e5b3bd42b54___f86ec2260632d2ae6069b4d58cf94480.png&w=1440&q=75' },
        { id: '6', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fb86cb464-da32-435c-a4f0-107e55feaa0e___77c686cebb8c1ae13a000479a3ab2bf2.png&w=1440&q=75' },
        { id: '7', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F62dab3ce-17be-45a9-a5f1-3494f2938fbc___b864b3c4308fc0eb78bce340a8daeb6a.png&w=1440&q=75' },
        { id: '8', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F8869e077-094f-4998-8c4e-23b60c347cf5___2512060f194afcfa9ab42b382ec6d0a8.png&w=1440&q=75' },
        { id: '9', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fe5b85d12-78c9-43d1-8524-6b5c874f9725___7cec30b3f572c1f30e8b8bf8e799df14.png&w=1440&q=75' },
        { id: '10', uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F4996bdb4-d5d0-4503-9745-e284b0eb04e8___ebff366a6e4fedc668ffd5065d152a4b.png&w=1440&q=75' },
    ];

    // Função para renderizar cada item do carrossel
    const renderCarouselItem = ({ item, index }) => {
        return (
            <TouchableOpacity 
                activeOpacity={0.9}
                onPress={() => console.log(`Imagem ${index + 1} clicada`)}
            >
                <View style={styles.carouselItemContainer}>
                    <Image
                        source={{ uri: item.uri }}
                        style={styles.carouselImage}
                        resizeMode="cover"  // Alterando para "cover" para preencher todo o espaço
                    />
                </View>
            </TouchableOpacity>
        );
    };

    // Função para atualizar o indicador de página atual
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / (Dimensions.get('window').width * 0.8));
        setActiveIndex(index);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" size={22} color="#888" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="busque aqui seu produto"
                        placeholderTextColor="#888"
                    />
                </View>
            </View>
            <View style={{ height: 10 }} />
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fba16a37e-3831-46a9-aab8-61bffc456e98___9dd59faff35da8605690f1e9f6917bf0.png&w=1440&q=75',
                    }}
                    style={styles.bannerImage}
                    resizeMode="cover"
                />
            </View>
            
            {/* Início do Carrossel */}
            <View style={styles.carouselContainer}>
                <Text style={styles.carouselTitle}>Ofertas do dia</Text>
                <FlatList
                    ref={flatListRef}
                    data={carouselImages}
                    renderItem={renderCarouselItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={false}
                    decelerationRate="fast"
                    snapToInterval={Dimensions.get('window').width * 0.8 + 10}
                    snapToAlignment="center"
                    onScroll={handleScroll}
                    contentContainerStyle={styles.carouselList}
                />
                <View style={styles.paginationContainer}>
                    {carouselImages.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                index === activeIndex ? styles.paginationDotActive : null
                            ]}
                        />
                    ))}
                </View>
            </View>
            {/* Fim do Carrossel */}
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBarContainer: {
        backgroundColor: '#E60014',
        paddingTop: 40,
        paddingBottom: 16,
        paddingHorizontal: '5%',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 24,
        paddingHorizontal: 12,
        height: 44,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        borderWidth: 0,
        outlineStyle: 'none',
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 16,
    },
    bannerImage: {
        width: Dimensions.get('window').width,
        height: 140,
        borderRadius: 0,
    },
    // Estilos do carrossel
    carouselContainer: {
        marginTop: 20,
        paddingBottom: 30,
    },
    carouselTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginBottom: 12,
        color: '#333',
    },
    
    carouselItemContainer: {
        width: Math.round(Dimensions.get('window').width * 0.99), // aumente aqui para 92% da largura da tela
        height: Math.round(Dimensions.get('window').width * 0.3),
        marginHorizontal: 10, // diminua a margem para caber mais na tela
        borderRadius: 12,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 0,
        backgroundColor: '#ffff',  // Alterando para branco para melhor visualização
        alignItems: 'center',
        justifyContent: 'center',
    
        
    },
    carouselImage: {
        width: '100%',  // Agora a imagem ocupa 100% da largura do container
        height: '86%',  // Agora a imagem ocupa 100% da altura do container
        borderRadius: 12,
        marginTop: 20,
        height: '90%',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: '#E60014',
        width: 12,
        height: 8,
    },
});