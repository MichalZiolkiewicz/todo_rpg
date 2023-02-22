import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import UserProfile from './UserProfile';
import Settings from './Settings';

import {useContext, useEffect} from 'react';
import {HomeStack} from './HomeStack';
import {AuthContext} from '../context/AuthContext';
import {Button} from "native-base";

const Drawer = createDrawerNavigator();


export const Screens = () => {
  const authContext = useContext(AuthContext);
  const {loggedUser, logout} = authContext;

  useEffect(() => {
    console.log('logged', Boolean(loggedUser));
  }, []);

  const AppDrawerContent = (props : any) => (
      <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
        <DrawerItemList {...props}  style={{borderWidth:1}} />
        <DrawerItem label="Wyloguj" onPress={() => logout && logout()}/>
      </DrawerContentScrollView>
  )

  return (
    <>
      {loggedUser ? (
        <Drawer.Navigator drawerContent={props => <AppDrawerContent {...props} />}>
          <Drawer.Screen name="Twoje zadanie" component={HomeScreen} />
          <Drawer.Screen name="Profil" component={UserProfile} />
          <Drawer.Screen name="Ustawienia" component={Settings} />
        </Drawer.Navigator>
      ) : (
        <HomeStack />
      )}
    </>
  );
};
