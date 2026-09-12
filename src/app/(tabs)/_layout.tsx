import { colors } from '@/styles/global';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.border,
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
            }}
        >
        <Tabs.Screen
            name='index'
            options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name='home' size={size} color={color} />
            ),
            }}
        />

        <Tabs.Screen
            name='recipes'
            options={{
            title: 'Recipes',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='food' size={size} color={color} />
            ),
            }}
        />

        </Tabs>
    );
}