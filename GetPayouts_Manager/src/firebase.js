import firebase from "firebase";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAenXhtFg6nkAo0PItUPOl1T1_-q5WxEv0",
  authDomain: "payouts-f2aa5.firebaseapp.com",
  projectId: "payouts-f2aa5",
  storageBucket: "payouts-f2aa5.appspot.com",
  messagingSenderId: "825900972179",
  appId: "1:825900972179:web:013e048e1a17883acab566",
  measurementId: "G-ZBBERPCJVC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    return '';
    // const query = await db
    //   .collection("users")
    //   .where("uid", "==", user.uid)
    //   .get();
    // if (query.docs.length === 0) {
    //   await db.collection("users").add({
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }
    return '';
  } catch (err) {
    // console.error(err);
    // alert(err.message);
    const { message, code} = err;
    return message;
  }
};

const signInWithFacebook = async () => {
  try {
    const res = await auth.signInWithPopup(facebookProvider);
    const user = res.user;
    return '';
    // const query = await db
    //   .collection("users")
    //   .where("uid", "==", user.uid)
    //   .get();
    // if (query.docs.length === 0) {
    //   await db.collection("users").add({
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }
  } catch (err) {
    // console.error(err);
    // alert(err.message);
    const { message, code} = err;
    return message;
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    return '';
  } catch (err) {
    // console.error(err);
    const { message, code} = err;
    if( code === 'auth/user-not-found') {
      return message;
    }
    if( code === 'auth/wrong-password') {
      return message;
    }
    return message;
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    // await db.collection("users").add({
    //   uid: user.uid,
    //   name,
    //   authProvider: "local",
    //   email,
    // });
    return '';
  } catch (err) {
    // console.error(err);
    const { message, code} = err;
    if( code === 'auth/user-not-found') {
      return err.message;
    }
    if( code === 'auth/weak-password') {
      return err.message;
    }
    if (code === 'auth/email-already-in-use') {
      return err.message;
    }
    return err.message;
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    // alert("Password reset link sent!");
    return '';
  } catch (err) {
    console.error(err);
    return err.message;
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithFacebook,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
