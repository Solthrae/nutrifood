import { Screen } from '@/components/Screen';
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { Text } from 'react-native';

export default function RecipesPage() {
    return (
        <Screen>
            <Text style={globalStyles.title}>Recipes</Text>
            <Link href={'/picky/menu'} style={{ fontSize: 18, color: '#007bff' }}>
                Go to Picky Eater
            </Link>
            <Link href={'/regular/menu'} style={{ fontSize: 18, color: '#007bff' }}>
                Go to Regular Eater
            </Link>
        </Screen>
    )
}