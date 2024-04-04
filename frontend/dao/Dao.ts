import {db} from "../firebaseConfig"
import {DataSnapshot, get, ref, set} from "firebase/database"

/**
 * Set (add or edit) entry in firebase with `id` on `path` such that it is `data`
 */
export function setData<T>(path: string, id: string, data: T): Promise<void> {
    console.log(path + "/" + id);
    return set(ref(db, path + "/" + id), data);
}

/**
 * Get data from firebase at `path` with `id`
 */
export function getData(path: string, id: string): Promise<DataSnapshot> {
   return get(ref(db, path + "/" + id));
}
