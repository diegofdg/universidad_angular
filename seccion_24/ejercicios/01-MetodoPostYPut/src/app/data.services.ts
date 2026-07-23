import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) {}

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