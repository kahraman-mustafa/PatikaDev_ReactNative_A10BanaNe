import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../../styles/Color';

export default StyleSheet.create({
  header: {
    fontSize: Platform.OS === 'android' ? 120 : 160,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 4,
  },
  error: {
    paddingLeft: 4,
    fontSize: 12,
    color: '#ba1a1a',
    marginHorizontal: 10,
  },
});
