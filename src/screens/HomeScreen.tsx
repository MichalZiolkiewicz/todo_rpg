import {View} from 'react-native';
import {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import {Text} from 'native-base';
import AddNewTask from '../components/AddNewTask';

const HomeScreen = () => {
  const appContext = useContext(AppContext);

  useEffect(() => {
    console.log('contextObj', appContext);
  });

  return (
    <View>
      <AddNewTask />
    </View>
  );
};

export default HomeScreen;
