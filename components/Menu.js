import  React , {useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity,ImageBackground } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function App({navigation}) {
  return (
<View style={{backgroundColor: 'white',flex:1}}>
<View style={{flexDirection:'row', justifyContent:'space-around' }}>
  <View
    style={{justifyContent: 'center', opacity: 1, backgroundColor: '#fff', }}>
    <View
      style={{}}>
      <Image
        source={require('../assets/Expenditure.jpg')}
        resizeMode='cover'
        style={{ height: 130, width: 150, }}
      /></View>
      <View style={{justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('entexp')}
      style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center'  }}>Enter Expenditure</Text>
      </TouchableOpacity>
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
      <TouchableOpacity onPress={()=>navigation.navigate('chkexp')}
      style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center' }}>Check Expenditure</Text>
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
      <TouchableOpacity style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center'  }}>Crete Time Table</Text>
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
      <TouchableOpacity style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center' }}>Check Time Table</Text>
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
      <TouchableOpacity onPress={()=>navigation.navigate('todo')}
      style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center'  }}>Enter ToDo</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>

  <View
    style={{ justifyContent: 'center', opacity: 1, backgroundColor: '#fff' }}>
    <View
      style={{ }}>
      <Image
        source={require('../assets/TimeTable.png')}
        resizeMode='contain'
        style={{ height: 150, width: 150, }}
      />
      <View style={{justifyContent: 'center' }}>
      <TouchableOpacity style={{backgroundColor:'#0078d4',padding:5,width:"80%",alignSelf:'center'}}>
        <Text style={{ textAlign:'center' }}>Check ToDo</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
</View>
{/* ############################################################################### */}
</View>
  );
}
