import {View} from 'react-native';
import {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import {Text} from 'native-base';

const UserProfile = () => {
  const appContext = useContext(AppContext);

  const USERNAME = 'TestUser'

  useEffect(() => {
    console.log('contextObj', appContext);
  });

  return (
    <View>
      {/* USER PROFILE IMAGE */}
      <Text>Profil: {USERNAME}</Text>
      {/* PERSONALIZE BUTTON */}
      {/* USER LEVEL */}
      {/* archievements */}
    </View>
  );
};

export default UserProfile;
