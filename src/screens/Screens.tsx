import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import UserProfile from './UserProfile';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

export const Screens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Twoje zadanie" component={HomeScreen} />
      <Drawer.Screen name="Profil" component={UserProfile} />
      <Drawer.Screen name="Ustawienia" component={Settings} />
    </Drawer.Navigator>
  );
};
