import { StyleSheet, ScrollView } from 'react-native';
import IntroScreen from '../../components/IntroScreen';
import { Text, View } from '../../components/Themed';
import  SortButton  from '../../components/SortButton';
import  PlaylistButton  from '../../components/PlaylistButton';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Library</Text>
      <View style={{height: 50}}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={true} style={styles.sortingContainer}>      
            <SortButton title="Recent"></SortButton>
            <SortButton title="Collaboration"></SortButton>
            <SortButton title="Items You Own"></SortButton>
            <SortButton title="Items You Want"></SortButton>
            <SortButton title="aa"></SortButton>
            <SortButton title="tesasat"></SortButton>
            <SortButton title="tessat"></SortButton>
            <SortButton title="tessadt"></SortButton>
            <SortButton title="teswwewt"></SortButton>
            <SortButton title="tesast"></SortButton>
          </ScrollView>
        </View>
      <View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.sortingContainer}>      
          <PlaylistButton link={require("../../assets/images/library/1.png")} title="Taken Photos" creator="Mike"></PlaylistButton>
          <PlaylistButton link={require("../../assets/images/library/2.png")} title="Dunks and Crunks" creator="Mike"></PlaylistButton>
          <PlaylistButton link={require("../../assets/images/library/3.png")} title="Fits I Would Wear" creator="Mike"></PlaylistButton>
          <PlaylistButton link={require("../../assets/images/library/4.png")} title="Date Outfits" creator="Connor"></PlaylistButton>
          <PlaylistButton link={require("../../assets/images/library/5.png")} title="Buy List" creator="Mike"></PlaylistButton>
          <PlaylistButton link={require("../../assets/images/library/6.png")} title="Hello Kitty Inspired" creator="Mike"></PlaylistButton>
          <PlaylistButton link={require("../../assets/images/library/7.png")} title="Gym Fits" creator="Mike"></PlaylistButton>
          <PlaylistButton></PlaylistButton>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: scale(50)
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  sortingContainer:{
    marginLeft: 10,
    marginTop: 10,
    width:1000,
  }
});
