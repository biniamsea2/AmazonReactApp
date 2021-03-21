import firebase from "firebase";


const firebaseapp = firebase.initializeApp({
        apiKey: "AIzaSyC0MxPOxDjXkgbYXb_nQrni1vdYTKIbvYs",
        authDomain: "reactapp-4898a.firebaseapp.com",
        projectId: "reactapp-4898a",
        storageBucket: "reactapp-4898a.appspot.com",
        messagingSenderId: "112056684232",
        appId: "1:112056684232:web:c02a9d0d1226fd05931ffd",
        measurementId: "G-PF2TT3ES66"
      });

//adding authentication
const auth = firebase.auth();

export {auth};