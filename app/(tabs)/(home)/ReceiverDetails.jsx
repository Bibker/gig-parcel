import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { router } from 'expo-router';


const ReceiverDetails = () => {
  const [receiverName, setReceiverName] = useState('');
  const [receiverContact, setReceiverContact] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [receiverLat, setReceiverLat] = useState('');
  const [receiverLng, setReceiverLng] = useState('');

  const handleDone = async () => {
    try {
      await AsyncStorage.setItem('receiverName',  receiverName);
      await AsyncStorage.setItem('receiverContact',  receiverContact);
      await AsyncStorage.setItem('receiverAddress',  receiverAddress);
      await AsyncStorage.setItem('receiverLat',  String(receiverLat));
      await AsyncStorage.setItem('receiverLng',  String(receiverLng));
      router.replace('/(tabs)/(home)/shipment');
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <View style={styles.container}>
      {/* Header with updated sections */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Receiver Details</Text>
        {/* Tracking input and button with Ionicons */}
        <Text style={styles.inputHeader}>Dropoff location</Text>
        <View style={styles.locationSection}> 
          <GooglePlacesAutocomplete
              onPress={(data, details = null) => {
                setReceiverAddress(data.description);
                const lat = details.geometry.location.lat;
                const lng = details.geometry.location.lng;
                setReceiverLat(lat);
                setReceiverLng(lng);
            }}
            fetchDetails={true}
            query={{
              key: 'AIzaSyBPZgfibTdGNRMEr7J859MCPAdbZy3zBqo',
              language: 'en',
              components: 'country:np',
            }}
            requestUrl={{
              useOnPlatform: 'web', // or "all"
              url:
                'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
            }}
            styles={{
              textInput: {
                marginBottom:0,
                height: 38,
                backgroundColor:'#edf2f7'
              },
            }}
          />
        </View >
        <Text style={styles.inputHeader}>Receiver Name</Text>
        <View style={styles.locationSection} > 
          <TextInput
            onChangeText={setReceiverName}
            style={styles.locationInput}
          />
        </View>
        <Text style={styles.inputHeader}>Phone Number</Text>
        <View style={styles.locationSection} > 
          <TextInput
            onChangeText={setReceiverContact}
            keyboardType='numeric'
            style={styles.locationInput}
            maxLength={10}
          />
        </View>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  header: {
    backgroundColor: '#234c75',
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    color: "#d6654f",
    alignSelf:'center',
    fontSize: 24,
    fontWeight: 'medium',
    marginBottom: 20,
  },
  inputHeader:{
    fontSize:18,
    marginBottom:4,
    color:"#fff"

  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingBottom: 20,
  },
  locationInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#edf2f7',
    borderRadius: 5,
    borderWidth: 0.2
  },
  locationButton: {
    backgroundColor: '#d6654f',
    color: '#fff',
    fontWeight: "bold",
    padding: 3
  },

  locationButtonText: {
    paddingLeft: 5,
    paddingRight: 5
  },

  sendPackageSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fafdff'

  },
  sendPackagePrompt: {
    maxWidth: 220
  },
  sendPackageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sendPackageTitleGig: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#2e68a3",

  },
  sendPackageButton: {
    backgroundColor: '#d6654f',
    alignItems: 'center',
    padding: 15,
    marginLeft: 15,
    borderRadius: 5,
    width: 150
  },
  sendPackageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#edf2f7'

  },
  sendPackageImageSection: {

  },
  sendPackageImage: {
    width: 140,
    height: 150,

  },
  recentHistorySection: {
    backgroundColor: '#fafdff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  recentHistoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recentPackageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  packageDetails: {
    marginLeft: 10,
  },
  trackingNumber: {
    fontWeight: 'bold',
  },
  packageStatus: {
    color: '#777',
  },
  packageDate: {
    marginLeft: 'auto',
    color: '#777',
  },
  doneButton: {
    alignSelf: 'center',
    backgroundColor: '#d6654f',
    padding: 10,
    borderRadius: 5,
    width: 100,
    maxWidth: 300
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#edf2f7',
    textAlign: 'center'

  }
});


export default ReceiverDetails;