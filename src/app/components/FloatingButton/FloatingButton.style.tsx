import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Color';

export default StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 50,
  },
});
