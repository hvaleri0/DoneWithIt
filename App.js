import React from 'react';
import { View, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';

export default function App() {
  return (
    <ViewImageScreen />
    // <View
    //   style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red Jacket for Sale"
    //     subtitle="$100"
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>
  );
}
