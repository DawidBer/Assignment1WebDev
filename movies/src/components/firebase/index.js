// firebase.js
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDXPSxzzrf5Enim56OJ-JjitPSXoQvMHik',
  authDomain: 'assignment1authentication.firebaseapp.com',
  projectId: 'assignment1authentication',
  storageBucket: 'assignment1authentication.appspot.com',
  messagingSenderId: '245023699002',
  appId: '1:245023699002:web:55a0aa001d52abbb8e8503',
  measurementId: 'G-2H31J17PRP'
};

 const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default { auth };
