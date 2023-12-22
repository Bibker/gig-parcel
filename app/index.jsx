import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const index = () => {
  return (
     <Redirect href={'/(auth)/login'}/>
    // <SafeAreaView>
    //   <View>
    //     <Link href={'/(auth)/login'} replace style={{
    //       color: '#aaa',
    //       backgroundColor: 'blue',
    //       width: 200,
    //       height: 30,
    //       fontSize: 16,
    //       fontWeight: 'bold',
    //       textAlign: 'center',
    //     }}>
    //       <Text>Login</Text>
    //     </Link>
    //   </View>
    // </SafeAreaView>
  )
}

export default index