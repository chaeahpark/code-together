import { collection } from "firebase/firestore";
import database from "./postApi";

export const commentsCollection = collection(database, "comments");
