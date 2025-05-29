import React from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
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
            {/* Outros componentes da Home aqui */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBarContainer: {
        backgroundColor: '#E60014', // vermelho Americanas
        paddingTop: 40,
        paddingBottom: 16,
        paddingHorizontal: 16,
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
        borderWidth: 0, // remove a linha preta
        outlineStyle: 'none', // remove outline em web
    },
});