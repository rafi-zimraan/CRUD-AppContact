import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../App';
import {Black} from '../utils/Colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

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
        backgroundColor={Black}
        translucent
      />
      <View style={styles.Content}>
        <Image
          source={require('../assets/image/iconsContact.png')}
          style={styles.Image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    backgroundColor: Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    resizeMode: 'contain',
    height: responsiveHeight(21),
    width: responsiveWidth(21),
  },
});
