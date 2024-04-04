import { ScrollViewStyleReset } from "expo-router/html";
import { Text, View, Button, Pressable, Image} from "react-native";
import { StyleSheet, ScrollView } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import OutfitButton from '../components/OutfitButton'

export default function RecommendedTab(props: any) {
    return(
    <View style={styles.container}>
        <Text style={styles.title}></Text>
        <View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={true} style={styles.sortingContainer}>
                <OutfitButton></OutfitButton>
                <OutfitButton></OutfitButton>
                <OutfitButton></OutfitButton>
                <OutfitButton></OutfitButton>
                <OutfitButton></OutfitButton>
            </ScrollView>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontWeight: "bold",
        fontSize: scale(25),
        marginBottom: scale(10)
    },
    sortingContainer:{

    },
    container:{
        marginBottom: scale(10)
    }
  });

