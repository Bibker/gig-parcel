const PLATFORM = config.PLATFORM;

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../config';
import { RootSiblingParent } from 'react-native-root-siblings';
import showToast from '../../components/Toast';
import SelectBox from '../../components/SelectBox';

const Shipment = () => {
  const [senderAddress, setSenderAddress] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [senderLat, setSenderLat] = useState(0);
  const [senderLng, setSenderLng] = useState(0);
  const [receiverLat, setReceiverLat] = useState(0);
  const [receiverLng, setReceiverLng] = useState(0);
  const [packageType, setPackageType] = useState('');
  const [packageWeight, setPackageWeight] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [estimatedDistance, setEstimatedDistance] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);



  useEffect(() => {
    if (senderLat && receiverLat)
      calculateMeasurements();
  }, [senderAddress, receiverAddress, senderLat, senderLng, receiverLat, receiverLng])

  useEffect(() => {
    fetchSenderReceiverDetails();
  }, [])



  const fetchSenderReceiverDetails = async () => {
    try {
      setSenderAddress(await AsyncStorage.getItem('senderAddress'));
      setReceiverAddress(await AsyncStorage.getItem('receiverAddress'));
      setSenderLat(await AsyncStorage.getItem('senderLat'));
      setSenderLng(await AsyncStorage.getItem('senderLng'));
      setReceiverLat(await AsyncStorage.getItem('receiverLat'));
      setReceiverLng(await AsyncStorage.getItem('receiverLng'));
    } catch (error) {

    }
  }

  const calculateMeasurements = async () => {
    try {
      const origin = `${senderLat},${senderLng}`;
      const destination = `${receiverLat},${receiverLng}`;
      console.log(origin);
      console.log(destination);
      const apiKey = config.GOOGLE_MAP_API;
      let proxy = '';
      if (PLATFORM == 'web') {
        proxy = "https://cors-anywhere.herokuapp.com/";
      }
      const response = await fetch(
        `${proxy}https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`
      );
      const data = await response.json();
      // Extracting duration and distance from the API response
      const route = data.routes[0];
      const leg = route && route.legs[0];

      if (leg) {
        setEstimatedTime(leg.duration.text);
        setEstimatedDistance(leg.distance.text);
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  }
  const handleFindGiggers = () => {
    // console.warn(packageType, packageWeight, paymentMethod);
    if (
      // !senderAddress ||
      // !receiverAddress ||
      // !estimatedDistance ||
      // !estimatedTime ||
      // !senderLat ||
      // !senderLng ||
      // !receiverLat ||
      // !receiverLng ||
      !packageType ||
      !packageWeight ||
      !paymentMethod
    ) {
      showToast("Please enter all the Fields", "failed")
      return;
    }
    router.push('/(tabs)/(home)/GigMatch')
  };
  return (
    <RootSiblingParent>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Enter your locations</Text>
              <View style={styles.locationSection}>
                <TextInput
                  onPointerDown={() => { router.push('/(tabs)/(home)/SenderDetails') }}
                  onPressIn={() => { router.push('/(tabs)/(home)/SenderDetails') }}
                  editable={false}
                  style={styles.locationInput}
                  placeholder="Pickup Location"
                  value={senderAddress}
                />
              </View>
              <View style={styles.locationSection}>
                <TextInput
                  onPointerDown={() => { router.push('/(tabs)/(home)/ReceiverDetails') }}
                  onPressIn={() => { router.push('/(tabs)/(home)/ReceiverDetails') }}
                  editable={false}
                  style={styles.locationInput}
                  placeholder="Destination Location"
                  value={receiverAddress}
                />
              </View>
            </View>
            <View style={styles.packageDescriptionSection}>
              <View style={styles.packageType}>
                <Text style={styles.packageTypeTitle}>Package Type</Text>
                <SelectBox
                  data={["Document", "Jewellery", "Clothes", "Food", "Others"]}
                  setSelected={(data) => {
                    setPackageType(data)
                  }} />
              </View>
              <View style={styles.packageWeight}>
                <Text style={styles.packageTypeTitle}>Package Weight</Text>
                <SelectBox
                  data={["0.1 to 0.5 Kg", "0.5 to 1 Kg", "1 to 3 Kg", "> 3 Kg"]}
                  setSelected={(data) => {
                    setPackageWeight(data)
                  }} />
              </View>
            </View>
            <View style={styles.paymentSection}>
              <Text style={styles.paymentSectionTitle}>Charge Summary</Text>
              <View style={styles.deliveryType}>
                <Text style={styles.deliveryTypeTitle}>Payment Method</Text>
                <SelectBox
                  data={["COD"]}
                  buttonWidth='40%'
                  setSelected={(data) => {
                    setPaymentMethod(data)
                  }} />
              </View>
              <View style={styles.measurement}>
                <Text style={styles.deliveryTypeTitle}>Distance</Text>
                <Text style={styles.measurementText}>{estimatedDistance}</Text>
              </View>
              <View style={styles.measurement}>
                <Text style={styles.deliveryTypeTitle}>Est. Delivery Time:</Text>
                <Text style={styles.measurementText}>{estimatedTime}</Text>
              </View>
              <View style={styles.amount}>
                <Text style={styles.amountText}>
                  {parseFloat(estimatedDistance) == 0 ? ('Rs. 0')
                    : (parseFloat(estimatedDistance) > 0 && parseFloat(estimatedDistance) < 5) ? ('Rs. 100')
                      : (parseFloat(estimatedDistance) > 5 && parseFloat(estimatedDistance) < 10) ? ('Rs 150')
                        : (parseFloat(estimatedDistance) > 10 && parseFloat(estimatedDistance) < 20) ? ('Rs 250')
                          : (parseFloat(estimatedDistance) > 20 && parseFloat(estimatedDistance) < 30) ? ('Rs 300')
                            : (parseFloat(estimatedDistance) > 30 && parseFloat(estimatedDistance) < 40) ? ('Rs 350')
                              : (parseFloat(estimatedDistance) > 40 && parseFloat(estimatedDistance) < 50) ? ('Rs 400')
                                : (parseFloat(estimatedDistance) > 50 && parseFloat(estimatedDistance) < 100) ? ('Rs 500')
                                  : ('Rs. 800')}
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={handleFindGiggers} style={styles.confirmButton}>
                  <Text style={styles.confirmButtonText}>Find Giggers</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  header: {
    backgroundColor: '#234c75',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    color: "#d6654f",
    fontSize: 24,
    fontWeight: 'medium',
    marginBottom: 20,
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

  packageDescriptionSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fafdff'

  },
  packageType: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#edf2f7',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.1,
    marginRight: 10,
    borderRadius: 10,
    padding: 0,
    width: '50%'
  },
  packageTypeTitle: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#2e68a3",

  },

  packageWeight: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#edf2f7',
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.1,
    marginRight: 10,
    borderRadius: 10,
    padding: 0,
    width: '50%'


  },
  paymentSection: {
    backgroundColor: '#fafdff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    zIndex: -1
  },
  paymentSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deliveryType: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignContent: 'space-around'
  },
  deliveryTypeTitle: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    color: "#2e68a3",
  },
  measurement: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignContent: 'space-around'
  },
  measurementText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#d6654f'
  },
  amount: {
    display: 'flex',
    alignSelf: 'center'
  },
  amountText: {
    fontSize: 30,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#d6654f'
  },
  confirmButton: {
    backgroundColor: "#234c75",
    alignSelf: 'center',
    borderRadius: 25,
    padding: 10,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.3,
  },
  confirmButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }

});

export default Shipment;
