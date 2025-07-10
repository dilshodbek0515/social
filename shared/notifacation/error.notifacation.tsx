import { useEffect, useRef, useState } from 'react'
import { ErrorNotificationProps } from './error.props'
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '../tokkens'
import Info from '../../assets/icons/info'
import Closed from '../../assets/icons/closed'

export function Notification ({ error }: ErrorNotificationProps) {
  const insetsTop = useSafeAreaInsets().top
  const [shown, setShown] = useState(false)
  const animatedValue = useRef(new Animated.Value(-100)).current

  // xabar kelishi
  const onEnter = () => {
    Animated.timing(animatedValue, {
      toValue: insetsTop + 10,
      duration: 400,
      useNativeDriver: true
    }).start()
  }

  // xabar yuqolishi
  const onExit = () => {
    Animated.timing(animatedValue, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      setShown(false)
    })
  }

  useEffect(() => {
    if (!error) {
      setShown(false)
      return
    }

    setShown(true)
    onEnter()

    const timer = setTimeout(() => {
      onExit()
    }, 3000)

    return () => clearTimeout(timer)
  }, [error])

  if (!shown) return null

  return (
    <Animated.View
      style={[
        styles.error,
        {
          transform: [{ translateY: animatedValue }]
        }
      ]}
    >
      <View style={styles.error__left}>
        <View style={styles.info}>
          <Info />
        </View>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <Pressable onPress={onExit}>
        <Closed />
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  error: {
    width: '100%',
    height: 52,
    position: 'absolute',
    zIndex: 22,
    backgroundColor: Colors.error_bg,
    padding: 12,
    top: 0,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16
  },

  error__left: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },

  info: {
    width: 28,
    height: 28,
    backgroundColor: Colors.info__bg,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  errorText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }
})
