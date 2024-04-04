import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Linking } from "react-native";

// Typescript types for the components
type OutfitItem = {
  id: string;
  image: any; // Using `any` type for local image requires
};

type OutfitCategory = {
  id: string;
  title: string;
  outfits: OutfitItem[];
};

// Mock data for outfits, replace `require` paths with your actual local image paths
const outfitCategories: OutfitCategory[] = [
  {
    id: 'streetwear',
    title: 'Streetwear',
    outfits: [
      { id: '1', image: require('../../assets/images/mainscreen/sw1.png') },
      { id: '2', image: require('../../assets/images/mainscreen/sw2.png') },
      { id: '3', image: require('../../assets/images/mainscreen/sw3.png') },
      // ... more items
    ],
  },
  {
    id: 'minimalist',
    title: 'Minimalist',
    outfits: [
      { id: '4', image: require('../../assets/images/mainscreen/min1.png') },
      { id: '5', image: require('../../assets/images/mainscreen/min2.png') },
      { id: '6', image: require('../../assets/images/mainscreen/min3.png') },
      // ... more items
    ],
  },
  {
    id: 'fallweather',
    title: 'Fall Weather',
    outfits: [
      { id: '7', image: require('../../assets/images/mainscreen/fall1.png') },
      { id: '8', image: require('../../assets/images/mainscreen/fall2.png') },
      { id: '9', image: require('../../assets/images/mainscreen/fall3.png') },
      // ... more items
    ],
  },
  // ... more categories
];

// Outfit item component
const OutfitItemComponent = ({ image }: OutfitItem) => (
  <View style={styles.outfitItem}>
    <Image source={image} style={styles.outfitImage} />
  </View>
);

// Category row component
const OutfitCategoryComponent = ({ title, outfits }: OutfitCategory) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.categoryTitle}>{title}</Text>
    <FlatList
      horizontal
      data={outfits}
      renderItem={({ item }) => <OutfitItemComponent {...item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryList}
    />
  </View>
);

// Main App component
const App = () => {
  return (
    
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {outfitCategories.map((category) => (
          <OutfitCategoryComponent key={category.id} {...category} />
        ))}
      </ScrollView>
      {/* Your BottomNavigationBar component goes here */}
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  categoryContainer: {
    paddingBottom: 5,
  },
  categoryTitle: {
    fontFamily: 'EnvyR',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 5,
  },
  categoryList: {
    paddingLeft: 16,
  },
  outfitItem: {
    marginRight: 16,
    backgroundColor: "#F5F5F7",
    borderRadius: 15,
  },
  outfitImage: {
    width: 150,
    height: 250,
    borderRadius: 8,
  },
});

export default App;
