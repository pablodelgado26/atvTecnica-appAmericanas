import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Image, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    
    // Array com as imagens do carrossel
    const carouselImages = [
        { id: '1', uri: 'https://images-americanas.b2w.io/produtos/01/00/img/5211704/2/5211704228_1GG.jpg' },
        { id: '2', uri: 'https://images-americanas.b2w.io/produtos/4612327940/imagens/smartphone-samsung-galaxy-a05s-preto-6-7-128gb-4gb/4612327940_1_large.jpg' },
        { id: '3', uri: 'https://images-americanas.b2w.io/produtos/5972670621/imagens/smart-tv-50-led-tcl-4k-uhd-hdr-com-google-tv-50p735/5972670621_1_large.jpg' },
        { id: '4', uri: 'https://images-americanas.b2w.io/produtos/6467371129/imagens/iphone-14-128gb-preto-5g-tela-de-6-1-camera-dupla-12mp/6467371129_1_large.jpg' },
        { id: '5', uri: 'https://images-americanas.b2w.io/produtos/01/00/img/5211704/2/5211704228_1GG.jpg' },
        { id: '6', uri: 'https://images-americanas.b2w.io/produtos/5243759429/imagens/ar-condicionado-split-hw-inverter-electrolux-eco-turbo-12000-btus-frio-vi12f-vj12f/5243759429_1_large.jpg' },
        { id: '7', uri: 'https://images-americanas.b2w.io/produtos/3579765104/imagens/notebook-lenovo-intel-core-i5-8gb-256gb-ssd-tela-15-6-windows-11-ideapad-3i-82bs0005br/3579765104_1_large.jpg' },
        { id: '8', uri: 'https://images-americanas.b2w.io/produtos/4611892033/imagens/bicicleta-aro-29-mountain-bike-freio-a-disco-21-marchas-suspensao/4611892033_1_large.jpg' },
        { id: '9', uri: 'https://images-americanas.b2w.io/produtos/5516321514/imagens/maquina-de-lavar-11kg-brastemp-bwk12-frontal-com-ciclo-tira-manchas-power/5516321514_1_large.jpg' },
        { id: '10', uri: 'https://images-americanas.b2w.io/produtos/3092082804/imagens/fone-de-ouvido-bluetooth-jbl-tune-510bt-pure-bass-com-microfone-preto/3092082804_1_large.jpg' },
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
                        resizeMode="cover"
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
            <View style={{ height: 16 }} />
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
        width: '100%',
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
    carouselList: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    carouselItemContainer: {
        width: Dimensions.get('window').width * 0.8,
        height: 200,
        marginHorizontal: 5,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: '#fff',
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
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