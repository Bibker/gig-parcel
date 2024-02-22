import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="shipment"
        options={{
          headerTitle: 'Shipment',
          headerTintColor: '#d6654f',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,

          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#234c75',
          },
          headerLeft: () => (
            <Button
              onPress={() => { router.push('/(tabs)/(home)/home') }}
              color='#d6654f'
              title="Back" />
          ),
        }}
      />
      <Stack.Screen name="SenderDetails" options={{
        presentation: 'modal',
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#234c75'
        },
      }} />
      <Stack.Screen name="ReceiverDetails" options={{
        presentation: 'modal',
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#234c75'
        },
      }} />
      <Stack.Screen name="GigMatch" options={{
        presentation: 'modal',
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#234c75'
        },
        headerLeft: () => (
          <Button
            onPress={() => { router.push('/(tabs)/(home)/shipment') }}
            color='#d6654f'
            title="Back" />
        ),
      }} />
    </Stack>
    //   <></>
  )
}

export default Layout