import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return false;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animation/loader.json")}
    />
  );
};

export default ActivityIndicator;
