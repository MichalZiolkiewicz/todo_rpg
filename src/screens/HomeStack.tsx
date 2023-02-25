import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Auth/Login';
import Register from './Auth/Register';

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="register"
        component={Register}
      />
    </Stack.Navigator>
  );
};
