import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native';

const auth = firebase.auth();

export default function DocumentScreen() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log('LogOut สำเร็จ');
        navigation.replace('LoginPage');
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text
        // onPress={() => navigation.navigate('Home')}
        style={styles.emailText}>
        {auth.currentUser?.email}
      </Text>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: '#FF6347', // Coral color, you can change this to your preferred color
    padding: 15,
    borderRadius: 10,
  },
  signOutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
