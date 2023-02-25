import {View, StyleSheet} from 'react-native';
import {Box, Button, Input, FormControl, WarningOutlineIcon} from 'native-base';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useFormik} from 'formik';

const Login = ({navigation}: {navigation: any}) => {
  const authContext = useContext(AuthContext);
  const {handleLoginUser, readUserKey} = authContext;

  const formik = useFormik({
    initialValues: {
      email: 'a@a.pl',
      password: 'Aa1234567',
    },
    onSubmit: values => {
      const {password, email} = values;

      handleLoginUser && handleLoginUser({email: email, password: password});
    },
  });

  useEffect(() => {
    if (readUserKey) {
      readUserKey();
    }
  }, []);

  return (
    <View style={styles.wrapper}>
      <View>
        <Box>
          <FormControl isInvalid={false} mb={5}>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              id="email"
              placeholder="Wprowadź email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormControl.Label>Hasło</FormControl.Label>
            <Input
              id="password"
              placeholder="Wprowadź hasło"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Błędny email lub hasło
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      </View>
      <View style={styles.buttonWrapper}>
        <Button backgroundColor="#4E5283" onPress={() => formik.handleSubmit()}>
          Zaloguj się
        </Button>
        <Button
          variant="outline"
          colorScheme="ultraViolet"
          style={{borderWidth: 2, borderColor: '#4E5283', borderRadius: 10}}
          onPress={() => navigation.navigate('register')}>
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
