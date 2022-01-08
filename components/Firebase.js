import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Use own credential from 'firebase' in project setting
  apiKey: 'XXXXXX',
  authDomain: 'XXXXX',
  databaseURL: 'XXXXXX',
  projectId: 'XXXX',
  storageBucket: 'XXXXX',
  messagingSenderId: 'xXXXX',
  appId: 'XXXXX',
  measurementId: 'G-XXX',
};

let app;
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth(app);

export { auth };
