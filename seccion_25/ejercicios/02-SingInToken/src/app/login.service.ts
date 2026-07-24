import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from './firebase.service';

@Injectable()
export class LoginService {
    token: string;

    constructor(private router: Router, private firebaseService: FirebaseService) {
        // Usa la instancia de auth desde FirebaseService
    }

    login(email: string, password: string) {
        const auth = this.firebaseService.auth;

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            auth.currentUser?.getIdToken().then(token => {
                this.token = token;
                this.router.navigate(['/']);
                });
            })
            .catch(error => {
                console.error('Error al iniciar sesión:', error);
            }
        );
    }

    getIdToken() {
        return this.token;
    }
}
