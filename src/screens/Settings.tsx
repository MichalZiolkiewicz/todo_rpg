import {View} from 'react-native';
import {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import {Text} from 'native-base';

const Settings = () => {
  const appContext = useContext(AppContext);

  useEffect(() => {
    console.log('contextObj', appContext);
  });

  return (
    <View>
      <Text>Username</Text>
      <Text>Level: </Text>
      <Text>Fullname</Text>
      <Text>Mail</Text>
      <Text>Dark mode</Text>
      <Text>Change password</Text>
      <Text>Reset account</Text>
    </View>
  );
};

export default Settings;
