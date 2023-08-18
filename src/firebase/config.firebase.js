import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyA3ub40fzSWmN0jgofZju7GU5rOWlzP1yc',
  authDomain: 'bem-social.firebaseapp.com',
  projectId: 'bem-social',
  storageBucket: 'bem-social.appspot.com',
  messagingSenderId: '897168397200',
  appId: '1:897168397200:web:7d5c1868855ce1d5cc1915',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
