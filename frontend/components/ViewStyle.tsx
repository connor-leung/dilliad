import { Text, View, Button } from "react-native"
import {useForm} from "react-hook-form"
import {RequiredTextInput} from "./RequiredTextInput";
import {getStyle} from "../dao/Style";
import {emptyStyle, Style} from "../constants/Types";
import {useState} from "react";

export default function ViewStyle() {
    // create values required for a form
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {id: ""}
    })
    // create variable with state
    const [ sty, setStyle] = useState(emptyStyle);

    // declare onclick callback function
    const onSubmit = async ({id} : {id: string}) => {
        getStyle(id)
            .then((data) => {
                if(data.val() != null)
                    setStyle(data.val() as Style)
                else
                    setStyle(emptyStyle)
            })
            .catch((e) => console.log("[ERROR]: Could not get style with id:", id, "from database\n", e))
    }

    // return tsx component
    return <View>
        <RequiredTextInput valueField={"id"} title={"ID"} control={control}/>
        {errors.id && <Text>A style ID is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        <Text>{sty.productDisplayName}</Text>
    </View>
}
