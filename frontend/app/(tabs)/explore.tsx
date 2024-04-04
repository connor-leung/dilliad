import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

const { width } = Dimensions.get('window');

const categories = ['Pants', 'Shirts', 'Shorts', 'Hats', 'Dresses', 'Shoes', 'Accessories', 'Sale'];


// Placeholder data with different heights for the images
const data = [
  { id: '1', uri: require("../../assets/images/explore/1.png"), height: 300 },
  { id: '2', uri: require("../../assets/images/explore/2.png"), height: 190 },
  { id: '3', uri: require("../../assets/images/explore/3.png"), height: 300 },
  { id: '4', uri: require("../../assets/images/explore/4.png"), height: 300 },
  { id: '5', uri: require("../../assets/images/explore/5.png"), height: 180 },
  { id: '6', uri: require("../../assets/images/explore/6.png"), height: 300 },
  // Add more items as needed...
];

const App = () => {
  const [search, setSearch] = useState('');

  // Split data into two columns
  const columnOneData = data.filter((_, index) => index % 2 === 0);
  const columnTwoData = data.filter((_, index) => index % 2 !== 0);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search..."
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInput}
      />

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sortingBar}>
  {categories.map((category, index) => (
    <TouchableOpacity 
      key={index} 
      style={[
        styles.sortingBarItem, 
        { marginLeft: index === 0 ? 15 : 0 } // Corrected line
      ]}
    >
      <Text style={styles.sortingBarText}>{category}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>


      <ScrollView>
        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            {columnOneData.map((item) => (
              <Image key={item.id} source={item.uri} style={[styles.image, { height: item.height }]} />
            ))}
          </View>
          <View style={styles.column}>
            {columnTwoData.map((item) => (
              <Image key={item.id} source={item.uri } style={[styles.image, { height: item.height }]} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchBarContainer: {
    backgroundColor: 'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 10,
  },
  searchBarInput: {
    backgroundColor: '#EDEDED',
  },
  sortingBar: {
    backgroundColor: 'white',
    marginBottom: 5,
    height: 0,
  },
  sortingBarItem: {
    marginRight: 5,
    backgroundColor: "black",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 10,
  },
  sortingBarText: {
    color: 'white',
    // Add additional styles to match your design
  },
  columnsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  column: {
    flex: 1,
    padding: 2,
  },
  image: {
    width: width / 2 - 4,
    resizeMode: 'cover',
    marginBottom: 4,
    backgroundColor: "#F5F5F7",
    borderRadius: 10,
  },
});

export default App;
