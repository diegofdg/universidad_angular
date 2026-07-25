import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

@Injectable()
export class FirebaseService {
  private firebaseConfig = {
    apiKey: 'AIzaSyDuupd8fZBXfI6ZYnw8GmWiaxeB6fzvkIk',
    authDomain: 'listado-personas-825ec.firebaseapp.com',
    databaseURL: 'https://listado-personas-825ec-default-rtdb.firebaseio.com',
    projectId: 'listado-personas-825ec',
    storageBucket: 'listado-personas-825ec.appspot.com',
    messagingSenderId: '473578534245',
    appId: '1:473578534245:web:ffc556a3660cf41bfc1d8c',
  };

  public auth: Auth;
  public db: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }
}
