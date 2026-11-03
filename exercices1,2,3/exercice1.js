
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
  Alert
} from 'react-native';

export default function Exercice1() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
        style={styles.avatar}
      />

      <Text style={styles.title}>El Mehdi</Text>

      <Text style={styles.description}>
        Étudiant en 3ème année 4IIR à l'EMSI
      </Text>

      <Text style={styles.description}>
        Je suis passionné par le développement informatique.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert(
          'Mon profil',
          'El Mehdi - Étudiant en 3IIR'
        )}
      >
        <Text style={styles.buttonText}>
          Afficher mon profil
        </Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FA'
  },

  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#245A43',
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15
  },

  button: {
    backgroundColor: '#2E7657',
    padding: 12,
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
