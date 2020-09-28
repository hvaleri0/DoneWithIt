import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, ImageBackground } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const ListingScreen = ({ navigation }) => {
  // const { data: listings, error, loading, request: loadListings } = useApi( // if calling a single API use this
  //   listingApi.getListings // note that it's not listingApi.getListings() because we are wrapping the function inside the hook
  // );

  const getListingsApi = useApi(
    // if calling multiple API use this, do not destructure
    listingApi.getListings // note that it's not listingApi.getListings() because we are wrapping the function inside the hook
  );

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Could not retrieve the listings.</AppText>
          <Button title="Retry" onPress={getListingsApi.loadListings} />
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
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
