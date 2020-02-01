import firebase from 'firebase/app';
import 'firebase/firestore'; //For database
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAnH_i4iZB74SAOCPPk8f7eRTVPv_RdY-c',
  authDomain: 'crwn-db-3f00c.firebaseapp.com',
  databaseURL: 'https://crwn-db-3f00c.firebaseio.com',
  projectId: 'crwn-db-3f00c',
  storageBucket: 'crwn-db-3f00c.appspot.com',
  messagingSenderId: '429045534057',
  appId: '1:429045534057:web:73df7c558f0de9efc001f8',
  measurementId: 'G-G9RD9G1FJ1'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
