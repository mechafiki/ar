import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getStorage, ref, listAll } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyCKzttvmlJzoWzncHfNs4TTKs4dyEnzfn4",
    authDomain: "arforeveryone-prod.firebaseapp.com",
    projectId: "arforeveryone-prod",
    storageBucket: "arforeveryone-prod.appspot.com",
    messagingSenderId: "1091068151257",
    appId: "1:1091068151257:web:1659305588d16a92e2c5c8",
    measurementId: "G-EVY9Y0LD1Q"
  };

firebase.initializeApp(firebaseConfig);
//const storage = getStorage(firebaseApp);
var storageRef = firebase.storage().ref()
storageRef.list()

//var objects = firebase.storage().ref("obj")
//listAll("https://firebasestorage.googleapis.com/v0/b/arforeveryone-prod.appspot.com/o/")


