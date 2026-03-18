import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.title}>Mais do que consciência.</Text>
        <Text style={styles.highlight}>É ação.</Text>
        <Text style={styles.subtitle}>
          O futuro não espera. E você também não deveria.
        </Text>
      </View>

      {/* CARDS */}
      <View style={styles.cardsContainer}>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Educar</Text>
          <Text style={styles.cardText}>
            Informação que transforma mentalidade e cria agentes de mudança.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Fiscalizar</Text>
          <Text style={styles.cardText}>
            Transparência e responsabilidade em cada ação executada.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Parcerias</Text>
          <Text style={styles.cardText}>
            Conectando pessoas e empresas que querem gerar impacto real.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cases de Sucesso</Text>
          <Text style={styles.cardText}>
            Resultados reais que mostram que a mudança é possível.
          </Text>
        </View>

      </View>

      {/* SEÇÃO FINAL */}
      <View style={styles.cta}>
        <Text style={styles.ctaText}>
          O mundo já tem espectadores demais.
        </Text>
        <Text style={styles.ctaHighlight}>
          Seja protagonista.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    
  },

  hero: {
    padding: 24,
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    color: "#fff",
  },

  highlight: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#22c55e",
    marginVertical: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#94a3b8",
  },

  cardsContainer: {
    padding: 16,
    gap: 16,
  },

  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 16,
  },

  cardTitle: {
    fontSize: 20,
    color: "#22c55e",
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardText: {
    color: "#cbd5f5",
    fontSize: 14,
  },

  cta: {
    marginTop: 40,
    padding: 24,
    alignItems: "center",
  },

  ctaText: {
    color: "#94a3b8",
    fontSize: 16,
  },

  ctaHighlight: {
    color: "#22c55e",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },
});