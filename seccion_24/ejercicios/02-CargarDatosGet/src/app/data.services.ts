import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) {}

    // cargarPersonas(){
    //         return this.httpClient.get('https://listado-personas-825ec-default-rtdb.firebaseio.com/datos.json');
    // }

    // Ahora tenemos que especificar los tipos a retornar
    cargarPersonas(): Observable<Persona[]>{
        return this.httpClient.get<Persona[]>('https://listado-personas-825ec-default-rtdb.firebaseio.com/datos.json');
    }


    // Guardar persona
    guardarPersonas(personas: Persona[]) {
    this.httpClient
        .put('https://listado-personas-825ec-default-rtdb.firebaseio.com/datos.json',personas)
        .subscribe({
            next: (response) => console.log('resultado guardar personas: ' + response),
            error: (error) => console.log('Error al guardar Personas: ' + error),
            complete: () => console.log('Petición completada con éxito'),
        });
    }
}