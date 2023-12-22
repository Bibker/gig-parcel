import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import PackageTracker from '../components/PackageTracker'

const History = () => {
  const items = [
    {
      "trackingNumber": "56789",
      "status": "Shipped",
      "date": "2023-12-18",
      "from": "Chitwan",
      "to": "Kathmandu",
      "paymentMethod": "Prepaid"
    },
    {
      "trackingNumber": "90123",
      "status": "Delivered",
      "date": "2023-12-15",
      "from": "Biratnagar",
      "to": "Kathmandu",
      "paymentMethod": "Online Payment"
    },
    {
      "trackingNumber": "45678",
      "status": "On Hold",
      "date": "2023-12-17",
      "from": "Biratnagar",
      "to": "Pokhara",
      "paymentMethod": "COD"
    },
    {
      "trackingNumber": "23456",
      "status": "Delivered",
      "date": "2023-11-20",
      "from": "Chitwan",
      "to": "Palpa",
      "paymentMethod": "Prepaid"
    },
    {
      "trackingNumber": "17890",
      "status": "Shipped",
      "date": "2023-12-10",
      "from": "Kathmandu",
      "to": "Biratnagar",
      "paymentMethod": "Online Payment"
    },
    {
      "trackingNumber": "09876",
      "status": "On Hold",
      "date": "2023-12-08",
      "from": "Pokhara",
      "to": "Pokhara",
      "paymentMethod": "COD"
    },
    {
      "trackingNumber": "78901",
      "status": "Delivered",
      "date": "2023-11-30",
      "from": "Chitwan",
      "to": "Kathmandu",
      "paymentMethod": "Prepaid"
    },
    {
      "trackingNumber": "34567",
      "status": "Shipped",
      "date": "2023-10-25",
      "from": "Kathmandu",
      "to": "Pokhara",
      "paymentMethod": "Online Payment"
    },
    {
      "trackingNumber": "67890",
      "status": "Delivered",
      "date": "2023-10-18",
      "from": "Pokhara",
      "to": "Pokhara",
      "paymentMethod": "COD"
    },
    {
      "trackingNumber": "21345",
      "status": "On Hold",
      "date": "2023-10-12",
      "from": "Biratnagar",
      "to": "Biratnagar",
      "paymentMethod": "Prepaid"
    }
  ]

  return (
    <SafeAreaView >
 
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
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
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  historyText: {
    fontSize:22

  }
})

export default History