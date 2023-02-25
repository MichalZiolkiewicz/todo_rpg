import React, {createContext, useContext} from 'react';
import {AppContextI} from '../interfaces';
import {AuthContext} from './AuthContext';
import firestore, {firebase} from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const defaultValue = {
  addNew: function () {},
  getAll: function () {},
  initList: function () {},
  updateUserData: function () {},
  updateTaskList: function () {},
  removeItem: function () {},
};

const AppContext = createContext<AppContextI>(defaultValue);

const AppProvider = (props: any) => {
  const authContext = useContext(AuthContext);
  const {loggedUser} = authContext;

  const navigation = useNavigation();

  const collection = firestore().collection('Users');

  // TODO FIX months 2 => 02
  const initList = async () => {
    const date = new Date();
    const today = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    await collection
      .doc(loggedUser)
      .set({userId: loggedUser, userList: [], createdAt: today})
      .then(() => {
        console.log('Success');
        // @ts-ignore
        navigation.navigate('Profil');
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getAll = async () => {
    await collection.doc(loggedUser).onSnapshot(documentSnapshot => {
      const userData = documentSnapshot.data();
      if (userData) {
        console.log('User found: ', documentSnapshot.data());
      } else {
        initList();
      }
    });
  };

  const updateUserData = async () => {
    await collection
      .doc(loggedUser)
      .update({
        userName: 'Marcelina',
        userList: [
          {title: ' Zadanie 2', isDone: false},
          {title: ' Zadanie 1', isDone: false},
        ],
      })
      .then(() => {
        console.log('Updated successfull');
      });
  };

  const updateTaskList = async () => {
    const arrayUnion = firebase.firestore.FieldValue.arrayUnion({
      title: 'union',
      isDone: true,
    });

    await collection
      .doc(loggedUser)
      .update({
        userList: arrayUnion,
      })
      .then(() => {
        console.log('List updated');
      });
  };

  const removeItem = async () => {
    const arrayRemove = firebase.firestore.FieldValue.arrayRemove({
      title: 'union',
      isDone: true,
    });

    await collection
      .doc(loggedUser)
      .update({
        userList: arrayRemove,
      })
      .then(() => {
        console.log('Item removed');
      });
  };

  const addNew = () => {
    console.log('add new');
  };

  const storeObject = {
    addNew,
    getAll,
    initList,
    updateUserData,
    updateTaskList,
    removeItem,
  };

  return (
    <AppContext.Provider value={storeObject}>
      {props.children}
    </AppContext.Provider>
  );
};

export {AppProvider, AppContext};
