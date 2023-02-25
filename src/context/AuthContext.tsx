import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContextI} from '../interfaces';

const defaultValue = {
  loggedUser: '',
  logout: function () {},
};

const AuthContext = createContext<AuthContextI>(defaultValue);

const AuthProvider = (props: any) => {
  const [loggedUser, setLoggedUser] = useState('');

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@isUserLogged', value);
    } catch (e) {}
  };

  const readUserKey = async () => {
    try {
      const value = await AsyncStorage.getItem('@isUserLogged');
      if (value !== null) {
        setLoggedUser(value);
      }
    } catch (e) {}
  };

  const handleLoginUser = (data: {email: string; password: string}) => {
    console.log('Trying to login user');
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
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
        storeData('');
      });
  };

  const setLogged = () => {
    console.log('Sprawdzam zalogowanie');
    let user = auth().currentUser?.uid;

    if (user) {
      setLoggedUser(user);
      storeData(user);
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
    readUserKey,
  };

  return (
    <AuthContext.Provider value={storeObject}>
      {props.children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
