import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [daily, setdaily] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const fetchData = async () => {
    let data = await AsyncStorage.getItem('daily');
    if (data) {
      console.log(data);
      setdaily(JSON.parse(data));
    }
  };

  const deleteHandler = async (id) => {
    const data = daily.filter((obj) => id !== obj.id);
    setdaily(data);
    try {
      await AsyncStorage.setItem('daily', JSON.stringify(data));
    } catch (err) {
      alert(err);
    }
  };

  const deleteAll = async () => {
    setdaily([]);
    try {
      await AsyncStorage.setItem('daily', JSON.stringify([]));
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
        Daily Expenses Info
      </Text>
      <Button onPress={() => deleteAll()}>Clear All</Button>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Month</DataTable.Title>
            <DataTable.Title>Total daily</DataTable.Title>
            <DataTable.Title>Paid daily</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
        </DataTable>
        {daily.map((obj) => (
          <DataTable.Row>
            <DataTable.Cell>{obj.month}</DataTable.Cell>
            <DataTable.Cell>{obj.item}</DataTable.Cell>
            <DataTable.Cell>{obj.price}</DataTable.Cell>
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
