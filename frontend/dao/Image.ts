import {getData} from './Dao';
import {DataSnapshot} from "firebase/database";

export function getImage(id: string): Promise<DataSnapshot> {
    return getData("images", id);
}