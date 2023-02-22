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
      <Button
        onPress={() =>
          handleLoginUser &&
          handleLoginUser({email: 'test@test.pl', password: 'Aa1234567'})
        }>
        test@test.pl
      </Button>
      <Button
        onPress={() =>
          handleLoginUser &&
          handleLoginUser({email: 'a@a.pl', password: 'Aa1234567'})
        }>
        a@a.pl
      </Button>
    </View>
  );
};

export default Login;
