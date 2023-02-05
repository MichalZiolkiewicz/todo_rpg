import React, {createContext, useState} from 'react';

interface ContextInterface {
  test: number;
  handleTest: () => void;
}

const AppContext = createContext<ContextInterface | null>(null);

const AppProvider = (props: any) => {
  const [test, setTest] = useState(0);

  const handleTest = () => setTest(prevState => prevState + 1);

  const storeObject = {
    test,
    handleTest,
  };

  return (
    <AppContext.Provider value={storeObject}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppProvider, AppContext};
