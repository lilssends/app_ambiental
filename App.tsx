import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lilssen Kleber Fuzaro! 
        Curso de Desenvolvimento de Sistemas
        3º Módulo!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffefeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:40,
    color: '#9b1a1aff',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
