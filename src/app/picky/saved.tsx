import { Screen } from '@/components/Screen';
import { globalStyles } from "@/styles/global";
import { Text } from 'react-native';

export default function PickySaved() {
    return (
        <Screen>
            <Text style={globalStyles.title}>Saved Recipes</Text>
        </Screen>
    )
}