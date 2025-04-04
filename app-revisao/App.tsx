import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = () =>  {
    setCounter(counter + 1);
    console.log(`contador: ${counter}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Contando {counter}</Text>
        <StatusBar style="auto" />
        <Button title="Contar" onPress={addCounter}></Button>
        <Image
          source={{uri: 'https://placehold.co/150'}}
          style={{width: 150, height: 150}}
        />
        {/* <TextInput onChangeText={}></TextInput> */}
      </View>
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
  card: {
    gap: 16,
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  }
});
