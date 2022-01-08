import * as React from 'react';
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import Signup from './components/Signup';
import Dailyexp from './components/Dailyexp';
import Elecbill from './components/Elecbill';
import Rentalexp from './components/Rentalexp';
import Maintexp from './components/Maintexp';
import EnterExp from './components/EnterExp';
import CheckExpMenu from './components/CheckExpMenu';
import Logout from './components/Logout';
import chkrent from './components/chkrent';
import chkdaily from './components/chkdaily';
import chkmaint from './components/chkmaint';
import chkelecbill from './components/chkelecbill';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/Firebase';

const Stack = createStackNavigator();
const drawer = createDrawerNavigator();

function Drawer() {
  return (
    <drawer.Navigator
      drawerContent={(props) => <Logout {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 200,
        },
      }}>
      <drawer.Screen name='Enter_Expenses' component={EnterExp} />
      <drawer.Screen name='CheckExpMenu' component={CheckExpMenu} />
    </drawer.Navigator>
  );
}

export default function App() {
  const [username, setusername] = React.useState('');

  onAuthStateChanged(auth, (user) => {
    if (user !== null && user.displayName !== null) {
      setusername(user.displayName);
    } else {
      setusername('');
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: 'Welcome to ExCal',
          }}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: 'Welcome to ExCal',
          }}
        />
        <Stack.Screen
          name='Menu'
          component={Drawer}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='todo'
          component={Drawer}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='Dailyexp'
          component={Dailyexp}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='Elecbill'
          component={Elecbill}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='Rentalexp'
          component={Rentalexp}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='Maintexp'
          component={Maintexp}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='chkrent'
          component={chkrent}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='chkdaily'
          component={chkdaily}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='chkmaint'
          component={chkmaint}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
        <Stack.Screen
          name='chkelecbill'
          component={chkelecbill}
          options={{
            headerShown: true,
            headerTintColor: 'black',
            headerStyle: { backgroundColor: '#0078d4' },
            headerTitleAlign: 'center',
            title: `Welcome ${username}`,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
