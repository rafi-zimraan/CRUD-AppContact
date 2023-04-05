import React from 'react';
import Splash from './screen/Splash';
import Home from './screen/Home';
import HomeTopTab from './components/HomeTopTab';
import SettingTopTab from './components/SettingTopTab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComponentSplash from './components/ComponentSplash';

export type RootStackParams = {
  Splash: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
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
