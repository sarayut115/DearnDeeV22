import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

// Sample data representing IoT devices
const devices = [
  { id: 1, name: 'เครื่องกระตุ้นกระแสไฟฟ้า', image: require('../../assets/fes-leg.png'), online: true },
  // { id: 2, name: 'Device 2', image: require('../../assets/favicon.png'), online: false },
  // { id: 3, name: 'Device 3', image: require('../../assets/favicon.png'), online: true },
  // Add more device objects as needed
];

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>อุปกรณ์ทั้งหมด</Text>
      {devices.map(device => (
        <TouchableOpacity key={device.id} style={styles.deviceContainer}  onPress={() => navigation.navigate("HomeScreen1")}>
          <Image source={device.image} style={styles.deviceImage} />
          <Text style={[styles.deviceText, device.online ? styles.onlineText : styles.offlineText]}>
            {device.name} - {device.online ? 'ออนไลน์' : 'ออฟไลน์'}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop:15,
    marginLeft:15,
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    backgroundColor:'#ffff',
    borderRadius:10,
    width: '90%',
    height: '15%',
    marginLeft:20,
  },
  deviceImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft:20,
  },
  deviceText: {
    fontSize: 16,
  },
  onlineText: {
    color: 'green',
  },
  offlineText: {
    color: 'red',
  },
});

export default HomeScreen;
