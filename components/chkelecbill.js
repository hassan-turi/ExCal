import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DataTable, Button } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [elec, setelec] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const fetchData = async () => {
    let data = await AsyncStorage.getItem('elec');
    if (data) {
      console.log(data);
      setelec(JSON.parse(data));
    }
  };

  const deleteHandler = async (id) => {
    const data = elec.filter((obj) => id !== obj.id);
    setelec(data);
    try {
      await AsyncStorage.setItem('elec', JSON.stringify(data));
    } catch (err) {
      alert(err);
    }
  };

  const deleteAll = async () => {
    setelec([]);
    try {
      await AsyncStorage.setItem('elec', JSON.stringify([]));
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
        Electricity Expenses Info
      </Text>
      <Button onPress={() => deleteAll()}>Clear All</Button>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Month</DataTable.Title>
            <DataTable.Title>Total elec</DataTable.Title>
            <DataTable.Title>Paid elec</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
        </DataTable>
        {elec.map((obj) => (
          <DataTable.Row>
            <DataTable.Cell>{obj.month}</DataTable.Cell>
            <DataTable.Cell>{obj.elecbill}</DataTable.Cell>
            <DataTable.Cell>{obj.paybill}</DataTable.Cell>
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
