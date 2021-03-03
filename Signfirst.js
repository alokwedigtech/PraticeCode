import React, { useState } from 'react';
import { StyleSheet, Button, Image, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';

const Signinfirst = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onPressLogin = () => {
    console.log('TAG', 'button click')
    Alert.alert(`hey ${email} entered password is ${password}`), () => {
      setPassword("")
      setEmail("")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Sign In</Text>
      <View style={styles.inputview}>
        <TextInput
          style={styles.inputText}
          placeholder="johndoe@gmail.com"
          placeholderTextColor="#a3a3a3"
          onChangeText={(e) => setEmail(e)} />
      </View>

      <View style={styles.inputview}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="*********"
          placeholderTextColor="#a3a3a3"
          onChangeText={(e) => setPassword(e)} />
      </View>

      <View style={styles.remforget}>
        <TouchableOpacity>
          <Text style={styles.rember}> Remember Me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forget}> Forget password ?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or </Text>
      <View style={styles.remforgett}>
        <TouchableOpacity>
          <Text style={styles.create}> Don't have account? </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.newone}>create new one </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50
  },
  inputview: {
    width: "90%",
    backgroundColor: "#fff",
    borderColor: '#000000',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#000000",
    borderColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20
  },
  remforget: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 40,
    width: '100%'
  },
  rember: {
    color: '#121212',
    fontSize: 10,
  },
  forget: {
    color: '#bababa',
    fontSize: 10,
  },
  buttonview: {
    width: '80%',
    marginBottom: 20,
    borderRadius: 25,
  },

  button: {
    borderRadius: 25,
    borderWidth: 1,
  },
  create: {
    color: '#bdbdbd'
  },
  or: {
    fontSize: 15,
    color: '#bdbdbd',
    marginTop: 20,

  },
  newone: {
    color: '#69b4ff'
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#399cff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  remforgett: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  }
});
export default Signinfirst
