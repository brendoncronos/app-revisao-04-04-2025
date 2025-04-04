import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState<any>(null);

  const addCounter = () =>  {
    setCounter(counter + 1);
    console.log(`contador: ${counter}`);
  };

  async function buscarCep() {
    const cepFormatado = cep.replace(/\D/g, '');

    const url = `https://viacep.com.br/ws/${cepFormatado}/json/`

    const responseEndereco = await fetch(url);

    if (!responseEndereco.ok)
      throw new Error('Erro ao buscar o CEP');

    console.log(responseEndereco);

    const data = await responseEndereco.json();

    setEndereco(data);
  }

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
        <TextInput onChangeText={setCep} value={cep} style={{borderColor: "#ccc", borderWidth: 1}}></TextInput>

        <Button title="Enviar CEP" onPress={buscarCep}></Button>

        {endereco && (
          <View style={styles.card}>
            <Text>CEP: {cep}</Text>
            <Text>Logradouro: {endereco.logradouro ?? "Não existe"}</Text>
            <Text>Localidade: {endereco.localidade ?? "Não existe"}</Text>
            <Text>Região: {endereco.regiao ?? "Não existe"}</Text>
            <Text>UF: {endereco.uf ?? "Não existe"}</Text>
          </View>
        )}
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
