import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDJcM5R30TpFJg_VexZwLhDaRZVpFTShRY',
    authDomain: 'crwn-db-4ceaf.firebaseapp.com',
    projectId: 'crwn-db-4ceaf',
    storageBucket: 'crwn-db-4ceaf.appspot.com',
    messagingSenderId: '834539460736',
    appId: '1:834539460736:web:8c71eaa305c26bdcadee65',
    measurementId: 'G-PBP6NSWN4G'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();

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
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;