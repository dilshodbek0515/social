import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { Colors } from '../../shared/tokkens'

export default function Welcome () {
  useEffect(() => {
    const checkVisited = async () => {
      const visited = await AsyncStorage.getItem('visited')
      if (visited) {
        router.replace('/login/login')
      }
    }
    checkVisited()
  }, [])

  const handleStart = async () => {
    await AsyncStorage.setItem('visited', 'true')
    router.replace('/login/login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Purple School</Text>
      <Pressable onPress={handleStart} style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 40
  },

  btn: {
    backgroundColor: Colors.active_btn,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8
  },

  btnText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '600'
  }
})
