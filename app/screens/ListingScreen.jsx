import React from "react";
import { StyleSheet, FlatList, ImageBackground } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus lacinia metus at viverra. Vivamus sit amet quam dolor. Nunc accumsan augue vitae lectus bibendum, vel bibendum nunc suscipit. Nunc lacinia turpis ut varius condimentum. Curabitur viverra sodales erat eget egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer gravida vulputate nibh, eget mollis quam. Cras pharetra eu ligula sit amet dignissim. Morbi sodales, augue et tincidunt tincidunt, turpis elit tempor erat, eget scelerisque eros dolor ac est.",
    price: 79287907908789,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = ({}) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
