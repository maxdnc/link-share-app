// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDmIr5EYkoXwQsmrAkA81Ify3HFFCcJgc',
  authDomain: 'link-share-be075.firebaseapp.com',
  projectId: 'link-share-be075',
  storageBucket: 'link-share-be075.appspot.com',
  messagingSenderId: '534717049671',
  appId: '1:534717049671:web:161dfb801d35579e1eba62',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
