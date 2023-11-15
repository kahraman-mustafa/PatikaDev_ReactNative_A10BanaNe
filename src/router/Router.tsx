import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../app/pages/auth/Login';
import Sign from '../app/pages/auth/Sign';
import {stackNavOpts} from './options';
import {AUTH_STACK, LOGIN_PAGE, SIGN_PAGE} from './routes';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={stackNavOpts}>
      <Stack.Screen name={LOGIN_PAGE} component={Login} />
      <Stack.Screen name={SIGN_PAGE} component={Sign} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackNavOpts}>
        <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        {/* <Stack.Screen name="SignPage" component={Sign} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
