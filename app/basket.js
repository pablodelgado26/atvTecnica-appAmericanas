import React from "react"
import { View, Text, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons' 
import { Stack } from "expo-router"
import { useRouter } from "expo-router"

export default function FavoriteScreen() {
    const router = useRouter()
    return (
        <View style={[styles.container, { marginTop: 28 }]}>
            <Stack.Screen
                options={{
                    headerShown: false,
                    
                }}></Stack.Screen>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, fontWeight:'bold', color: '#FFF' }}>Cesta (0)</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.basketContainer}>
                    <Ionicons name="basket-outline" size={42} color="#FFF" />
                </View>

                 <View style={styles.textContainer}>
                    <Text style={styles.text}>Sua cesta está vazia</Text>
                    <Text style={styles.subtext}>
                        Navegue pelo aplicativo ou faça uma busca para encontrar seus produtos
                    </Text>
                    <View style={styles.buttonContainer}>
                    <Button 
                        title="Escolher produtos"
                        color="#EE0000" 
                        onPress={() => router.push("./")}
                    />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
        backgroundColor: '#F8f8ff',
    },

    header: {
        width: '100%',
        height: 90,
        paddingHorizontal: 20,
        paddingTop: 20,
        top: -30,
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

    basketContainer: {
        backgroundColor: '#FF5555',
        borderRadius: 40,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    textContainer: {
        alignItems: 'center',
        marginTop: 0,
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
    },

    text: {
        color: "#EE0000",
        fontWeight: 'bold',
        marginBottom: 10,
    },

    subtext: {
        textAlign: 'center',
        marginBottom: 20,
    },

    buttonContainer: {
        marginTop: 10,
    }

})