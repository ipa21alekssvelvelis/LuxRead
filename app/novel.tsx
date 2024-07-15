// App/novel.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/types';
import { useThemeContext } from '@/contexts/ThemeContext';

type NovelRouteProp = RouteProp<RootStackParamList, 'novel'>;

export default function Novel() {
  const route = useRoute<NovelRouteProp>();
  const { title, chapters, imageUrl } = route.params;
  // const { appliedTheme } = useThemeContext();
  return (
    <View style={[styles.container, {backgroundColor: 'red'}]}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.chapters}>Chapters: {chapters}</Text>
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
