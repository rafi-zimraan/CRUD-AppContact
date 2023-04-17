import React from 'react';
import Splash from './screen/Splash';
import Home from './screen/Home';
import HomeTopTab from './screen/User';
import SettingTopTab from './screen/VoicEmail';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CrudOffline from './screen/CrudOffline';
import Contact from './screen/Contact';

export type RootStackParams = {
  Splash: undefined;
  Home: undefined;
  Keypad: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  // return <Splash />;
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
        <Stack.Screen
          name="Keypad"
          component={Contact}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
