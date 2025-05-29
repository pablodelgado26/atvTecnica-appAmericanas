import { Stack } from 'expo-router';

export default function CategoryLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerShown: false,
                headerTintColor: '#39FF14',
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Categorias' }} />
            <Stack.Screen name="detalhe" options={{ title: 'Detalhe da Categoria' }} />
        </Stack>
    );
}