import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import colors from '../config/colors.js';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'row',
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,
  },
});
