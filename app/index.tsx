import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Colors, Gap, Padding } from '../shared/tokkens'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../entities/auth/model/auth.state'

export default function App () {
  const handleLogout = useSetAtom(logoutAtom)
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.light}
        barStyle={'dark-content'}
      />

      <Text>Home page</Text>

      <Pressable onPress={handleLogout} style={styles.log}>
        <Text style={styles.logout}>Log out</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    padding: Padding.padding24,
    gap: Gap.gap24,
    justifyContent: 'center'
  },
  log: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logout: {
    width: '100%',
    backgroundColor: 'red',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 20,
    color: 'white'
  }
})
