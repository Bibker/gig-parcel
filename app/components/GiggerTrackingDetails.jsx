import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { images } from '../../constants'

const GiggerTrackingDetails = ({ gigger }) => {
    return (
        <View style={styles.matchedProfileSection}>
            <View style={styles.giggerImageSection}>
                <Image source={images.LOGO} style={styles.giggerImage} />
                <Text style={styles.giggerNumber}>{gigger.contactNumber}</Text>
            </View>
            <View style={styles.trackingDetailsSection}>
                <Text style={styles.giggerName}>{gigger.fullName}</Text>
                <View style={styles.location}>
                    <Text style={styles.giggerNumber}>Pickup: {gigger.pickupLocation}</Text>
                    <Text style={styles.giggerNumber}>Delivery: {gigger.deliveryLocation}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    matchedProfileSection: {
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
        height: 50,
        width: 50,
        marginTop:15,
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
    trackingDetailsSection: {
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
        width: '63%'

    },
    giggerName: {
        marginTop: 10,
        color: '#d6654f',
        fontSize: 20,
        fontWeight: 'bold',
    },
    location: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        width: '100%'
    },
})

export default GiggerTrackingDetails