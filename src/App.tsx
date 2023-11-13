import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>App</Text>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
