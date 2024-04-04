import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import AnimatedImage from '../components/AnimatedImage';
import { getOutfit } from '../server/api-calls';

const Outfit = () => {
  function clothesDB(clothes: any) {
    if (clothes === "Turtle Neck") {
      return require('../assets/images/db/turtleneck.jpg');
    }
    else if (clothes === "Jeans") {
      return require('../assets/images/db/jeans.jpg');
    }
    else if (clothes === "Track Pants") {
      return require('../assets/images/db/trackpants.jpeg');
    }
    else if (clothes === "Tshirt") {
      return require('../assets/images/db/tshirt.jpeg');
    }
    else if (clothes === "Hoodie") {
      return require('../assets/images/db/hoodie.jpeg');
    }
    else if (clothes === "Cargo Pants") {
      return require('../assets/images/db/cargopants.jpeg');
    }
  }
  var item1 = require('../assets/images/db/hoodie.jpeg');
  var item2 = require('../assets/images/db/cargopants.jpeg');

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const data = await getOutfit();
        item1 = clothesDB(data[0][0]);
        item2 = clothesDB(data[0][1]);
        console.log(data[0][0]);
      }
      catch (error) {
        console.error(error);
      } 
    };
    fetchOutfits();
  }, []);  

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <Image source={item1} />
      </View>
      <View style={styles.centeredView}>
        <Image source={item2}/>
      </View>
      <Link href="/(tabs)" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>save</Text>
      </TouchableOpacity>
      </Link>
      <Text style={styles.buttonText}> or </Text>
      <Link href="/modal" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>try another</Text>
      </TouchableOpacity>
      </Link>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centeredView: {
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically if needed
    height: "10%", // Set height
    width: "10%", // Ensure the wrapper View takes up the full width
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: '#eaeaea',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    fontFamily: 'EnvyR',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'EnvyR',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'EnvyR',
  },
  
});

export default Outfit;

