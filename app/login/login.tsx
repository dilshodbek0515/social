import { Pressable, StyleSheet, Text, View } from 'react-native'
import Inputs from '../../shared/inputs/Inputs'
import { Gap } from '../../shared/tokkens'
import { Colors } from '../../shared/tokkens'
import { useState } from 'react'
import Google from '../../assets/icons/google'
import Facebook from '../../assets/icons/facebook'
import Iphone from '../../assets/icons/iphone'
import Android from '../../assets/icons/android'

export default function Login () {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const formFile = email.trim() !== '' && password.trim() !== ''

  return (
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
          <Pressable style={styles.flex} onPress={() => setCheckbox(!checkbox)}>
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
  )
}

const styles = StyleSheet.create({
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
  }
})
