import 'react-native-gesture-handler';

import React from 'react';
import {extendTheme, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import {Screens} from './src/screens/Screens';
import {AppProvider} from './src/context/AppContext';
import {AuthProvider} from './src/context/AuthContext';

function App(): JSX.Element {
  const theme = extendTheme({
    colors: {
      ultraViolet: '#4E5283',
      fulvous: '#E98A15',
    },
    components: {
      Button: {
        baseStyle: {
          color: 'pink',
        },
      },
    },
  });

  return (
    <AuthProvider>
      <AppProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Screens />
          </NavigationContainer>
        </NativeBaseProvider>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
