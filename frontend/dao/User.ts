import {User} from "../constants/Types";
import {DataSnapshot} from "firebase/database";
import * as Crypto from "expo-crypto";
import {CryptoDigestAlgorithm} from "expo-crypto";
import {getData, setData} from "./Dao";

/**
 * Create a user in the database (with an id derived from name and phone-number)
 */
export async function setUser(data: User): Promise<void> {
    const id = await userHash(data.name, data.phoneNumber);
    return setData("users", id, data);
}

/**
 * Get a user from the database with id (derived from name and phone-number)
 */
export async function getUser(name: User["name"], phoneNumber: User["phoneNumber"]): Promise<DataSnapshot> {
    const id = await userHash(name, phoneNumber)
    return (getData("users", id));
}

/**
 * Creates a id using a user's name and phone-number.
 * @returns empty string if hash operation is not successful
 */
function userHash(name: User["name"], phoneNumber: User["phoneNumber"]){
    return Crypto.digestStringAsync(CryptoDigestAlgorithm.SHA256, name.concat(phoneNumber));
}
