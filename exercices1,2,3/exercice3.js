
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';
function afficherAlerte(titre, message) {
  if (Platform.OS === 'web') {2
    window.alert(titre + '\n' + message);
  } else {
    Alert.alert(titre, message);
  }
}

export default function Exercice3() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Mon profil étudiant</Text>

      <Pressable
  style={styles.button}
  onPress={() => afficherAlerte(
    'Je suis étudiant en 4ème année 4IIR à l’EMSI.'
  )}
>
  <Text style={styles.buttonText}>Présentation</Text>
</Pressable>

      <Pressable
        style={styles.button}
        onPress={() => window.alert(
          'Java, SQL, Python, React Native et Git.'
        )}
      >
        <Text style={styles.buttonText}>Compétences</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert(
          'Contact',
          'Vous pouvez me contacter par email.'
        )}
      >
        <Text style={styles.buttonText}>Contact</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#245A43',
    marginBottom: 30
  },

  button: {
    backgroundColor: '#2E7657',
    padding: 15,
    width: '80%',
    borderRadius: 8,
    marginBottom: 15
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
