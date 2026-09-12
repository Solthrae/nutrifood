import { Screen } from '@/components/Screen';
import { globalStyles } from "@/styles/global";
import { Text } from 'react-native';

export default function RegularMenu() {
    return (
        <Screen>
            <Text style={globalStyles.title}>Menu</Text>
        </Screen>
    )
}