import {StackNavigationOptions} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import Colors from '../styles/Color';

export const stackNavOpts: StackNavigationOptions = {
  headerShown: false,
  headerTitleAlign: 'center',
  headerBackgroundContainerStyle: {backgroundColor: Colors.container},
  headerTitleStyle: {
    color: Colors.primary,
    width: Dimensions.get('window').width * 0.6,
  },
};
