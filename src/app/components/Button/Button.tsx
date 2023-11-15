import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, {e_ButtonStyles, t_StylePref} from './Button.style';

type ButtonProps = {
  iconName?: string;
  title: string;
  onPress: any;
  stylePref?: t_StylePref;
  loading?: boolean;
};

const Button = ({
  iconName = '',
  title,
  onPress,
  stylePref = e_ButtonStyles.fill,
  loading = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles[stylePref].container,
        loading && styles[stylePref].container_disabled,
      ]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : iconName ? (
        <Icon style={styles[stylePref].icon} name={iconName} size={24} />
      ) : (
        <Text
          style={[
            styles[stylePref].title,
            loading && styles[stylePref].title_disabled,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
