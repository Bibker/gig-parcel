import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../../constants'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';


const GiggerProfile = ({ gigger }) => {
    const handleNavigation =()=>{
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
       router.replace('/(aux)/tracking');
    }
    return (
        <View style={styles.matchedProfileSection}>
            <View style={styles.giggerImageSection}>
                <Image source={images.LOGO} style={styles.giggerImage} />
                <Text style={styles.giggerNumber}>{gigger.contactNumber}</Text>
            </View>
            <View style={styles.giggerStatsSection}>
                <Text style={styles.giggerName}>{gigger.fullName}</Text>
                <View style={styles.giggerStats}>
                    <Text style={styles.giggerNumber}>{gigger.totalDeliveries} Deliveries</Text>
                    <Text style={styles.giggerNumber}>Since {gigger.joinedDate}</Text>
                </View>
                <Text style={styles.measurementText}>Note: Rider is {gigger.distance} min away.</Text>
                <View style={styles.giggerConfirmSection}>
                    <TouchableOpacity style={styles.confirmButton} onPress={handleNavigation}>
                        <Text style={styles.confirmButtonText}>Select Gigger</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    matchedProfileSection: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#fafdff'

    },
    giggerImageSection: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#edf2f7',
        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowOpacity: 0.1,
        marginRight: 10,
        borderRadius: 10,
        padding: 10,
        width: '35%'
    },
    giggerImage: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: '#2e68a3',
        borderRadius: 100,
    },
    giggerNumber: {
        margin: 10,
        fontSize: 12,
        color: '#d6654f',
        fontWeight: 'bold'
    },
    giggerStatsSection: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#edf2f7',
        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowOpacity: 0.1,
        marginRight: 10,
        borderRadius: 10,
        padding: 5,
        width: '65%'

    },
    giggerName: {
        marginTop: 10,
        color: '#d6654f',
        fontSize: 20,
        fontWeight: 'bold',
    },
    giggerStats: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        width: '100%'
    },
    measurementText: {
        margin: 15,
        fontSize: 15,
        fontStyle: 'italic',
        color: '#2e68a3',
        fontWeight: 'bold'

    },
    confirmButton: {
        backgroundColor: "#234c75",
        alignSelf: 'center',
        borderRadius: 20,
        padding: 8,
        marginTop: 10,
        marginBottom: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowOpacity: 0.3,
    },
    confirmButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }

})

export default GiggerProfile