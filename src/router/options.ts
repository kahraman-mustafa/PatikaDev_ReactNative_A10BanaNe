import {StackNavigationOptions} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import Colors from '../styles/Color';

export const stackNavOpts: StackNavigationOptions = {
  headerShown: false,
  headerBackgroundContainerStyle: {backgroundColor: Colors.container},
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: Colors.primary,
    // backgroundColor: Colors.secondary,
    width: Dimensions.get('window').width * 0.5,
    flex: 1,
    marginVertical: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
};
