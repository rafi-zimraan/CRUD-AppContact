import React from 'react';
import Splash from './screen/Splash';
import Home from './screen/Home';
import HomeTopTab from './screen/User';
import SettingTopTab from './screen/VoicEmail';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ComponentSplash from './components/ComponentSplash';
import CrudOffline from './screen/CrudOffline';

export type RootStackParams = {
  Splash: undefined;
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  // return <CrudOffline />;
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
