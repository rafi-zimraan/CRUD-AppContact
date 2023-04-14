import React from 'react';
import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import {Black, White} from '../utils/Colors';

const Favorites = () => {
  return (
    <View style={styles.Container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Black} />
      <Text style={styles.Txt}>Favorites</Text>
      <Button title="Love" />
    </View>
  );
};

export default Favorites;

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
