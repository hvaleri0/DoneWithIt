import React from 'react';
import { View, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  return (
    <ListingScreen />
    // <AccountScreen />
    // <Screen>
    //   <ListItem
    //     title="My Title"
    //     //subtitle="My Subtitle"
    //     ImageComponent={
    //       <Icon
    //         name="email"
    //         size={50}
    //         backgroundColor="red"
    //         iconColor="white"
    //       />
    //     }
    //   />
    // </Screen>
    // <MessagesScreen />
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
