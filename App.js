import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1d2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const img = document.createElement("img");
img.src = "/Users/rajyasrinidhimedikonda/Desktop/my stuff/pHinder/images/Background_Element.png";
document.body.appendChild(img);


