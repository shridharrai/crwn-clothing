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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
