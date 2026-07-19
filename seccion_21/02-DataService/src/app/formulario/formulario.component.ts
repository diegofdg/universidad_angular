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
  // nombreInput: string = '';
  // apellidoInput: string = '';
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ){}

  agregarPersona() {
   let persona1 = new Persona(
    this.nombreInput.nativeElement.value, 
    this.apellidoInput.nativeElement.value);
    this.loggingService.enviaMensajeAConsola("Enviamos persona: " 
      + "nombre: " + persona1.nombre + ", apellido:" + persona1.apellido);
   //this.personaCreada.emit(persona1);
   this.personasService.agregarPersona(persona1);
  }

}
