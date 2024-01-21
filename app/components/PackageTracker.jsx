import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const PackageTracker = ({ trackingNumber, status, date, from, to, paymentMethod }) => {
    return (
        <View style={styles.container}>
            <View style={styles.trackingCardSection}>
                <View style={styles.row}>
                    <Text style={styles.heading}>Tracking Number</Text>
                    <Text style={styles.detail}>#{trackingNumber}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.heading}>Status</Text>
                    <Text style={styles.detail}>{status}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.heading}>Date</Text>
                    <Text style={styles.detail}>{date}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.heading}>From</Text>
                    <Text style={styles.detail}>{from}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.heading}>To</Text>
                    <Text style={styles.detail}>{to}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.heading}>Payment</Text>
                    <Text style={styles.detail}>{paymentMethod}</Text>
                </View>
                <TouchableOpacity style={styles.seeAllButton} onPress={() => {router.push('/(aux)/tracking') }}>
                    <Text style={styles.seeAllButtonText}>See Full Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom:0
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    heading: {
        fontWeight: 'bold',
    },
    detail: {
        flex: 1,
        textAlign: 'right',
    },
    trackingCardSection: {
        backgroundColor: '#fafdff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 0,
    },
    seeAllButton: {
        alignSelf:'center',
        backgroundColor: '#d6654f',
        padding: 10,
        borderRadius:5,
        width:250,
        maxWidth:300
    },
    seeAllButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#edf2f7',
        textAlign:'center'

    }
});

export default PackageTracker;
