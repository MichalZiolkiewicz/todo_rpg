import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';
import firestore from '@react-native-firebase/firestore';


const AddNewTask = () => {

  const getCollection = async () => {

    const usersCollection = firestore()
        .collection('UserTasks')
        .get()
        .then(collectionSnapshot => {
          console.log('Total users: ', collectionSnapshot.size);
          console.log('Array', collectionSnapshot)
          collectionSnapshot
              .forEach(documentSnapshot => {
                console.log('User ID: ', documentSnapshot.id,
                    documentSnapshot.data());
              });
        });

    console.log('Loading data from firestore', usersCollection)
  }

  return (
    <View style={styles.wrapper}>
      <Button onPress={() => getCollection()}>Dodaj nowe zadanie +</Button>
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
