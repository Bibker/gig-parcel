import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { images } from '../../constants';
import { router } from 'expo-router';

const ProfileTab = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleLogout = () => {

   
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
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Header with updated sections */}
          <View style={styles.header}>
            <Image style={styles.headerImage} source={images.PROFILE}/>
            <TouchableOpacity style={styles.logoutButton} onPress={()=> {router.replace('/(auth)/login')}}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: '',
    margin:0,
    padding: 10,
  },
  headerImage:{
    width:150,
    height:150,
    borderRadius:100
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf:'center',
    marginBottom: 5,
    color: '#d6654f',
  },
  logoutButton:{
    backgroundColor:'#d6654f',
    padding:8,
    borderRadius:10,
    alignItems:'center',
    marginTop:-10,
    width:150
  },
  logoutText:{
    fontWeight:'bold',
    color:'#fff'
  }
});

export default ProfileTab;
