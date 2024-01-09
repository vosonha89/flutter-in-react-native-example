/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  useColorScheme,
  View,
  NativeModules,
} from 'react-native';

function App(): React.JSX.Element {
  const {FlutterInjectModule} = NativeModules;
  const isDarkMode = useColorScheme() === 'dark';
  const Colors = {
    black: '#000',
    white: '#fff',
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  const enterFlutterModule = () => {
    FlutterInjectModule.openFlutterModule();
  };

  const createCalendarEvent = () => {
    FlutterInjectModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            onPress={enterFlutterModule}
            title="Open Flutter Module"
            color="#2261a1"
          />
          <Button
            onPress={createCalendarEvent}
            title="Call Calendar Event"
            color="#303030"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
