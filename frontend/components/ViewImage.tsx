import {Text, View, Button, ImageBackground} from "react-native"
import {useForm} from "react-hook-form"
import {RequiredTextInput} from "./RequiredTextInput";
import {getStyle} from "../dao/Style";
import {emptyStyle, Image, Style} from "../constants/Types";
import {useState} from "react";
import {Image as ImageDisplay} from "expo-image"
import {getImage} from "../dao/Image";

export default function ViewImage() {
    // create values required for a form
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {id: ""}
    })
    // create variable with state
    const [ img, setImg] = useState({link: ""} as Image);

    // declare onclick callback function
    const onSubmit = async ({id} : {id: string}) => {
        getImage(id)
            .then((data) => {
                if(data.val() != null)
                    setImg(data.val() as Image)
                else
                    setImg({link: ""} as Image)
            })
            .catch((e) => console.log("[ERROR]: Could not get image with id:", id, "from database\n", e))
    }

    // return tsx component
    return <View>
        <RequiredTextInput valueField={"id"} title={"ID"} control={control}/>
        {errors.id && <Text>A style ID is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />

        <ImageDisplay style={{width: 200, height: 200}} source={img.link} contentFit={"cover"}/>

    </View>
}
