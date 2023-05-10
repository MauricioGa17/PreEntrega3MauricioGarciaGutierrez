import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAwJcG7hBOo-Vt6zTCir8xgkDAoZgLmvRg",
  authDomain: "react-eccomerce-app.firebaseapp.com",
  projectId: "react-eccomerce-app",
  storageBucket: "react-eccomerce-app.appspot.com",
  messagingSenderId: "802483043518",
  appId: "1:802483043518:web:71cf8a97eb3cbc582572ef"
};

//Iniciar APP
const app =firebase.initializeApp(firebaseConfig);

export const getFireStore = () => {
    return firebase.firestore(app)
}