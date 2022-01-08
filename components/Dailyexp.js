import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [month, setmonth] = useState('');
  const [item, setitem] = useState('');
  const [price, setprice] = useState('');

  const dailyexp = async () => {
    try {
      let daily = JSON.parse(await AsyncStorage.getItem('daily'));

      if (!daily) {
        daily = [];
      }

      try {
        await AsyncStorage.setItem(
          'daily',
          JSON.stringify([
            ...daily,
            {
              id: Math.random(),
              month: month,
              item: item,
              price: price,
            },
          ])
        );
      } catch (err) {
        alert(err);
      }
    } catch (err) {
      alert(err);
    }

    setmonth('');
    setprice('');
    setitem('');
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
          Daily Expenses Info
        </Text>

        <Text>Enter Month</Text>
        <TextInput
          mode='outlined'
          label='Enter Month'
          value={month}
          onChangeText={setmonth}
        />
        <Text style={{ marginTop: 10 }}>Enter Item</Text>
        <TextInput
          mode='outlined'
          label='Enter Item'
          value={item}
          onChangeText={setitem}
        />

        <Text style={{ marginTop: 10 }}>Enter Price</Text>
        <TextInput
          mode='outlined'
          label='Enter Price'
          value={price}
          onChangeText={setprice}
        />

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={dailyexp}
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
