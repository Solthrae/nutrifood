import { StyleSheet } from "react-native";

export const colors = {
    // Primary
    primary: '#F2765E',
    secondary: '#315B8C',

    // Background & Surfaces
    background: '#F5EBDD',
    surface: '#FFFFFF',
    surfaceDark: '#413333',

    // Text
    textPrimary: '#413333',
    textSecondary: '#7A6B6B',
    textInverse: '#FFFFFF',

    // States
    error: '#ff5252',
    success: '#4CAF50',
    warning: '#FFC107',

    // Utilities
    border: '#E0D6C8',
    transparent: 'transparent',
} as const;

export const spacing = {
    xs: 4, // Extra Small
    sm: 8, // Small
    md: 16, // Medium
    lg: 24, // Large
    xl: 32, // Extra Large
    xxl: 48, // Extra Extra Large
} as const;

export const globalStyles = StyleSheet.create({
    // Layout
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    // Flexbox Helpers
    flexRow: { flexDirection: 'row' },
    flexCol: { flexDirection: 'column' },

    center: { justifyContent: 'center', alignItems: 'center' },
    spaceBetween: { justifyContent: 'space-between' },

    alignCenter: { alignItems: 'center' },

    // Typography Enchancements
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.textPrimary,
        lineHeight: 34,
        // fontFamily: 'Your-Bold-Font',
    },

    body: {
        fontSize: 16,
        color: colors.textPrimary,
        lineHeight: 24,
    },

    caption: {
        fontSize: 12,
        color: colors.textSecondary,
        lineHeight: 16,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.textInverse,
        textAlign: 'center',
    },

    // UI Component
    card: {
        backgroundColor: colors.surface,
        borderRadius: 12,
        padding: spacing.md,

        // iOS Shadow
        shadowColor: colors.textPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        // Android Shadow
        elevation: 3, 
    },

    input: {
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        fontSize: 16,
        color: colors.textPrimary,
    },

    buttonPrimary: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: spacing.lg,
        borderRadius: 8,
        alignItems: 'center',
    },

    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.md,
    },
});