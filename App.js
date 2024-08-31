import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('Expo React Native');

  const name = 'beomjune';
  const isFullname = true;

  const add = (a, b) => {
    return a + b;
  };

  return (
    <View style={styles.container}
    // 여는 태그 주석
    >
      {/* 일반 주석 */}
      <Text>My name is {name}</Text>
      <Text>1 + 2 = {add(1, 2)}</Text>
      <Text>{isFullname === true ? name + ' kim' : name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
