import  React , {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App({navigation}){
return(
  <View style={{backgroundColor: 'white',flex:1}}>
<View style={{flexDirection:'row', justifyContent:'space-around' }}>
  <View
    style={{justifyContent: 'center', opacity: 1, backgroundColor: '#fff' }}>
    <View
      style={{}}>
      <Image
        source={require('../assets/Expenditure.jpg')}
        resizeMode='contain'
        style={{ height: 150, width: 150, }}
      />
      <View style={{justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Rentalexp')}
      style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center'  }}>Enter Rental Info</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>

  <View
    style={{ justifyContent: 'center', opacity: 1, backgroundColor: '#fff' }}>
    <View
      style={{ }}>
      <Image
        source={require('../assets/expenditure.png')}
        resizeMode='contain'
        style={{ height: 150, width: 150, }}
      />
      <View style={{justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Elecbill')}
      style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center' }}>Enter Electricity Bills</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
</View>

{/* ############################################################################### */}
<View style={{ backgroundColor: 'white',flexDirection:'row',justifyContent:'space-around' }}>
  <View
    style={{ justifyContent: 'center', opacity: 1, backgroundColor: '#fff' }}>
    <View
      style={{}}>
      <Image
        source={require('../assets/expenditure.png')}
        resizeMode='contain'
        style={{ height: 150, width: 150, }}
      />
      <View style={{justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Maintexp')}
      style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center'  }}>Enter Maintenance Bills</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>

  <View
    style={{ justifyContent: 'center', opacity: 1, backgroundColor: '#fff' }}>
    <View
      style={{ }}>
      <Image
        source={require('../assets/expenditure.png')}
        resizeMode='contain'
        style={{ height: 150, width: 150, }}
      />
      <View style={{justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Dailyexp')}
      style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center' }}>Enter Daily Expenses</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
</View>
{/* ############################################################################### */}
</View>
);
}