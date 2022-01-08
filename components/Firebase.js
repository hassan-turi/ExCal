import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyChDYiZibdGvDjmLeb_lQrI3WM_7TWL9CM',
  authDomain: 'excal-9ba65.firebaseapp.com',
  databaseURL: 'https://excal-9ba65-default-rtdb.firebaseio.com',
  projectId: 'excal-9ba65',
  storageBucket: 'excal-9ba65.appspot.com',
  messagingSenderId: '482962081764',
  appId: '1:482962081764:web:4c4394edccc02ae8df69f1',
  measurementId: 'G-N4810FYTXM',
};

let app;
if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}

const auth = getAuth(app);

export { auth };
