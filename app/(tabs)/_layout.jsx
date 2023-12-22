import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="(home)" options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name='home' size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="history" options={{
                headerShown: true,
                title: 'History',
                tabBarLabel: 'History',
                headerTintColor: '#d6654f',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,

                },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#234c75',
                },
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name='time' size={size} color={color} />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                headerShown: true,
                title: 'Profile',
                tabBarLabel: 'Profile',
                headerTintColor: '#d6654f',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,

                },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#234c75',
                },
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name='person' size={size} color={color} />
                )
            }} />
        </Tabs>
    )
}

export default Layout;