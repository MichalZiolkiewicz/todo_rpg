import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';
import {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {AuthContext} from '../context/AuthContext';

const AddNewTask = () => {
  const appContext = useContext(AppContext);
  const {updateTaskList, getAll, initList, updateUserData, removeItem} =
    appContext;

  const authContext = useContext(AuthContext);
  const {logout} = authContext;

  return (
    <View style={styles.wrapper}>
      <Button onPress={() => updateTaskList()}>Dodaj nowe zadanie +</Button>
      <Button onPress={() => getAll()}>Wczytaj wszystkie</Button>
      <Button onPress={() => initList()}>Inicjalizuj usera</Button>
      <Button onPress={() => updateUserData()}>Aktualizuj</Button>
      <Button onPress={() => removeItem()}>Usuń element</Button>
      <Button onPress={() => logout()}>Wyloguj</Button>
    </View>
  );
};

export default AddNewTask;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
