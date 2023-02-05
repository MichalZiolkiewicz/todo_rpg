import {StyleSheet, View} from 'react-native';
import {Button} from 'native-base';

const AddNewTask = () => {
  return (
    <View style={styles.wrapper}>
      <Button>Dodaj nowe zadanie +</Button>
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
