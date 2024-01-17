import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import images from '../../constants/images';
import { Link, router } from 'expo-router';

const RegisterScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
       <Image source={images.LOGO} style={styles.logo} resizeMode='contain' />
      <Text style={styles.title}>Parcel Gig</Text>
      <Text style={styles.subTitle}>Create Your Account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          style={styles.textInput}
          autoCapitalize="words"
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> {router.replace('/(auth)/login')}}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Link href={'/(auth)/login'} style={styles.alreadyHaveAccountText}>
      <Text >
        Already have an account? Log In
      </Text>
      </Link>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#eee',
    padding: 10,
    width:250,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  alreadyHaveAccountText: {
    marginTop: 20,
    color: '#777',
    fontSize: 14,
  },
});

export default RegisterScreen;
