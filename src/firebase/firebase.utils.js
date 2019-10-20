import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyD-ifkulpd_6cuv2EVb3b1ukgr2fUUytgo',
    authDomain: 'jokers-book-db.firebaseapp.com',
    databaseURL: 'https://jokers-book-db.firebaseio.com',
    projectId: 'jokers-book-db',
    storageBucket: 'jokers-book-db.appspot.com',
    messagingSenderId: '1053361026291',
    appId: '1:1053361026291:web:dbdfe7016060fb14abf386',
    measurementId: 'G-NZ73116JMC'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
