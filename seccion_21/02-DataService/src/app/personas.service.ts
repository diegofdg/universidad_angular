import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

export class PersonasService{
    personas: Persona[] = [
        new Persona('Juan', 'Perez'),
        new Persona('Laura', 'Juarez'),
        new Persona('Karla', 'Lara'),
      ];
   

    agregarPersona(persona: Persona){
        this.personas.push(persona);
      }  
}