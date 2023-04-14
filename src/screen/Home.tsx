import {StyleSheet} from 'react-native';
import React from 'react';
import {White} from '../utils/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contact from './Contact';
import User from './User';
import VoicEmail from './VoicEmail';
import Favorites from './Favorites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Keypad from './Keypad';

function UserScreen() {
  return <User />;
}
function VoicEmailScreen() {
  return <VoicEmail />;
}
function FavoritesScreen() {
  return <Favorites />;
}
function KeypadScreen() {
  return <Keypad />;
}

function ContactScreen() {
  return <Contact />;
}

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Contact"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#0A84FF',
          tabBarStyle: {backgroundColor: '#161616', height: 70},

          tabBarIcon: ({focused, size, color}) => {
            let iconImage: any;
            if (route.name === 'User') {
              iconImage = focused ? 'home' : 'home';
              size = focused ? size + 12 : size + 5;
              color = focused ? '#6C70EB' : 'gray';
            } else if (route.name === 'VoicEmail') {
              iconImage = focused ? 'voicemail' : 'voicemail';
              size = focused ? size + 12 : size + 5;
              color = focused ? '#6C70EB' : 'gray';
            } else if (route.name === 'Contact') {
              iconImage = focused
                ? 'account-box-outline'
                : 'account-box-outline';
              size = focused ? size + 12 : size + 5;
              color = focused ? '#6C70EB' : 'gray';
            } else if (route.name === 'Favorites') {
              iconImage = focused ? 'star' : 'star';
              size = focused ? size + 12 : size + 5;
              color = focused ? '#6C70EB' : 'gray';
            } else if (route.name === 'Keypad') {
              iconImage = focused ? 'dialpad' : 'dialpad';
              size = focused ? size + 12 : size + 5;
              color = focused ? '#6C70EB' : 'gray';
            }
            return <Icon name={iconImage} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="User"
          component={User}
          options={{headerShown: false, tabBarLabel: 'User'}}
        />
        <Tab.Screen
          name="VoicEmail"
          component={VoicEmail}
          options={{headerShown: false, tabBarLabel: 'VoicEmail'}}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{headerShown: false, tabBarLabel: 'Contact'}}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{headerShown: false, tabBarLabel: 'Favorites'}}
        />
        <Tab.Screen
          name="Keypad"
          component={Keypad}
          options={{headerShown: false, tabBarLabel: 'Keypad'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: White,
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
