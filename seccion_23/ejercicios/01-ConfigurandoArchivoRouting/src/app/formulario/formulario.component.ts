import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombreInput: string = '';
  apellidoInput: string = '';
  
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ){
    this.personasService.saludar.subscribe(
      (indice:number) => alert("El índice es: " + indice)
    );
  }

  agregarPersona() {
   let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona: " 
    //  + "nombre: " + persona1.nombre + ", apellido:" + persona1.apellido);
   //this.personaCreada.emit(persona1);
   this.personasService.agregarPersona(persona1);
  }

}
