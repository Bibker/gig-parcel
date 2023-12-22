import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { Button } from 'react-native';


const AuxLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="tracking" options={{
                headerShown: true,
                headerTitle: 'Tracking',
                headerTintColor:'#d6654f',
                headerTitleStyle:{
                    fontWeight:'bold',
                    fontSize:20,
                    
                },
                headerTitleAlign:'center',
                headerStyle: {
                  backgroundColor: '#234c75', 
                },
                headerLeft: () => (
                  <Button
                    onPress={() => { router.replace('/(tabs)/(home)/home') }}
                    color='#d6654f'
                    title="Back" />
                ),
            }} />
        </Stack>
    )
}

export default AuxLayout