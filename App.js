
import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  StyleSheet,
  Alert
} from 'react-native';

function CarteInfo({ titre, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{titre}</Text>
      <Text>{description}</Text>
    </View>
  );
}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

<Pressable
  style={styles.action}
  onPress={() => Alert.alert('Bienvenue', 'Bonjour El Mehdi !')}
>
  <Text style={styles.actionText}>Mon profil</Text>
</Pressable>

<Pressable
  style={styles.action}
  onPress={() => Alert.alert('Compétences', 'Je connais React Native.')}
>
  <Text style={styles.actionText}>Mes compétences</Text>
</Pressable>

     
<CarteInfo
  titre="React Native"
  description="Créer des interfaces mobiles."
/>

<CarteInfo
  titre="Flexbox"
  description="Organiser les éléments à l'écran."
/>

<CarteInfo
  titre="JavaScript"
  description="Langage utilisé pour développer notre application."
/>

     
<Image
  source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
  style={styles.avatar}
/>

<Text style={styles.title}>El Mehdi Goual</Text>

<Text style={styles.description}>
  Étudiant en 4ème année 4IIR à l'EMSI
</Text>

<Text>J'aime le développement mobile.</Text>
<Text>Je suis passionné par l'informatique.</Text>
<Text>J'apprends React Native.</Text>


     
<Pressable
  style={styles.action}
  onPress={() => Alert.alert('Information', 'Action réalisée !')}
>
  <Text style={styles.actionText}>Valider</Text>
</Pressable>

      <View style={styles.row}>
  <View style={styles.box}>
    <Text>Bloc 1</Text>
  </View>

  <View style={styles.box}>
    <Text>Bloc 2</Text>
  </View>

  <View style={styles.box}>
    <Text>Bloc 3</Text>
  </View>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center'
  },
row: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},

box: {
  padding: 12,
  margin: 4,
  backgroundColor: '#DDEFE4'
},
  avatar: {
  width: 150,
  height: 150,
  borderRadius: 75,
  marginBottom: 16
},

title: {
  fontSize: 26,
  color: 'green',
  fontWeight: 'bold',
  marginBottom: 8
},

  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },

card: {
  width: '100%',
  padding: 14,
  marginVertical: 8,
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#D8E0DA'
},

cardTitle: {
  fontSize: 17,
  fontWeight: 'bold',
  marginBottom: 5
},

action: {
  backgroundColor: '#2E7657',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  marginTop: 12
},

actionText: {
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign: 'center'
},


});
