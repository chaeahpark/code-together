import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const database = getFirestore();

export const postsCollection = collection(database, "posts");
export default database;
