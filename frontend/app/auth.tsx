import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { router } from 'expo-router';

const AuthScreen = () => {
  const [isSignInView, setIsSignInView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = () => {
    console.log('Signing in...')
    router.replace('/(tabs)')
  };
  const handleSignUp = () => {
    console.log('Signing up...')
    router.replace('/(tabs)')
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/pixelLogo.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!isSignInView && (
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      )}
      {isSignInView ? (
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => setIsSignInView(!isSignInView)}>
        <Text style={styles.toggleText}>
          {isSignInView ? "Don't have an account? Sign Up" : "Have an account? Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 400,
    height: 400,
    // marginBottom: 20,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontFamily: 'EnvyR', // Ensure you've loaded this font as described previously
  },
  signInButton: {
    backgroundColor: 'red', // Or any color for the sign-in button
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButton: {
    backgroundColor: 'red', // Making the sign-up button red
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'EnvyR', // Consistency in font usage
  },
  toggleText: {
    marginTop: 20,
    fontFamily: 'EnvyR',
    fontStyle: 'italic',
  },
});

export default AuthScreen;

