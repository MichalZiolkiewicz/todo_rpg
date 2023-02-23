import {View, StyleSheet} from 'react-native';
import {
  Box,
  Button,
  Input,
  Text,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const authContext = useContext(AuthContext);
  const {handleLoginUser, readUserKey} = authContext;

  useEffect(() => {
    if (readUserKey) {
      readUserKey();
    }
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text>Zaloguj się</Text>
      <View>
        <Box>
          <FormControl isInvalid={false} mb={5}>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input placeholder="Wprowadź email" />
            <FormControl.Label>Hasło</FormControl.Label>
            <Input placeholder="Wprowadź hasło" />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Błędny email lub hasło
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          backgroundColor="#4E5283"
          onPress={() =>
            handleLoginUser &&
            handleLoginUser({email: 'test@test.pl', password: 'Aa1234567'})
          }>
          Zaloguj się
        </Button>
        <Button
          variant="outline"
          style={{borderWidth: 2, borderColor: '#4E5283', borderRadius: 10}}
          onPress={() =>
            handleLoginUser &&
            handleLoginUser({email: 'a@a.pl', password: 'Aa1234567'})
          }>
          Zarejestruj się
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
    justifyContent: 'space-between',
    flex: 1,
  },
  buttonWrapper: {
    gap: 10,
    marginBottom: 15,
  },
});
