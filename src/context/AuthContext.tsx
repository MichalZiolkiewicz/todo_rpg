import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {AuthContextI} from '../interfaces';

const defaultValue = {
  loggedUser: '',
};

const AuthContext = createContext<AuthContextI>(defaultValue);

const AuthProvider = (props: any) => {
  const [loggedUser, setLoggedUser] = useState('');

  const handleLoginUser = () => {
    console.log('Trying to login user');

    auth()
      .signInWithEmailAndPassword('test@test.pl', 'Aa1234567')
      .then(() => {
        console.log('User signed in!');
        setLogged();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setLoggedUser('');
      });
  };

  const setLogged = () => {
    console.log('Sprawdzam zalogowanie');
    let user = auth().currentUser?.uid;

    if (user) {
      setLoggedUser(user);
      console.log(user);
    } else {
      setLoggedUser('');
      console.log('usera brak');
    }
  };

  const storeObject = {
    loggedUser,
    logout,
    setLogged,
    handleLoginUser,
  };

  return (
    <AuthContext.Provider value={storeObject}>
      {props.children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
