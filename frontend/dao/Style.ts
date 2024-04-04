import {getData} from "./Dao";
import {DataSnapshot} from "firebase/database";

/**
 * Get style with id from database
 */
export function getStyle(id: string): Promise<DataSnapshot> {
    return getData("styles", id);
}
