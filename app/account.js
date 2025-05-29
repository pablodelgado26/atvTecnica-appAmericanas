import React from "react"
import { View, Text, StyleSheet, Image, Pressable, ImageBackgroundBase } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import erasedLogo from "../assets/erasedLogo.png"

export default function FavoriteScreen() {
    return (
        
        <View style={styles.container}>

            <View>
                <Image 
                    source={erasedLogo} 
                    style={{ width: 195, height: 100, marginTop: 100 }}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>
                    Para uma melhor experiência, entre ou cadastre-se 
                </Text>
            </View>

            <View style={styles.pressable}>
            <Pressable style={{ backgroundColor: '#ed2939', width: 400, height: 50, borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: '500' }}>Cadastrar conta</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: '#22222', width: 400, height: 50, borderRadius: 2, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Text style={{ color: '#EE0000', fontWeight: '500' }}>Entrar com e-mail</Text>
            </Pressable>
            </View>

            <View style={styles.pressableTerms}>
            <Pressable style={{
                width: 190,
                height: 100,
                borderRadius: 2,
                backgroundColor: '#F8f8ff',
                padding: 10,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Ionicons
                    name="chevron-forward-outline"
                    size={16}
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }}
                />
                <Text style={{
                    color: '#000',
                    fontWeight: '500',
                    position: 'absolute',
                    left: 10,
                    bottom: 10
                }}>
                    Aviso de Privacidade
                </Text>
            </Pressable>

            <Pressable style={{
                width: 190,
                height: 100,
                borderRadius: 2,
                backgroundColor: '#F8f8ff',
                padding: 10,
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Ionicons
                    name="chevron-forward-outline"
                    size={16}
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }}
                />
                <Text style={{
                    color: '#000',
                    fontWeight: '500',
                    position: 'absolute',
                    left: 10,
                    bottom: 10
                }}>
                
                    Suporte
                </Text>
            </Pressable>
            </View>

                <View style={styles.developer}>
                    <Image
                    style={{ width: 30, height: 30}}
                    />
                    <Text>Desenvolvido por: Miguel, Pablo, Vinícuis Pereira e Vinícius Rocha</Text>
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
        backgroundColor: '#22222'
    },

    text: {
        paddingTop: 20,
        fontWeight: '500',
        width: 180,
        justifyContent: 'center',
        textAlign: 'center',
    },

    pressable: {
        paddingTop: 35,
        margin: 5
    },

    pressableTerms: {
        width: '100%',
        height: 170,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    
    developer: {
        width: 110,
        height: 70,
        textAlign: 'center'
    }
})  