import { ScrollViewStyleReset } from "expo-router/html";
import { Text, View, Button, Pressable, Image} from "react-native";
import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function OutfitButton(props: any) {
    return(
    <View style={styles.container}>
        <Pressable>
            <View>
                <Image style={styles.image} source={require("../assets/images/sindu.jpg")}/>
            </View>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight: scale(10)
    },
    image:{
        width: scale(150),
        height: scale(250)
    }
  });

