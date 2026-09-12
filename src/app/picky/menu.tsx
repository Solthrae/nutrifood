import { Screen } from '@/components/Screen';
import { globalStyles } from "@/styles/global";
import { Text } from 'react-native';

export default function PickyMenu() {
    return (
        <Screen>
            <Text style={globalStyles.title}>Menus</Text>
        </Screen>
    )
}