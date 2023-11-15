import {Formik} from 'formik';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as Yup from 'yup';
import Button from '../../../components/Button';
import {e_ButtonStyles} from '../../../components/Button/Button.style';
import Input from '../../../components/Input';
import styles from './Sign.style';

enum e_FormInputs {
  email = 'email',
  password = 'password',
  repeatedPassword = 'repeatedPassword',
}

interface FormValues {
  [e_FormInputs.email]: string;
  [e_FormInputs.password]: string;
  [e_FormInputs.repeatedPassword]: string;
}

const LoginSchema = Yup.object().shape({
  [e_FormInputs.email]: Yup.string()
    .email()
    .min(2, 'Email is too short!')
    .max(50, 'Email is too long!')
    .required('Email is required'),
  [e_FormInputs.password]: Yup.string()
    .min(6, 'Password is too short!')
    .max(10, 'Password is too long!')
    .required('Password is required'),
  [e_FormInputs.repeatedPassword]: Yup.string()
    .min(6, 'Password is too short!')
    .max(10, 'Password is too long!')
    .required('Password is required'),
});

const initialFormValues: FormValues = {
  email: '',
  password: '',
  repeatedPassword: '',
};

const Sign = ({navigation}) => {
  const handleSignup = (formValues: FormValues) => {
    console.log(formValues);
  };

  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik
        validationSchema={LoginSchema}
        initialValues={initialFormValues}
        onSubmit={handleSignup}>
        {({values, handleSubmit, handleChange}) => (
          <>
            <Input
              value={values.email}
              placeholder="Enter e-mail..."
              onChangeText={handleChange(e_FormInputs.email)}
            />
            <Input
              isSecure={true}
              value={values.password}
              placeholder="Enter password..."
              onChangeText={handleChange(e_FormInputs.password)}
            />
            <Input
              isSecure={true}
              value={values.repeatedPassword}
              placeholder="Enter password again..."
              onChangeText={handleChange(e_FormInputs.repeatedPassword)}
            />
            <Button title="Signup" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        title="Go Back"
        onPress={handleLogin}
        stylePref={e_ButtonStyles.outline}
      />
    </SafeAreaView>
  );
};

export default Sign;
