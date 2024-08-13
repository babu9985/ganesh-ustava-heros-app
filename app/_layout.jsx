import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import LoginScreen from '../components/LoginScreen'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLogin, setisLogin] = useState(false)
  const colorScheme = useColorScheme();
  // const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
  const [loaded] = useFonts({
    'bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'extrabold': require('../assets/fonts/Outfit-ExtraBold.ttf'),
    'medium': require('../assets/fonts/Outfit-Medium.ttf'),
    'regular': require('../assets/fonts/Outfit-Regular.ttf'),
    'semibold': require('../assets/fonts/Outfit-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {!isLogin ? <LoginScreen setisLogin={(value)=>setisLogin(value)}></LoginScreen> :
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>}
    </ThemeProvider>
  );
}
