import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

const database = getFirestore();

export const postsCollection = collection(database, "posts");

export default database;
