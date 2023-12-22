import { Stack } from 'expo-router'
import React from 'react'

function RootLayout() {
  return (
  <Stack>
     <Stack.Screen 
        name="index"
        options={{
            headerShown:false,
            headerTitle:"Welcome",
            title:'Welcome',
        }}
        />
    <Stack.Screen 
        name="(auth)/login"
        options={{
            headerShown:false,
            headerTitle:"Login",
            title:'Login',
        }}
        />
          <Stack.Screen 
        name="(auth)/register"
        options={{
            headerTitle:"Register",
            title:'Register',
        }}
        />
        <Stack.Screen name="(aux)" options={{
        headerShown:false,
        }}
        />
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
  </Stack>
  )
}

export default RootLayout