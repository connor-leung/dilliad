import { Text, View, Button, Pressable } from "react-native";
import { StyleSheet } from 'react-native';

export default function SortButton(props: any) {
    return(
    <View>
        <Pressable style={styles.button}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginRight: 5
    },
    text:{
        color: "white",
    },
  });

