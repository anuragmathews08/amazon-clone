import firebase from "firebase/firebase";

firebase.initializeApp({
  apiKey: "AIzaSyD3xvyskTwrxREe-dDI2fCPMnjdlfXmO50",
  authDomain: "my-amzon-clone.firebaseapp.com",
  databaseURL: "https://my-amzon-clone.firebaseio.com",
  projectId: "my-amzon-clone",
  storageBucket: "my-amzon-clone.appspot.com",
  messagingSenderId: "430595488105",
  appId: "1:430595488105:web:caf33dccc25a62159565f8",
  measurementId: "G-WTLG13W32G",
});

const auth = firebase.auth();

export { auth };
