import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View
          style={{
            justifyContent: 'center',
            opacity: 1,
            backgroundColor: '#fff',
          }}>
          <View style={{}}>
            <Image
              source={require('../assets/Expenditure.jpg')}
              resizeMode='contain'
              style={{ height: 150, width: 150 }}
            />
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('chkrent')}
                style={{
                  backgroundColor: '#0078d4',
                  padding: 5,
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <Text style={{ textAlign: 'center' }}>Check Rental Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            opacity: 1,
            backgroundColor: '#fff',
          }}>
          <View style={{}}>
            <Image
              source={require('../assets/elec.jpg')}
              resizeMode='contain'
              style={{ height: 150, width: 150 }}
            />
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('chkelecbill')}
                style={{
                  backgroundColor: '#0078d4',
                  padding: 5,
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <Text style={{ textAlign: 'center' }}>
                  Check Electricity Bills
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* ############################################################################### */}
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            justifyContent: 'center',
            opacity: 1,
            backgroundColor: '#fff',
          }}>
          <View style={{}}>
            <Image
              source={require('../assets/main.jpg')}
              resizeMode='contain'
              style={{ height: 150, width: 150 }}
            />
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('chkmaint')}
                style={{
                  backgroundColor: '#0078d4',
                  padding: 5,
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <Text style={{ textAlign: 'center' }}>
                  Check Maintenance Bills
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            opacity: 1,
            backgroundColor: '#fff',
          }}>
          <View style={{}}>
            <Image
              source={require('../assets/daily.jpg')}
              resizeMode='contain'
              style={{ height: 150, width: 150 }}
            />
            <View style={{ justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('chkdaily')}
                style={{
                  backgroundColor: '#0078d4',
                  padding: 5,
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <Text style={{ textAlign: 'center' }}>
                  Check Daily Expenses
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* ############################################################################### */}
    </View>
  );
}
