import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native - Really really long text and im going to make it
        even longer to ssee what happens!
      </Text>
      {/* <Image source={require('./assets/icon.png')}></Image> */}
      <TouchableHighlight onPress={() => console.log('Image tapped')}>
        <Image
          //blurRadius={1}
          source={{
            width: 300,
            height: 200,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>
      <Button
        color="orange"
        title="Click me"
        // onPress={() => alert('button tapped')} //use if no alert mod needed
        onPress={() =>
          //`
          Alert.prompt('My Title', 'My Message', (text) => console.log(text))
        }
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
