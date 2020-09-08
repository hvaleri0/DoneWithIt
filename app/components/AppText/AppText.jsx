import React from "react";
import { Text } from "react-native";

// since we are namiing defaultStyles then we dont need local styles in in this case.

import defaultStyles from "../../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
