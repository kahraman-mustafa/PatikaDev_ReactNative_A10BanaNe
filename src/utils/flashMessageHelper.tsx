import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {
  MessageOptions,
  Position,
  showMessage,
} from 'react-native-flash-message';

interface DefaultOptions {
  duration?: number;
  floating?: boolean;
  position?: Position;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const DEFAULT_OPTIONS: DefaultOptions = {
  duration: 3000,
  floating: false,
  position: 'top',
  style: {padding: 40},
  textStyle: {color: '#DDDDDD', fontStyle: 'italic'},
  titleStyle: {color: '#FFFFFF', fontWeight: 'bold'},
};

export const showFlashMessage = (customOptions: MessageOptions) => {
  const options = {...DEFAULT_OPTIONS, ...customOptions};
  showMessage(options);
};
