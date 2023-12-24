import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Messages from '../app/pages/Messages';
import Login from '../app/pages/auth/Login';
import Sign from '../app/pages/auth/Sign';
import Colors from '../styles/Color';
import {stackNavOpts} from './options';
import {AUTH_STACK, LOGIN_PAGE, MESSAGES_PAGE, SIGN_PAGE} from './routes';

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
  const [userSession, setUserSession] = React.useState<boolean>();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const renderHeaderIcon = ({iconName}: {iconName: string}) => {
    return (
      <Icon
        name={iconName}
        size={30}
        color={Colors.primary}
        onPress={() => auth().signOut()}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackNavOpts}>
        {!userSession ? (
          <Stack.Screen name={AUTH_STACK} component={AuthStack} />
        ) : (
          <Stack.Group
            screenOptions={{
              ...stackNavOpts,
              headerShown: true,
              headerLeft: () => null,
              headerRight: () => renderHeaderIcon({iconName: 'exit-to-app'}),
            }}>
            <Stack.Screen name={MESSAGES_PAGE} component={Messages} />
          </Stack.Group>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
