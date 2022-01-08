import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [rentmonth, setrentmonth] = useState('');
  const [totalrent, settotalrent] = useState('');
  const [payrent, setpayrent] = useState('');

  const saveRent = async () => {
    try {
      let rent = JSON.parse(await AsyncStorage.getItem('rent'));

      if (!rent) {
        rent = [];
      }

      try {
        await AsyncStorage.setItem(
          'rent',
          JSON.stringify([
            ...rent,
            {
              id: Math.random(),
              rentmonth: rentmonth,
              totalrent: totalrent,
              payrent: payrent,
            },
          ])
        );
      } catch (err) {
        alert(err);
      }
    } catch (err) {
      alert(err);
    }

    setrentmonth('');
    settotalrent('');
    setpayrent('');
  };
  // const viewrent = () => {
  //   navigation.navigate('chkrent');
  // };

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
      <View style={{ marginLeft: 50, marginRight: 50 }}>
        <Text
          style={{
            fontSize: 25,
            marginBottom: 50,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Rent Info
        </Text>

        <Text>Enter Month of Rent</Text>
        <TextInput
          mode='outlined'
          label='Enter Month'
          value={rentmonth}
          onChangeText={setrentmonth}
        />

        <Text style={{ marginTop: 10 }}>Enter Total Rent</Text>
        <TextInput
          KeyboardType='numeric'
          mode='outlined'
          label='Enter Total Rent'
          value={totalrent}
          onChangeText={settotalrent}
        />

        <Text style={{ marginTop: 10 }}>Enter Paid Rent</Text>
        <TextInput
          KeyboardType='numeric'
          mode='outlined'
          label='Enter paid rent'
          value={payrent}
          onChangeText={setpayrent}
        />

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={saveRent}
            style={{
              backgroundColor: '#0078d4',
              padding: 10,
              borderRadius: 5,
            }}>
            <Text style={{ textAlign: 'center' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
