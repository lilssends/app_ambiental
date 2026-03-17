import { Link } from "expo-router";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Inicio() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>App Ambiental 🌱</Text>

      
      {/* CARD HOME */}
      <Link href="/home" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="home" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Home</Text>
          <Text style={styles.cardText}>
            Página principal do aplicativo
          </Text>
        </Pressable>
      </Link>

      {/* CARD PARCERIAS */}
      <Link href="/parcerias" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="groups" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Parcerias</Text>
          <Text style={styles.cardText}>
            Empresas e organizações parceiras
          </Text>
        </Pressable>
      </Link>

      {/* CARD RELATÓRIOS */}
      <Link href="/relatorio" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="assessment" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Relatórios</Text>
          <Text style={styles.cardText}>
            Visualizar relatórios ambientais
          </Text>
        </Pressable>
      </Link>

      {/* CARD SUGESTÕES */}
      <Link href="/sugestoes" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="lightbulb" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Sugestões</Text>
          <Text style={styles.cardText}>
            Envie ideias para melhorar o ambiente
          </Text>
        </Pressable>
      </Link>

      {/* CARD PERFIL */}
      <Link href="/perfil" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="person" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Perfil</Text>
          <Text style={styles.cardText}>
            Informações do usuário
          </Text>
        </Pressable>
      </Link>

      {/* CARD FORMULÁRIO */}
      <Link href="/formulario" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="description" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Formulário</Text>
          <Text style={styles.cardText}>
            Envio de dados ambientais
          </Text>
        </Pressable>
      </Link>

      {/* CARD CASOS */}
      <Link href="/cases" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="eco" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Casos de Sucesso</Text>
          <Text style={styles.cardText}>
            Projetos ambientais realizados
          </Text>
        </Pressable>
      </Link>

      {/* CARD SOBRE */}
      <Link href="/sobre" asChild>
        <Pressable style={styles.card}>
          <MaterialIcons name="info" size={50} color="#2E7D32" />
          <Text style={styles.cardTitle}>Sobre</Text>
          <Text style={styles.cardText}>
            Informações sobre o projeto
          </Text>
        </Pressable>
      </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#d8dad8ff",
    alignItems: "center",
    padding: 20,
    gap: 10,
    
  },

  titulo: {
    fontSize: 46,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1B5E20"
  },

  card: {
    width: "60%",
    backgroundColor: "#D1E8C1",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,

    elevation: 5
  },

  cardTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    
  },

  cardText: {
    fontSize: 18,
    textAlign: "auto",
    marginTop: 5,
    color: "#555",
  }

});