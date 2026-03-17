import {Stack} from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, headerTitleAlign: "center" }} >
    <Stack.Screen name="index" options={{ title: 'Página Inicial' }} />
    <Stack.Screen name="formulario" options={{ title: 'Formulário' }} />
    <Stack.Screen name="usuarioAnonimo" options={{ title: 'Anônimo' }} />
    <Stack.Screen name="perfil" options={{ title: 'Perfil' }} />
    <Stack.Screen name="relatorio" options={{ title: 'Relatório' }} />
    <Stack.Screen name="sugestoes" options={{ title: 'Sugestões' }} />
    <Stack.Screen name="parcerias" options={{ title: 'Parcerias' }} />
    <Stack.Screen name="sobre" options={{ title: 'Nossa História' }} />
    <Stack.Screen name="cases" options={{ title: 'Casos de Sucesso' }} />

    </Stack>
)
}