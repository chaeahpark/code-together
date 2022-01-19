import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const database = getFirestore();

export const colTest = collection(database, "posts");
export default database;
