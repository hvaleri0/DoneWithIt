import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagline}> Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonContainer: {
    padding: 20,
    width: '100%',
  },

  logo: {
    height: 100,
    width: 100,
  },

  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 70,
  },

  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
