import React, {createContext, useState} from 'react';
import {AppContextI} from '../interfaces';

const defaultValue = {
  test: '',
};

const AppContext = createContext<AppContextI>(defaultValue);

const AppProvider = (props: any) => {
  const [test, setTest] = useState('');

  const storeObject = {
    test,
  };

  return (
    <AppContext.Provider value={storeObject}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppProvider, AppContext};
