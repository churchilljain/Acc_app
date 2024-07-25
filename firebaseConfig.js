import { firebase } from '@react-native-firebase';
// import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7n4xxvRAxcz5GKj1c0ekJJpM_qPKK2H8",
  authDomain: "baggu-7d222.firebaseapp.com",
  projectId: "baggu-7d222",
  storageBucket: "baggu-7d222.appspot.com",
  messagingSenderId: "12044304174",
  appId: "1:12044304174:android:fbf264a80c84eac8d6c4bf",
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
