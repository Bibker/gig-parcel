import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import images from '../../constants/images';
import { Link, useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={images.LOGO} style={styles.logo} resizeMode='contain' />
      <Text style={styles.title}>Parcel Gig</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email"
          style={styles.textInput}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/home')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity> */}
      {/* <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./facebook_logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./google_logo.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View> */}
      <Link href={'/(auth)/register'} style={styles.signupText}>
        <Text>Don't have account? Sign Up</Text>
      </Link>
    </View>
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
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#eee',
    padding: 10,
    width: 250,
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
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#777',
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    marginRight: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signupText: {
    marginTop: 20,
    color: '#777',
    fontSize: 14,
  },
});

export default LoginScreen;
