import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import UserProfile from './UserProfile';
import Settings from './Settings';

import {useContext, useEffect} from 'react';
import {HomeStack} from './HomeStack';
import {AuthContext} from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export const Screens = () => {
  const authContext = useContext(AuthContext);
  const {loggedUser} = authContext;

  useEffect(() => {
    console.log('logged', Boolean(loggedUser));
  }, []);

  return (
    <>
      {loggedUser ? (
        <Drawer.Navigator>
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
