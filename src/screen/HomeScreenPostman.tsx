import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export default function HomeScreenPostman() {
  return (
    <View style={styles.Container}>
      <Text>HomeScreenPostman</Text>
      <Button title={'Haii'} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
