import React from "react"
import { View, Text, StyleSheet, Image, Pressable, ImageBackgroundBase } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function FavoriteScreen() {
    return (
        
        <View style={styles.container}>

            <View>
                <Image 
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Logo_americanas.png'
                    }}
                    style={{ width: 195, height: 100, marginTop: 100 }}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.text}>
                    Para uma melhor experiência, entre ou cadastre-se 
                </Text>
            </View>

            <View style={styles.pressable}>
            <Pressable style={{ backgroundColor: '#EE0000', width: 400, height: 50, borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: '500' }}>Cadastrar conta</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: '#F8f8ff', width: 400, height: 50, borderRadius: 2, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
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
                    source={{
                    uri: 'https://fontmeme.com/temporary/re_6254_userlmn_1093079cbaf8.png'
                    }}
                    style={{ width: 30, height: 30}}
                    />
                    <Text>Desenvolvido por Kobe</Text>
                    <Text>v11.369.0</Text>
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
        backgroundColor: '#fff'
    },

    text: {
        paddingTop: 20,
        fontWeight: '500',
        width: 200,
        justifyContent: 'center',
        textAlign: 'center',
    },

    pressable: {
        paddingTop: 35 ,
    },

    pressableTerms: {
        width: '100%',
        height: 170,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15
    },
    
    developer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})  