import firebase from 'firebase/app'
import "firebase/auth"


var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  //---------------------------//
  // apiKey: "AIzaSyDCMdrUqxoJYMHH7fgV42CSRzuOeskf8rg",
  // authDomain: "auth-address-book-development.firebaseapp.com",
  // projectId: "auth-address-book-development",
  // storageBucket: "auth-address-book-development.appspot.com",
  // messagingSenderId: "304788003300",
  // appId: "1:304788003300:web:471a9ae2d82787e84b0ff1"
};
//   // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(`${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`);

export const auth = app.auth();
export default app;
