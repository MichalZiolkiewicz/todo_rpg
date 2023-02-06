import {View} from 'react-native';
import {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import {Text} from 'native-base';

const Login = () => {
  const appContext = useContext(AppContext);

  useEffect(() => {
    console.log('contextObj', appContext);
  });

  return (
    <View>
      <Text>Zaloguj się</Text>
      {/* USERNAME */}
      <Input/>
      {/* PASSWORD */}
      <Input/>
    </View>
  );
};

export default Login;
