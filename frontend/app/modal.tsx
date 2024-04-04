// Import necessary modules
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


const OutfitGenerator = () => {
  // State to keep track of selected options
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');

  // List of outfit options
  const options = ["Casual", "Formal", "Sporty", "Beachwear", "Party", "Traditional", "Semi-Formal", "Bohemian", "Artsy", "Business Casual", "Streetwear", "Grunge"];

  const navigation = useNavigation();

  // Handler for selecting/deselecting options
  const handleSelectOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Handler for generate button
  const handleGenerate = () => {
    console.log("Selected Options: ", selectedOptions);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate a New Outfit</Text>
      <ScrollView style={styles.scrollView}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOptions.includes(option) ? styles.optionSelected : null
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="What's the Occasion?"
      />
      <Link href="/outfit" asChild>
      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Generate</Text>
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'EnvyR',
  },
});

export default OutfitGenerator;
