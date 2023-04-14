import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import {RootStackParams} from '../App';
import {Black, White} from '../utils/Colors';

const VoicEmail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.Container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Black} />
      <Text style={styles.Txt}> VoicEmail</Text>
      <Button title="Hai Email.id" />
    </View>
  );
};

export default VoicEmail;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Black,
  },
  Txt: {
    color: White,
  },
});
