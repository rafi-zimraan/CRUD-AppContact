import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './screen/Splash';
import Home from './screen/Home';
import HomeTopTab from './components/HomeTopTab';
import SettingTopTab from './components/SettingTopTab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComponentSplash from './components/ComponentSplash';
import Postman from './screen/LoginPostman';
import LoginPostman from './screen/LoginPostman';
import HomeScreenPostman from './screen/HomeScreenPostman';

export type RootStackParams = {
  Splash: undefined;
  Home: undefined;
  Register: undefined;
  login: undefined;
  HomePostman: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'login'}>
        <Stack.Screen
          name="login"
          component={LoginPostman}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Postman}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePostman"
          component={HomeScreenPostman}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
