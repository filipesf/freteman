import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBSeluDwkRuoy7FQugtgJi-rFC9Flkhteo",
  authDomain: "freteman-dev.firebaseapp.com",
  databaseURL: "https://freteman-dev.firebaseio.com",
  projectId: "freteman-dev",
  storageBucket: "freteman-dev.appspot.com",
  messagingSenderId: "842899606137"
};

const fire = firebase.initializeApp(config);
export default fire;
