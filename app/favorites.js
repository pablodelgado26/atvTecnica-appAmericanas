import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons' 

export default function FavoriteScreen() {
    return (
        
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={{ fontSize: 18, fontWeight:'bold', color: '#FFF' }}>Favoritos</Text>
                <Ionicons name="search-outline" size={20} color="#fff"/>
            </View>

        <View style={styles.content}>
            <View style={{ backgroundColor: '#FF5555', borderRadius: 40, width: 70, height: 70 , alignItems: 'center', justifyContent: 'center' , display: 'flex'}}>
             <Ionicons name="heart-outline" size={42}  color="#FFF" justifyContent='center' />
            </View>

            <View style={{ width: 320, paddingTop: 30, height: 100, textAlign: 'center' }}>
                <Text style={styles.text}>Nenhum produto adicionado</Text>
                <Text style={styles.subtext}>Você ainda não salvou nenhum produto na sua lista de favoritos.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '94%',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        backgroundColor: '#22222',
    },

    header: {
        width: '100%',
        height: '11%',
        paddingHorizontal: 20,
        paddingTop: 30,
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EE0000',
    },

    content: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        
    },

    text: {
        color: "#EE0000",
        bottom: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },

    subtext: {
        textAlign: 'center',
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    }
})