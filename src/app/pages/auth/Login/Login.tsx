import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as Yup from 'yup';
import {MESSAGES_PAGE, SIGN_PAGE} from '../../../../router/routes';
import {showFlashMessage} from '../../../../utils/flashMessageHelper';
import {authErrorParser} from '../../../../utils/parsers/authErrorParser';
import Button from '../../../components/Button';
import {e_ButtonStyles} from '../../../components/Button/Button.style';
import Input from '../../../components/Input';
import styles from './Login.style';

enum e_FormInputs {
  email = 'email',
  password = 'password',
}

interface FormValues {
  [e_FormInputs.email]: string;
  [e_FormInputs.password]: string;
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
});

const initialFormValues: FormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setloading] = useState(false);

  const handleLogin = async (formValues: FormValues) => {
    try {
      setloading(true);
      const response = await auth().signInWithEmailAndPassword(
        formValues[e_FormInputs.email],
        formValues[e_FormInputs.password],
      );
      console.log(JSON.stringify(response, null, 2));
      /* showFlashMessage({
        type: 'success',
        message: response.user.uid,
        description: JSON.stringify(response.user.providerData[0], null, 2),
        duration: 1000,
      }); */
      setloading(false);
      navigation.navigate(MESSAGES_PAGE);
    } catch (error) {
      console.log(error);
      showFlashMessage({message: authErrorParser(error), type: 'danger'});
      setloading(false);
    }
  };

  const handleSignup = () => {
    console.log('Signup tapped');
    navigation.navigate(SIGN_PAGE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik
        validationSchema={LoginSchema}
        initialValues={initialFormValues}
        onSubmit={values => handleLogin(values)}>
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <>
            <Input
              value={values.email}
              placeholder="Enter e-mail..."
              onChangeText={handleChange(e_FormInputs.email)}
            />
            {errors[e_FormInputs.email] && touched[e_FormInputs.email] ? (
              <Text style={styles.error}>{errors[e_FormInputs.email]}</Text>
            ) : null}
            <Input
              isSecure={true}
              value={values.password}
              placeholder="Enter password..."
              onChangeText={handleChange(e_FormInputs.password)}
            />
            {errors[e_FormInputs.password] && touched[e_FormInputs.password] ? (
              <Text style={styles.error}>{errors[e_FormInputs.password]}</Text>
            ) : null}
            <Button title="Login" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button
        title="Signup"
        onPress={handleSignup}
        stylePref={e_ButtonStyles.outline}
      />
    </SafeAreaView>
  );
};

export default Login;
