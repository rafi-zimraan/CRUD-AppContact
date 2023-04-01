import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {RootStackParams} from '../App';

const SettingTopTab = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.Container}>
      <Text>SettingTopTab</Text>
      <Button title="Back ro splash" />
    </View>
  );
};

export default SettingTopTab;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
