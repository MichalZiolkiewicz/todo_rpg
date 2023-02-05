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
      <Text>Ustawienia</Text>
    </View>
  );
};

export default Settings;
