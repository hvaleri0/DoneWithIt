import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";
// import Button from "./app/components/Button";
// import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  // const requestPermission = async () => {
  //   // const { granted } = await Permissions.askAsync(
  //   //   Permissions.CAMERA_ROLL,
  //   //   Permissions.LOCATION
  //   // );
  //   const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  //   if (!granted)
  //     alert("You need to enable persmission to access Cameral Roll");
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // const selectImage = async () => {
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.cancelled) setImageUri(result.uri);
  //   } catch (error) {
  //     console.log("Error reading an image", error);
  //   }
  // };

  return (
    <ListingEditScreen />
    // <Screen>
    //   {/* <Button title="Select Image" onPress={selectImage} />
    //   <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
