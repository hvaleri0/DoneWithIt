import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListingScreen from "../screens/ListingScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAIL}
      component={ListingDetailScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
