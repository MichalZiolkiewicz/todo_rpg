import {View} from 'react-native';
import {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import {Text} from 'native-base';

const UserProfile = () => {
  const appContext = useContext(AppContext);

  useEffect(() => {
    console.log('contextObj', appContext);
  });

  return (
    <View>
      <Text>Profil</Text>
    </View>
  );
};

export default UserProfile;
