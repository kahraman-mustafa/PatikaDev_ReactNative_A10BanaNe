import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';
import Colors from '../../../styles/Color';
import styles from './FloatingButton.style';

type FloatingButtonProps = {
  iconName?: string;
  onPress: any;
};

const FloatingButton = ({onPress, iconName = 'plus'}: FloatingButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <Icon name={iconName} color={Colors.text_bright} size={30} /> */}
      <Text style={{color: Colors.text_bright, fontSize: 32}}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatingButton;
