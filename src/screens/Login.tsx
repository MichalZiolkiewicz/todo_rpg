import {View} from 'react-native';
import {Button, Text} from 'native-base';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const {handleLoginUser} = authContext;

  return (
    <View>
      <Text>Zaloguj się</Text>
      <Button onPress={() => handleLoginUser && handleLoginUser()}>
        Zaloguj
      </Button>
    </View>
  );
};

export default Login;
