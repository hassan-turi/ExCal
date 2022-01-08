import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [rent, setrent] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const fetchData = async () => {
    let data = await AsyncStorage.getItem('rent');
    if (data) {
      console.log(data);
      setrent(JSON.parse(data));
    }
  };

  const deleteHandler = async (id) => {
    const data = rent.filter((obj) => id !== obj.id);
    setrent(data);
    try {
      await AsyncStorage.setItem('rent', JSON.stringify(data));
    } catch (err) {
      alert(err);
    }
  };

  const deleteAll = async () => {
    setrent([]);
    try {
      await AsyncStorage.setItem('rent', JSON.stringify([]));
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 25,
          marginBottom: 50,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Rental Expenses Info
      </Text>
      <Button onPress={() => deleteAll()}>Clear All</Button>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Month</DataTable.Title>
            <DataTable.Title>Total Rent</DataTable.Title>
            <DataTable.Title>Paid Rent</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
        </DataTable>
        {rent.map((obj) => (
          <DataTable.Row>
            <DataTable.Cell>{obj.rentmonth}</DataTable.Cell>
            <DataTable.Cell>{obj.totalrent}</DataTable.Cell>
            <DataTable.Cell>{obj.payrent}</DataTable.Cell>
            <Button
              mode='contained'
              style={{ marginTop: 5, height: '75%' }}
              onPress={() => deleteHandler(obj.id)}>
              Delete
            </Button>
          </DataTable.Row>
        ))}
      </View>
    </View>
  );
}
