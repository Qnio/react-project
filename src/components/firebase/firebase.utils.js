import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDF8dtHYYU18tx1OA_0obYP1H_94u_7JyI',
  authDomain: 'invoice-react-a4e53.firebaseapp.com',
  databaseURL: 'https://invoice-react-a4e53.firebaseio.com',
  projectId: 'invoice-react-a4e53',
  storageBucket: 'invoice-react-a4e53.appspot.com',
  messagingSenderId: '477100922840',
  appId: '1:477100922840:web:c59575813fcfc3af3484ad',
  measurementId: 'G-DVB866NB1V'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
