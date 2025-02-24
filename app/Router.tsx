import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AlphabetNumbersScreen from './screens/AlphabetNumbersScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AlphabetNumbers"
          component={AlphabetNumbersScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
