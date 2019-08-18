import * as firebase from "firebase";
import { auth } from "../Firebase";

doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

doSignOut = () => auth.signOut();
