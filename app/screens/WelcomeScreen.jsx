import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text> Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
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

  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
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

  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});
