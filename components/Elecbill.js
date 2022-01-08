import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [elecbill, setelecbill] = useState('');
  const [month, setmonth] = useState('');
  const [paybill, setpaybill] = useState('');

  const saveelecticity = async () => {
    try {
      let elec = JSON.parse(await AsyncStorage.getItem('elec'));

      if (!elec) {
        elec = [];
      }

      try {
        await AsyncStorage.setItem(
          'elec',
          JSON.stringify([
            ...elec,
            {
              id: Math.random(),
              elecbill: elecbill,
              month: month,
              paybill: paybill,
            },
          ])
        );
      } catch (err) {
        alert(err);
      }
    } catch (err) {
      alert(err);
    }

    setelecbill('');
    setmonth('');
    setpaybill('');
  };

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
          Electircity Bill
        </Text>

        <Text>Enter Month of Bill</Text>
        <TextInput
          mode='outlined'
          label='Enter Month'
          value={month}
          onChangeText={setmonth}
        />

        <Text style={{ marginTop: 10 }}>Enter Total Bill</Text>
        <TextInput
          KeyboardType='numeric'
          mode='outlined'
          label='Enter Total bill'
          value={elecbill}
          onChangeText={setelecbill}
        />

        <Text style={{ marginTop: 10 }}>Paid Bill</Text>
        <TextInput
          KeyboardType='numeric'
          mode='outlined'
          label='Enter paid bill'
          value={paybill}
          onChangeText={setpaybill}
        />

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={saveelecticity}
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
