import { firebase } from '@react-native-firebase';
// import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
//   measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
// function init = 
try {
    if (!firebase.apps.length) {
        console.log("tryingtoinitialise hooks")
        firebase.initializeApp(firebaseConfig);
        console.log("initialised hooks")
    }
} catch (error) {
    console.log(error)
}


export { firebase };