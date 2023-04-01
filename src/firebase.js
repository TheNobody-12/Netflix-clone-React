import firebase from "firebase/compat/app"; // latest firebase version require to import from compat 
import "firebase/compat/auth"; // without using compat, it will throw error 
// of webpack not initialized or firestore not initialized
import "firebase/compat/firestore";

// Sarthak Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDQVThY6eq697FXuF4HEgY6Ymr_-oclnLo",
  authDomain: "netflix-clone-awt.firebaseapp.com",
  projectId: "netflix-clone-awt",
  storageBucket: "netflix-clone-awt.appspot.com",
  messagingSenderId: "6121883266",
  appId: "1:6121883266:web:852640fe675e0380b4569b"
};

// // Kaushal Firebase Config
// const firebaseConfig = {
//   apiKey: "AIzaSyA7SgdZVxx6DQMhz9ZwS75YKHS4-G8KTrE",
//   authDomain: "netflix-clone-19dc5.firebaseapp.com",
//   projectId: "netflix-clone-19dc5",
//   storageBucket: "netflix-clone-19dc5.appspot.com",
//   messagingSenderId: "78157840859",
//   appId: "1:78157840859:web:0c38bc570e5d9bf27367fe",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
