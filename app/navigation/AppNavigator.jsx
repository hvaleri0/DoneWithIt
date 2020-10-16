import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import navigation from "../navigation/rootNavigation";
import AccountNavigator from "../navigation/AccountNavigator";
import FeedNavigator from "../navigation/FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import routes from "../navigation/routes";
import NewListingButton from "../navigation/NewListingButton";
import useNotification from "../hooks/useNotification";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotification((notification) => navigation.navigate("Account")); // baseline, can use notification to extract data
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
