import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function App({ navigation }) {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [name, setname] = useState('');

  const empinput = () => {
    setpass('');
    setemail('');
    setname('');
  };

  const signupHandle = async () => {
    if (pass.length <= 5 || email.length <= 8) {
      Alert.alert(
        'Password must be greater than 5 Characters and Email must be greater than 8 characters'
      );
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, pass);
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        navigation.replace('Menu');
      } catch (err) {
        Alert.alert('Invalid Sign up Attempt');
      }
    }
  };

  return (
    //  <ImageBackground style={{fresizeMode:'stretch',justifyContent:'center'}} source={require('../assets/pic.jpg')} >
    //  </ImageBackground>
    <View
      style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <Text
        style={{
          fontSize: 25,
          marginBottom: 50,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Sign up
      </Text>
      <View style={{ marginLeft: 50, marginRight: 50 }}>
        <Text style={{ marginTop: 5 }}>Name</Text>
        <TextInput
          mode='outlined'
          label='Name'
          value={name}
          onChangeText={setname}
        />
        <Text style={{ marginTop: 10 }}>Email</Text>
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
            onPress={signupHandle}
            disabled={name.length == 0 || pass.length == 0 || email.length == 0}
            style={{
              backgroundColor: '#0078d4',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{ textAlign: 'center' }}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
          <Text>Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ textDecorationLine: 'underline' }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
