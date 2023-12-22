import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { images } from '../../../constants';
import PackageTracker from '../../components/PackageTracker';
import { Link } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeTab = () => {
    const [trackingNumber, setTrackingNumber] = useState('');

const clearLocalStorage = async()=> {
    AsyncStorage.setItem('senderName', '');
    AsyncStorage.setItem('senderAddress', '');
    AsyncStorage.setItem('sendeerContact', '');
    AsyncStorage.setItem('senderLat', '');
    AsyncStorage.setItem('senderLng', '');    
    AsyncStorage.setItem('receiverName', '');
    AsyncStorage.setItem('receiverAddress', '');
    AsyncStorage.setItem('receiverContact', '');
    AsyncStorage.setItem('receiverLat', '');
    AsyncStorage.setItem('receiverLng', '');
}
    useEffect(() => {
        clearLocalStorage();

    }, []);
    
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
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={styles.userText}>Bibek,</Text>
                        <Text style={styles.trackingPrompt}>
                            Enter your tracking number and see updates of your parcels
                        </Text>

                        {/* Tracking input and button with Ionicons */}
                        <View style={styles.trackingSection}>
                            <TextInput
                                style={styles.trackingInput}
                                placeholder="Enter tracking number"
                                onChangeText={setTrackingNumber}
                                value={trackingNumber}
                            />
                            <Link style={styles.trackButton} href='/(aux)/tracking'>
                                <Text style={styles.trackButtonText}><Ionicons name="chevron-forward-circle" size={25}></Ionicons></Text>
                            </Link>
                        </View>
                    </View>

                    {/* Shift now section (unchanged) */}
                    <View style={styles.sendPackageSection}>
                        <View style={styles.sendPackagePrompt}>
                            <Text style={styles.sendPackageTitle}>Send Package anywhere</Text>
                            <Text style={styles.sendPackageTitle}>with</Text>
                            <Text style={styles.sendPackageTitleGig}>Gig Parcel</Text>
                            <Link style={styles.sendPackageButton} href='/(tabs)/(home)/shipment' asChild>
                                <Text style={styles.sendPackageButtonText}>Place Order</Text>
                            </Link>
                        </View>
                        <View style={styles.sendPackageImageSection}>
                            <Image style={styles.sendPackageImage} source={images.LOGO} />
                        </View>
                    </View>

                    {/* Recent History Section (unchanged) */}
                    <View style={styles.recentHistorySection}>
                        <Text style={styles.recentHistoryTitle}>Recent History</Text>
                        {items.map((item) => (
                            <PackageTracker
                                key={item.trackingNumber}
                                trackingNumber={item.trackingNumber}
                                status={item.status}
                                date={item.date}
                                from={item.from}
                                to={item.to}
                                paymentMethod={item.paymentMethod}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    header: {
        backgroundColor: '#234c75',
        padding: 10,
        borderRadius: 5,
        marginTop:5,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#edf2f7',
    },
    userText: {
        letterSpacing: 3,
        color: "#d6654f",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    trackingPrompt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#edf2f7',
        marginBottom: 10
    },
    trackingSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        paddingBottom: 5,
    },
    trackingInput: {
        flex: 1,
        marginRight: 5,
        padding: 10,
        backgroundColor: '#edf2f7',
        borderRadius: 5,
        borderWidth: 0.2
    },
    trackButton: {
        backgroundColor: '#d6654f',
        color: '#fff',
        fontWeight: "bold",
        padding: 3
    },
    trackButtonText: {
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
});

export default HomeTab;
