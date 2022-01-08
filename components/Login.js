import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function App({ navigation }) {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const loginHandle = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigation.replace('Menu');
    } catch (err) {
      Alert.alert('Invalid login attempt');
    }
  };

  return (
    // <Image style={{fresizeMode:'stretch',justifyContent:'center',height:100}} source={require('../assets/pic.jpg')} />
    <View
      style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <View style={{ marginLeft: 50, marginRight: 50 }}>
        <Text
          style={{
            fontSize: 25,
            marginBottom: 50,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Log in
        </Text>
        <Text style={{}}>Email</Text>
        <TextInput
          mode='outlined'
          label='Email'
          value={email}
          onChangeText={setemail}
        />
        <Text style={{ marginTop: 10 }}>Password</Text>
        <TextInput
          mode='outlined'
          label='Password'
          value={pass}
          onChangeText={setpass}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={loginHandle}
            style={{
              backgroundColor: '#0078d4',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{ textAlign: 'center' }}>Log in</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
          <Text>Don't have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
