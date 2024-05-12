/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { TabNavigation } from './navigation/TabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from './presentation/screens/intro-screen/IntroScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App;
