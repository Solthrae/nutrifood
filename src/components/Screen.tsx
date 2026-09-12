import { colors, spacing } from '@/styles/global';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenProps {
    children: React.ReactNode
    style?: StyleProp<ViewStyle>
}

export const Screen = ({ children, style }: ScreenProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: insets.top + spacing.md,
                    paddingBottom: insets.bottom + spacing.md,
                    paddingLeft: insets.left + spacing.md,
                    paddingRight: insets.right + spacing.md,
                },
                style,
            ]}
        >
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});