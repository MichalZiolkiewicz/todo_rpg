import {View} from 'react-native';
import {useContext} from 'react';
import {Button} from 'native-base';

import AddNewTask from '../components/AddNewTask';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  const authContext = useContext(AuthContext);
  const {handleLoginUser, loggedUser, logout} = authContext;

  return (
    <View>
      <AddNewTask />
      <Button onPress={() => handleLoginUser && handleLoginUser()}>
        Login test user
      </Button>
      <Button onPress={() => console.log(loggedUser)}>Show logged user</Button>
      <Button
        onPress={() => {
          if (logout) logout();
        }}>
        Logout
      </Button>
    </View>
  );
};

export default HomeScreen;
