// app/novel/[id].tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function NovelDetail() {
    const novel = useLocalSearchParams();
    const { appliedTheme } = useThemeContext();
    return (
        <View style={[styles.container, {backgroundColor: appliedTheme.colors.background}]}>
        <Image source={{ uri: novel.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{novel.title}</Text>
        <Text style={styles.chapters}>Chapters: {novel.chapters}</Text>
        {/* Add more details as needed */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    chapters: {
        fontSize: 18,
        color: 'gray',
    },
});
