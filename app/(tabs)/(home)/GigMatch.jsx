import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '../../../constants'
import GiggerProfile from '../../components/GiggerProfile';

const GigMatch = () => {
    const [searching, setSearching] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setSearching(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    var riderData = [
        {
            "image": "path/to/image1.jpg",
            "fullName": "Arun Jung Rana",
            "totalDeliveries": 50,
            "joinedDate": "2022-01-01",
            "distance": 5,
            "contactNumber": "123-456-7890"
        },
        {
            "image": "path/to/image2.jpg",
            "fullName": "Bibek Bhusal",
            "totalDeliveries": 30,
            "joinedDate": "2022-03-15",
            "distance": 8,
            "contactNumber": "987-654-3210"
        },
        {
            "image": "path/to/image3.jpg",
            "fullName": "Sam Johnson",
            "totalDeliveries": 75,
            "joinedDate": "2021-11-20",
            "distance": 11,
            "contactNumber": "555-123-4567"
        },
    ];


    return (
        <SafeAreaView>
            <ScrollView>
                {searching ? (
                    <View style={styles.loading}>
                        <Image source={images.SEARCHING} />
                        <Text style={styles.loadingText}>Finding Nearest Gigger</Text>
                    </View>
                ) : (
                    riderData.map((gigger, index) => (
                        <GiggerProfile key={index} gigger={gigger} />
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loading: {
        marginTop: '50%'

    },
    loadingText: {

        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: -50,
        color: "#2e68a3",
    },
})

export default GigMatch