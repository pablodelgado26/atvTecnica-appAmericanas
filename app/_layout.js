import { Tabs, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ff0f35",
                tabBarInactiveTintColor: "#FFFFFF",
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
                name="category"
                options={{
                    headerShown: false,
                    tabBarLabel: "Categorias", // Adiciona o nome abaixo do ícone
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="menu" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>



    );
}