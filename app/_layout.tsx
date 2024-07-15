// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { NovelRowsProvider } from '@/contexts/NovelRowsContext';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useThemeContext } from '@/contexts/ThemeContext';
export default function RootLayout() {
  return (
    <ThemeProvider>
      <NovelRowsProvider>
        <AppContent />
      </NovelRowsProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { appliedTheme } = useThemeContext();
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: appliedTheme.colors.background,
            },
            headerTintColor: appliedTheme.colors.text,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false
          }}
        >
          <Stack.Screen name="index" options={{}} />
          <Stack.Screen name="library" options={{}} />
          <Stack.Screen name="settings" options={{}} />
          <Stack.Screen name="novel/[id]" options={{}} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
