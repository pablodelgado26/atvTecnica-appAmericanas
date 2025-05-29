import { Tabs, Stack } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ff0f35",
                tabBarInactiveTintColor: "#ccc",
                tabBarStyle: {
                    backgroundColor: "#ffffffff",
                    borderTopWidth: 1,
                    borderTopColor: "#39FF14",
                    height: 80,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
                headerTitleAlign: 'center',

                headerTintColor: '#39FF14',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarLabel: "Home", // Adiciona o nome abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="category"
                options={{
                    headerShown: false,
                    tabBarLabel: "Categorias", // Adiciona o nome abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="menu" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    headerShown: false,
                    tabBarLabel: "Favoritos", // Adiciona o nome abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="heart" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    headerShown: false,
                    tabBarLabel: "Conta", // Adiciona o nome abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-o" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>



    );
}