import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Colors = {
  primary: '#028373',
  container: '#FFFFFF',
  secondary: '#FF7300',
  surface: '#ECEFF1',
  text_bright: '#FFFFFF',
  text_dark: '#000000',
  border: '#BDBDBD',
  drawer_container: '#FDEAEA',
  drawer_text: '#6B6B6C',
  tertiary: '#775654',
  tertiary_container: '#FFFFFF',
};

type FloatingButtonProps = {
  iconName?: string;
  onPress: any;
};

const FloatingButton = ({onPress, iconName = 'plus'}: FloatingButtonProps) => {
  return (
    <TouchableOpacity style={styles.container_floating} onPress={onPress}>
      <Text>+</Text>
    </TouchableOpacity>
  );
};

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(true);

  const handleSendContent = (content: string) => {
    console.log(content);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton
        iconName="plus"
        onPress={() => setInputModalVisible(true)}
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    margin: 8,
    height: '100%',
  },
  container_floating: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 50,
  },
});
