import {View} from 'react-native';
import {Button, Text} from 'native-base';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const {handleLoginUser, readUserKey} = authContext;


  useEffect(() => {
      if (readUserKey) {
          readUserKey()
      }
  }, [])

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
