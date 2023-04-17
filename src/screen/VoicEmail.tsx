import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import {RootStackParams} from '../App';
import {Black, White} from '../utils/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const VoicEmail = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Black} />
        <Text style={styles.Txt}> VoicEmail</Text>
        <Button title="Hai Email.id" />
      </View>
    </View>
  );
};

export default VoicEmail;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Content: {
    width: wp('38%'),
    height: hp('20%'),
  },
  Txt: {
    paddingVertical: 20,
    marginLeft: 50,
    color: White,
    fontWeight: '700',
  },
});
