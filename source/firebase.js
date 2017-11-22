import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDtC06-9Bqfv94hFQed1glT9yYGwSGsYU",
  authDomain: "freteman-8ab81.firebaseapp.com",
  databaseURL: "https://freteman-8ab81.firebaseio.com",
  projectId: "freteman-8ab81",
  storageBucket: "freteman-8ab81.appspot.com",
  messagingSenderId: "493363562614"
};

const fire = firebase.initializeApp(config);
export default fire;
