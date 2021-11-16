import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD1Li7MqBkOCugFaRnwGTR1jEfz1SHzjio',
  authDomain: 'ecomm-db-a6665.firebaseapp.com',
  projectId: 'ecomm-db-a6665',
  storageBucket: 'ecomm-db-a6665.appspot.com',
  messagingSenderId: '791549523681',
  appId: '1:791549523681:web:125bbf371cc4eb270ee9a0',
  measurementId: 'G-5CEYBRVLDB',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //Snapshot only represents the data
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
