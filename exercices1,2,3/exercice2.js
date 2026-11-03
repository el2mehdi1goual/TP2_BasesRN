
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

function CarteInfo({ titre, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{titre}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default function Exercice2() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Mes compétences</Text>

      <CarteInfo
        titre="Java"
        description="Programmation orientée objet."
      />

      <CarteInfo
        titre="SQL"
        description="Gestion des bases de données."
      />

      <CarteInfo
        titre="Data Analyst"
        description="Analyse des dnnees."
      />

      <CarteInfo
        titre="Python"
        description="Programmation et traitement des données."
      />

      <CarteInfo
        titre="Git"
        description="Gestion des versions du code."
      />

    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F7FA',
    alignItems: 'center'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#245A43',
    marginBottom: 20
  },

  card: {
    width: '100%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D8E0DA'
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },

  description: {
    fontSize: 15,
    color: '#555555'
  }
});
