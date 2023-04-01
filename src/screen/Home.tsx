import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Hitam, Putih} from '../utils/Colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeTopTab from '../components/HomeTopTab';
import SettingTopTab from '../components/SettingTopTab';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function HometopTab() {
  return <HomeTopTab />;
}

function SettingtopTab() {
  return <SettingTopTab />;
}

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HometopTab} />
        <Tab.Screen name="Setting" component={SettingtopTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Putih,
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    marginHorizontal: 80,
    top: 8,
    borderRadius: 200,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
