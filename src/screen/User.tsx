import React from 'react';
import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import {Black, White} from '../utils/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const User = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Black} />
        <Text style={styles.Txt}>USER</Text>
        <Button title="Just play on" />
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Black,
  },
  Content: {
    width: wp('38%'),
    height: hp('20%'),
  },
  Txt: {
    color: White,
    paddingVertical: 20,
    marginLeft: 68,
    fontWeight: '700',
  },
});
