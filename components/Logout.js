import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { auth } from './Firebase';

export default function Logout(props) {
  const navigation = useNavigation();
  const logoutHandler = () => {
    auth.signOut().then(navigation.replace('Login'));
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={logoutHandler} />
    </DrawerContentScrollView>
  );
}
