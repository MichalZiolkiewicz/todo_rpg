import 'react-native-gesture-handler';

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import {Screens} from './src/screens/Screens';
import {AppProvider} from './src/context/AppContext';

function App(): JSX.Element {
  return (
    <AppProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </NativeBaseProvider>
    </AppProvider>
  );
}

export default App;
