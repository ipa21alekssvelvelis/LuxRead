// app/i
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Footer from '@/components/Footer';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function Index() {
  return <AppContent />;
}

function AppContent() {
  const { theme, appliedTheme } = useThemeContext();
  const barStyle = theme.startsWith('dark') ? 'light-content' : 'dark-content';
  
  return (
    <>
      <StatusBar backgroundColor={appliedTheme.colors.background} barStyle={barStyle}/>
      <View style={[styles.container, { backgroundColor: appliedTheme.colors.background }]}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
