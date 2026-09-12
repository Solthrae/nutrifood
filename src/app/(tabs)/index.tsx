import { Screen } from '@/components/Screen';
import { globalStyles } from "@/styles/global";
import { Text } from 'react-native';

export default function HomePage() {
    return (
        <Screen>
            <Text style={globalStyles.title}>NutriFood</Text>
        </Screen>
    )

    /* 
    What to Include:
    - An overview of your recipes.
    */
}