import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { ref, listAll } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyCKzttvmlJzoWzncHfNs4TTKs4dyEnzfn4",
    authDomain: "arforeveryone-prod.firebaseapp.com",
    projectId: "arforeveryone-prod",
    storageBucket: "arforeveryone-prod.appspot.com",
    messagingSenderId: "1091068151257",
    appId: "1:1091068151257:web:1659305588d16a92e2c5c8",
    measurementId: "G-EVY9Y0LD1Q"
  };

const firebaseApp = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const listRef = ref(storage, 'marker');
//var markers = firebase.storage().ref("marker")
//var objects = firebase.storage().ref("obj")
console.log(listRef)
//listAll("https://firebasestorage.googleapis.com/v0/b/arforeveryone-prod.appspot.com/o/")


