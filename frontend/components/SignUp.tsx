import { Text, View, Button } from "react-native"
import {useForm} from "react-hook-form"
import {RequiredTextInput} from "./RequiredTextInput";
import {emptyUser, User} from "../constants/Types";
import {setUser} from "../dao/User";
import {useState} from "react";

const initialData: User = {name: "", phoneNumber: "", password: "", styles: []};

export default function SignUp() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: initialData
    })

    const [usr, setUsr] = useState(emptyUser)
    const onSubmit = async (data: User) => {
        setUser(data)
            .then(() => setUsr(data as User))
            .catch((e) => console.log("User write *not* successful:\n", e));
    }

    return <View>
            <RequiredTextInput valueField={"name"} title={"Name"} control={control}/>
            {errors.name && <Text>A username is required.</Text>}

            <RequiredTextInput valueField={"phoneNumber"} title={"Phone Number"} control={control}/>
            {errors.phoneNumber && <Text>Your phone-number is required.</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            <Text>User written with {usr.name} and {usr.phoneNumber}</Text>
    </View>
}