import { Stack } from 'expo-router';

export default function CategoryLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ff0f35',
                },
                headerTintColor: '#ffff',
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name="category"
                options={{
                    title: 'Categorias',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="agro"
                options={{
                    title: 'Agro, indústria e comércio',
                    headerShown: true,
                }}
            />
        </Stack>
    );
}