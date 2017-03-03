/**
 * Created by Admin on 12/29/2016.
 */
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBa2bNTanoG-RAgXlk4xisW7NO7nXA3uAM",
    authDomain: "panacloudcrimereport.firebaseapp.com",
    databaseURL: "https://panacloudcrimereport.firebaseio.com",
    storageBucket: "panacloudcrimereport.appspot.com",
    messagingSenderId: "287518850262"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();