import firebase from "firebase";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyBznRGPElFktG3IOxA54dax7dVrjqdh_ao",
    authDomain: "formula-coffee-d6f54.firebaseapp.com",
    projectId: "formula-coffee-d6f54",
    storageBucket: "formula-coffee-d6f54.appspot.com",
    messagingSenderId: "837804958669",
    appId: "1:837804958669:web:67046f83d414b86578da84"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;