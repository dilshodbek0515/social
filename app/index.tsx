import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useState } from 'react'
import { Colors, Gap, Padding } from '../shared/tokkens'
import Buttons from '../shared/buttons/Buttons'
import Inputs from '../shared/inputs/Inputs'
import Google from '../assets/icons/google'
import Facebook from '../assets/icons/facebook'
import Iphone from '../assets/icons/iphone'
import Android from '../assets/icons/android'
import axios from 'axios'
import { Login_Api } from '../entities/model/api/api'
import { router } from 'expo-router'

export default function App () {
  const [active, setActive] = useState<boolean | string>('login')
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const formFile = email.trim() !== '' && password.trim() !== ''

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
          <View style={styles.collection}>
            <View>
              <Text style={styles.email_text}>Email</Text>
              <Inputs
                value={email}
                placeholder='Enter your email'
                onChangeText={setEmail}
              />
            </View>

            <View>
              <Text style={styles.email_text}>Pssword</Text>
              <Inputs
                isPassword
                placeholder='Enter your password'
                keyboardType='numeric'
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.checked}>
              <Pressable
                style={styles.flex}
                onPress={() => setCheckbox(!checkbox)}
              >
                <View style={[styles.checkbox, checkbox && styles.checkedBox]}>
                  {checkbox && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.label}>Remember me</Text>
              </Pressable>
              <Text style={styles.forgot}>Forgot Password ?</Text>
            </View>
          </View>

          <Pressable
            style={[
              styles.login_btn,
              {
                backgroundColor: formFile ? Colors.active_btn : Colors.boder
              }
            ]}
            disabled={!formFile}
          >
            <Text
              style={[
                styles.login_text,
                { color: formFile ? Colors.light : Colors.login_btn }
              ]}
            >
              Log in
            </Text>
          </Pressable>

          <View style={styles.line}>
            <View style={styles.to__line} />
            <Text style={styles.with}>Or login with</Text>
            <View style={styles.to__line} />
          </View>

          <View style={styles.applications}>
            <View style={styles.app__child}>
              <Google />
            </View>
            <View style={styles.app__child}>
              <Facebook />
            </View>
            <View style={styles.app__child}>
              <Iphone />
            </View>
            <View style={styles.app__child}>
              <Android />
            </View>
          </View>
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
  },

  collection: {
    width: '100%',
    gap: Gap.gap16
  },

  email_text: {
    fontSize: 12,
    fontFamily: 'Exo500',
    color: Colors.gray,
    marginBottom: 2
  },

  checked: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },

  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1.5,
    borderColor: Colors.boder,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light
  },

  checkedBox: {
    backgroundColor: Colors.outline,
    borderColor: Colors.outline
  },

  checkmark: {
    color: Colors.light,
    fontSize: 8,
    fontWeight: 'bold'
  },

  label: {
    color: Colors.gray,
    fontFamily: 'Exo500',
    fontSize: 12
  },

  forgot: {
    color: Colors.forgot,
    fontFamily: 'Exo600',
    fontSize: 12
  },

  login_btn: {
    width: '100%',
    height: 48,
    backgroundColor: Colors.boder,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },

  login_text: {
    fontSize: 14,
    color: Colors.login_btn,
    fontFamily: 'Exo500'
  },

  line: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  with: {
    fontFamily: 'Exo400',
    color: Colors.gray,
    fontSize: 12
  },

  to__line: {
    borderWidth: 0.5,
    backgroundColor: Colors.boder,
    width: '33%'
  },

  applications: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  app__child: {
    width: 70,
    height: 48,
    borderRadius: 10,
    boxShadow: '0px -3px 6px 0px #F4F5FA99 inset',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
