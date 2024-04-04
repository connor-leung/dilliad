import { ScrollViewStyleReset } from "expo-router/html";
import { Text, View, Button, Pressable, Image} from "react-native";
import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function PlaylistButton(props: any) {
    return(
    <View>
        <Pressable style={styles.button}>
            <View>
                <Image style={styles.image} source={props.link}/>
            </View>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desc}>By {props.creator}</Text>
            </View>

        
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    button:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: scale(8),
        borderRadius: 4,
        paddingLeft: scale(10),
        elevation: 3,
        marginRight: 5,
    },
    text:{
        color: "white",
    },
    image:{
        width: scale(75),
        height: scale(75)
    },
    title:{
        color: "black",
        fontSize: scale(18),
        marginLeft: scale(10),
        fontWeight: "bold"
    },
    desc:{
        color: "black",
        marginLeft: scale(10)
    }
  });

