import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { Stack } from 'expo-router'
SplashScreen.preventAutoHideAsync()

export default function Layout () {
  // fonts
  const [loaded, error] = useFonts({
    Exo400: require('../assets/fonts/Exo400.ttf'),
    Exo500: require('../assets/fonts/Exo500.ttf'),
    Exo600: require('../assets/fonts/Exo600.ttf'),
    Exo700: require('../assets/fonts/Exo700.ttf')
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: 'black'
        },
        headerShown: false
      }}
    >
      <Stack.Screen name='index' />
    </Stack>
  )
}
