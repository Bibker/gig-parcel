import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { images } from '../../constants';
import { router } from 'expo-router';
import config from '../../config';
import axios from 'axios';

const ProfileTab = () => {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleLogout = async () => {
    // await axios.get(`${config.BASE_URL}/`).then(({data})=> {
    // setMsg(data.msg)  
    // }).catch((error)=>{
    //   console.log("Error bibek ji Error: ")
    //   console.log(error);
    // })   
  };
  const items = [
    {
      "trackingNumber": "56789",
      "status": "Shipped",
      "date": "2023-12-18",
      "from": "Chitwan",
      "to": "Kathmandu",
      "paymentMethod": "Prepaid"
    },

  ]
  return (

    <ScrollView showsVerticalScrollIndicator={false} automaticallyAdjustKeyboardInsets={true}>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={images.PROFILE} />
            <TouchableOpacity style={styles.logoutButton} onPress={() => { handleLogout() }}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              style={styles.profileInput}
              placeholder="Full Name"
              onChangeText={setFullName}
              value={fullName}
            />
            <TextInput
              style={styles.profileInput}
              placeholder="Contact Number"
              onChangeText={setContact}
              value={contact}
            />
            <TextInput
              style={styles.profileInput}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.profileInput}
              placeholder="Address"
              onChangeText={setAddress}
              value={address}
            />
            <TouchableOpacity style={styles.profileButton} onPress={() => { }}>
              <Text style={styles.profileText}>Update Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.profileButton, backgroundColor:'#bd112e' } } onPress={() => { }}>
              <Text style={styles.profileText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '',
    margin: 0,
    marginBottom: 30,
    padding: 10,
  },
  headerImage: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5,
    color: '#d6654f',
  },
  logoutButton: {
    backgroundColor: '#d6654f',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: -10,
    width: 150
  },
  logoutText: {
    fontWeight: 'bold',
    color: '#fff'
  },
  profileInput: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#edf2f7',
    borderRadius: 5,
    borderWidth: 0.2,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 15
  },
  profileButton: {
    alignSelf:'center',
    backgroundColor: '#234c75',
    padding: 10,
    borderRadius:5,
    width:250,
    maxWidth:300,
    margin:5
},
    profileText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#edf2f7',
        textAlign:'center'

    }
});

export default ProfileTab;
