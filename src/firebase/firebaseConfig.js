import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APIID
};

/*
Aca iria la base de datos para testing que se debe crear
const firebaseConfigTesting = {
    apiKey: "AIzaSyAZI9ah10UxC7K59VwKkTLXo8HIqTWquaE",
    authDomain: "react-app-cursos-28bd1.firebaseapp.com",
    projectId: "react-app-cursos-28bd1",
    storageBucket: "react-app-cursos-28bd1.appspot.com",
    messagingSenderId: "322288649759",
    appId: "1:322288649759:web:dfe2a929d4d03a5a15b72a"
};*/

if( process.env.NODE_ENV === 'test'){
    // testing 
    //firebase.initializeApp(firebaseConfigTesting);
}else{
    // dev/prod
    
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}