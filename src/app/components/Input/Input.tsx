import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Input.style';

type InputProps = {
  placeholder: string;
  onChangeText: any;
  value: string;
  isSecure?: boolean;
  iconName?: string;
};

const Input = ({
  placeholder,
  onChangeText,
  value,
  isSecure = false,
  iconName = '',
}: InputProps) => {
  return (
    <View style={styles.container}>
      {iconName && <Icon style={styles.icon} name={iconName} size={24} />}
      <TextInput
        style={styles.text_input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Input;
