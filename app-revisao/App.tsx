import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let counter = 0;

  const addCounter = () => counter++;

  return (
    <View style={styles.container}>
      <Text>Contando {counter}</Text>
      <StatusBar style="auto" />
      <Button title="Contar" onPress={addCounter}></Button>
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
