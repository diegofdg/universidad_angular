import { Component, OnInit } from '@angular/core';
// Firebase Modular API (Versiones 9+)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Listado de Personas';

  // Inicializa Firebase
  firebaseConfig = {
    apiKey: 'AIzaSyDuupd8fZBXfI6ZYnw8GmWiaxeB6fzvkIk',
    authDomain: 'listado-personas-825ec.firebaseapp.com',
    databaseURL: 'https://listado-personas-825ec-default-rtdb.firebaseio.com',
    projectId: 'listado-personas-825ec',
    storageBucket: 'listado-personas-825ec.appspot.com',
    messagingSenderId: '473578534245',
    appId: '1:473578534245:web:ffc556a3660cf41bfc1d8c',
  };

  app = initializeApp(this.firebaseConfig);
  db = getFirestore(this.app);
  auth = getAuth(this.app);
}
