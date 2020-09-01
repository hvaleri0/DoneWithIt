import React, { useState } from "react";
import { View, ImageBackground, TextInput, Text, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./app/components/Screen";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/lists/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  // const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[2]);

  return (
    <ListingEditScreen />
    //<LoginScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     icon="apps"
    //     items={categories}
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    //   <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    // </Screen>
    // <Screen>
    //   <Text>{firstName}</Text>
    //   <TextInput
    //     maxLength={30}
    //     keyboardType={'numeric'}
    //     onChangeText={(text) => setFirstName(text)}
    //     placeholder="First Name"
    //     style={{ borderBottomColor: '#ccc', borderBottomWidth: 1 }}
    //   />
    // </Screen>
    // <ListingScreen />
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
