import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as Yup from 'yup';
import {LOGIN_PAGE} from '../../../../router/routes';
import {showFlashMessage} from '../../../../utils/flashMessageHelper';
import {authErrorParser} from '../../../../utils/parsers/authErrorParser';
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
    .min(1, 'Password is too short!')
    .max(10, 'Password is too long!')
    .required('Password is required'),
  [e_FormInputs.repeatedPassword]: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref(e_FormInputs.password)], 'Your passwords do not match.'),
});

const initialFormValues: FormValues = {
  email: '',
  password: '',
  repeatedPassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setloading] = useState(false);

  const handleSignup = async (formValues: FormValues) => {
    if (
      formValues[e_FormInputs.password] !==
      formValues[e_FormInputs.repeatedPassword]
    ) {
      showFlashMessage({
        type: 'danger',
        message: 'Şifreler uyuşmuyor',
        description: 'Şifre alanlarına aynı şifreyi giriniz.',
      });
      setloading(false);
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues[e_FormInputs.email],
        formValues[e_FormInputs.password],
      );
      showFlashMessage({
        type: 'success',
        message: 'Kullanıcı kaydı oluşturuldu',
      });
      setloading(false);
      navigation.navigate(LOGIN_PAGE);
    } catch (error) {
      console.log(error);
      showFlashMessage({message: authErrorParser(error), type: 'danger'});
      setloading(false);
    }
  };

  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>bana ne?</Text>
          <Formik
            validationSchema={LoginSchema}
            initialValues={initialFormValues}
            onSubmit={values => handleSignup(values)}>
            {({values, handleSubmit, handleChange, errors, touched}) => (
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
                {errors[e_FormInputs.password] &&
                  touched[e_FormInputs.password] ? (
                  <Text style={styles.error}>
                    {errors[e_FormInputs.password]}
                  </Text>
                ) : null}
                <Input
                  isSecure={true}
                  value={values.repeatedPassword}
                  placeholder="Enter password again..."
                  onChangeText={handleChange(e_FormInputs.repeatedPassword)}
                />
                {errors[e_FormInputs.repeatedPassword] &&
                  touched[e_FormInputs.repeatedPassword] ? (
                  <Text style={styles.error}>
                    {errors[e_FormInputs.repeatedPassword]}
                  </Text>
                ) : null}
                <Button
                  title="Signup"
                  loading={loading}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          <Button
            title="Go Back"
            onPress={handleLogin}
            stylePref={e_ButtonStyles.outline}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Sign;
