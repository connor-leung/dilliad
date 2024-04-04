// Import necessary modules
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { useNavigation } from '@react-navigation/native';



const Account = () => {
  // State to keep track of selected options
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Account</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Name: {userData.name}</Text>
        <Text style={styles.infoText}>Email: {userData.email}</Text>
      </View>

      <Link href="/auth" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LogOut</Text>
      </TouchableOpacity>
      </Link>
    </View>
  );
};

// Styling for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'EnvyR'
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'EnvyR'
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    fontFamily: 'EnvyR'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'EnvyR'
  },
});

export default Account;
