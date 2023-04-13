import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../App';
import {Hitam, Putih} from '../utils/Colors';

export default function ComponentSplash() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);
  return (
    <View style={styles.Conatiner}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Image
        source={require('../assets/image/iconsContact.png')}
        style={styles.Image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    backgroundColor: Hitam,
  },
  Image: {
    position: 'absolute',
    marginVertical: 325,
    marginHorizontal: 150,
    height: 130,
    width: 130,
  },
});
