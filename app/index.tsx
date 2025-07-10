import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { Colors, Gap, Padding } from '../shared/tokkens'
import Buttons from '../shared/buttons/Buttons'
import Login from './login/login'

export default function App () {
  const [active, setActive] = useState<boolean | string>('login')

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.light}
        barStyle={'dark-content'}
      />

      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
        resizeMode='contain'
      />

      <View style={styles.content}>
        <Text style={styles.login__title}>Get Started now</Text>
        <Text style={styles.login__description}>
          Create an account or log in to explore about our app
        </Text>
      </View>

      <View style={styles.pass}>
        <Buttons
          text='Log in'
          isActive={active === 'login'}
          onPress={() => setActive('login')}
        />
        <Buttons
          text='Sign up'
          isActive={active === 'signup'}
          onPress={() => setActive('signup')}
        />
      </View>

      {active === 'login' && (
        <>
          <Login />
        </>
      )}

      {active === 'signup' && (
        <>
          <Text style={{ color: 'black', fontSize: 30 }}>Sign up</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
    padding: Padding.padding24,
    gap: Gap.gap24
  },

  content: {
    gap: Gap.gap12
  },

  logo: {
    width: 27
  },

  login__title: {
    color: Colors.black,
    fontSize: 32,
    fontFamily: 'Exo700',
    textAlign: 'center'
  },

  login__description: {
    color: Colors.gray,
    fontSize: 12,
    fontFamily: 'Exo400',
    textAlign: 'center',
    width: 200
  },

  pass: {
    flexDirection: 'row',
    width: '100%',
    height: 36,
    backgroundColor: Colors.pass,
    boxShadow: '0px 3px 6px 0px #00000005 inset',
    borderRadius: 7,
    padding: 2
  }
})
